import { usePutEstablishment } from '@/hooks/establishment/use-patch-establishment';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '../ui/dialog';
import { Button } from '../ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  establishmentUpdateSchema,
  type EstablishmentUpdateInput,
} from '@/types/establishment/patch.establishment';
import { SquarePen } from 'lucide-react';

interface PatchDialogStoreProps {
  establishmentId: string;
  defaultValues?: Partial<EstablishmentUpdateInput>;
}

export default function PatchDialogStore({
  establishmentId,
  defaultValues,
}: PatchDialogStoreProps) {
  const { mutate: updateEstablishment, isPending: isLoading } =
    usePutEstablishment();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EstablishmentUpdateInput>({
    resolver: zodResolver(establishmentUpdateSchema),
    defaultValues,
  });

  const onSubmit = (data: EstablishmentUpdateInput) => {
    updateEstablishment(
      { id: establishmentId, data },
      {
        onSuccess: () => console.log('Estabelecimento atualizado com sucesso!'),
        onError: (err) => console.error('Erro ao atualizar:', err.message),
      }
    );
  };

  return (
    <Dialog>
      <DialogTrigger asChild className="cursor-pointer">
        <Button variant="outline">
          <SquarePen />
        </Button>
      </DialogTrigger>

      <DialogContent className="max-h-[80vh] w-full sm:max-w-lg overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle>Editar Estabelecimento</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
            {
              name: 'name',
              label: 'Nome',
              placeholder: 'Nome do estabelecimento',
            },
            { name: 'address', label: 'Endereço', placeholder: 'Endereço' },
            { name: 'street', label: 'Rua', placeholder: 'Rua' },
            { name: 'number', label: 'Número', placeholder: 'Número' },
            {
              name: 'complement',
              label: 'Complemento',
              placeholder: 'Complemento',
            },
            { name: 'neighborhood', label: 'Bairro', placeholder: 'Bairro' },
            { name: 'city', label: 'Cidade', placeholder: 'Cidade' },
            { name: 'state', label: 'Estado', placeholder: 'Estado' },
            { name: 'country', label: 'País', placeholder: 'País' },
            { name: 'zipCode', label: 'CEP', placeholder: 'CEP' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block font-semibold">{field.label}</label>
              <input
                {...register(field.name as keyof EstablishmentUpdateInput)}
                className="w-full border rounded p-2"
                placeholder={field.placeholder}
              />
              {errors[field.name as keyof EstablishmentUpdateInput] && (
                <p className="text-red-500 text-sm">
                  {
                    errors[field.name as keyof EstablishmentUpdateInput]
                      ?.message
                  }
                </p>
              )}
            </div>
          ))}

          <DialogFooter>
            <Button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer"
            >
              {isLoading ? 'Salvando...' : 'Salvar'}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
