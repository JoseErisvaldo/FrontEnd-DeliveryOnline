import { Dialog } from "@radix-ui/react-dialog";
import {
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { useGetProfile } from "@/hooks/settings/use-get-profile";
import { usePostCategory } from "@/hooks/category/use-post-category";
import { Input } from "../ui/input";
import { postCategorySchema, type postCategoryInput } from "@/types/category/post-category";
import { z } from "zod";
import { SkeletonButton } from "../common/skeleton/skeleton-button";
import { Alerts } from "../common/alert";

export function PostDialogCategory() {
  const { profile, loading, error: errorProfile } = useGetProfile();
  const { mutate, status, error } = usePostCategory();

  const [formData, setFormData] = useState<postCategoryInput>({
    name: "",
    userId: "",
  });

  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    if (profile?.id) {
      setFormData((prev) => ({ ...prev, userId: profile.id }));
    }
  }, [profile]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const validatedData = postCategorySchema.parse(formData);

      mutate(validatedData, {
        onSuccess: () => {
          setFormData({ name: "", userId: profile?.id || "" });
          setSuccessMessage(`Categoria "${formData.name}" criada com sucesso!`);
          setTimeout(() => setSuccessMessage(null), 3000);
        },
        onError: (err) => {
          console.error("Erro ao enviar categoria:", err);
        },
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        console.error("Erro de validação de input:", err);
      }
    }
  };

  if (errorProfile) return <Alerts
    message={{
      title: 'Erro ao carregar cadastrar categoria',
      description: errorProfile,
    }}
    type="destructive"
  />;

  if (loading || !profile) return <SkeletonButton />;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="btn btn-primary cursor-pointer">Nova Categoria</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader className="mb-4">
          <DialogTitle className="text-lg font-medium">Nova Categoria</DialogTitle>
        </DialogHeader>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid gap-2">
            <label htmlFor="name">Nome da Categoria</label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite o nome da categoria"
            />
          </div>

          <DialogFooter>
            <Button type="submit" className="btn btn-primary" disabled={status === "pending"}>
              {status === "pending" ? "Criando..." : "Criar Categoria"}
            </Button>
          </DialogFooter>

          {status === "error" && (
            <p className="text-red-500">
              {error instanceof Error ? error.message : "Erro ao criar categoria. Tente novamente."}
            </p>
          )}
          {successMessage && <p className="text-green-500">{successMessage}</p>}
        </form>
      </DialogContent>
    </Dialog>
  );
}
