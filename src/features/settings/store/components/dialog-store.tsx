import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { usePostEstablishment } from '@/features/settings/establishment/hooks/use-post-establishment';
import { establishmentCreateSchema } from '@/features/settings/establishment/types/post-establishment';
import React from 'react';
import type { EstablishmentCreateInput } from '@/features/settings/establishment/types/post-establishment';
import { Alerts } from '../../../../components/common/alert';

export function DialogStore() {
  const [formData, setFormData] = React.useState<EstablishmentCreateInput>({
    name: '',
    photo: '',
    address: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    country: '',
    zipCode: '',
  });
  const [formError, setFormError] = React.useState<string | null>(null);
  const [validationError, setValidationError] = React.useState<string | null>(
    null
  );
  const [successMessage, setSuccessMessage] = React.useState<string | null>(
    null
  );

  const { mutate, reset, status } = usePostEstablishment();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setFormError(null);
    setValidationError(null);
    setSuccessMessage(null);

    try {
      const data = establishmentCreateSchema.parse(formData);

      mutate(data, {
        onSuccess: () => {
          setFormData({
            name: '',
            photo: '',
            address: '',
            street: '',
            number: '',
            complement: '',
            neighborhood: '',
            city: '',
            state: '',
            country: '',
            zipCode: '',
          });

          setSuccessMessage('Criado com sucesso!');
          setTimeout(() => {
            setSuccessMessage(null);
            reset();
          }, 3000);
        },
        onError: (error) => {
          setFormError(error.message || 'Erro ao criar estabelecimento');
        },
      });
      console.log(data);
    } catch (err) {
      if (err instanceof Error) {
        setValidationError(err.message);
      }
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="cursor-pointer">
          Novo Estabelecimento
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Criar Novo Estabelecimento</DialogTitle>
            <DialogDescription>
              Preencha os dados do estabelecimento abaixo.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2">
            <Label htmlFor="name">Nome (obrigatório)</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="photo">Url da foto</Label>
            <Input
              id="photo"
              name="photo"
              value={formData.photo}
              onChange={handleChange}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="address">Endereço (opcional)</Label>
            <Input
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="street">Rua (opcional)</Label>
            <Input
              id="street"
              name="street"
              value={formData.street}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="number">Número (opcional)</Label>
            <Input
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="complement">Complemento (opcional)</Label>
            <Input
              id="complement"
              name="complement"
              value={formData.complement}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="neighborhood">Bairro (opcional)</Label>
            <Input
              id="neighborhood"
              name="neighborhood"
              value={formData.neighborhood}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="city">Cidade (opcional)</Label>
            <Input
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="state">Estado (opcional)</Label>
            <Input
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="country">País (opcional)</Label>
            <Input
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="zipCode">CEP (opcional)</Label>
            <Input
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
            />
          </div>

          {(formError || successMessage) && (
            <Alerts
              message={{
                title: formError ? 'Erro' : 'Sucesso',
                description: formError || successMessage || '',
              }}
              type={formError ? 'destructive' : 'default'}
            />
          )}

          {validationError && (
            <p className="text-red-600">Erro de validação: {validationError}</p>
          )}

          <DialogFooter className="grid grid-cols-1 gap-2">
            <div className="flex justify-end gap-2">
              <DialogClose asChild>
                <Button variant="outline">Cancelar</Button>
              </DialogClose>
              <Button type="submit" disabled={status === 'pending'}>
                {status === 'pending' ? 'Salvando...' : 'Salvar'}
              </Button>
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
