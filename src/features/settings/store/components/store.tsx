import { useGetAllEstablishments } from '@/features/settings/establishment/hooks/use-get-all-establishment';
import { Card, CardHeader, CardContent } from '../../../../components/ui/card';
import { MapPin, IdCard, CalendarRange, House, RefreshCcw } from 'lucide-react';
import { Alerts } from '../../../../components/common/alert';
import { SkeletonEstablishment } from '../../../../components/common/skeleton/skeleton-establishment';
import { Button } from '../../../../components/ui/button';
import PatchDialogStore from './patch-dialog-store';

export default function Store() {
  const { establishments, loading, error, refetch } = useGetAllEstablishments();

  if (loading) return <SkeletonEstablishment />;

  if (error)
    return (
      <Alerts
        message={{
          title: 'Erro ao buscar os estabelecimentos',
          description: error,
        }}
        type="destructive"
      />
    );

  if (!establishments || establishments.length === 0)
    return (
      <Alerts
        message={{
          title: 'Nenhum estabelecimento encontrado',
          description: 'Por favor, adicione um estabelecimento para continuar.',
        }}
        type="destructive"
      />
    );

  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-bold text-lg">
          Configurações{' '}
          {establishments.length > 1
            ? 'dos Estabelecimentos'
            : 'do Estabelecimento'}
        </h2>
        <Button
          variant="outline"
          onClick={() => refetch()}
          className="flex items-center gap-2 cursor-pointer mr-3"
        >
          <RefreshCcw className="w-4 h-4" /> Atualizar
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {establishments.map((est) => (
          <Card
            key={est.id}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <div className="pr-3 flex justify-end">
              <PatchDialogStore establishmentId={est.id} defaultValues={est} />
            </div>

            <CardHeader>
              <div className="flex flex-col">
                <h2 className="font-bold text-lg flex gap-2 items-center">
                  <House className="w-4 h-4" />
                  {est.name}
                </h2>
                <h4 className="flex items-center gap-1 text-gray-500">
                  <IdCard className="w-4 h-4" /> Id empresa: {est.ownerId}
                </h4>
              </div>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
              {est.photo && (
                <div className="flex items-center justify-center gap-2">
                  <img
                    src={est.photo}
                    alt={est.name}
                    className="rounded-3xl w-96 h-96 object-cover"
                  />
                </div>
              )}

              {est.address && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <span className="font-semibold">Endereço:</span>
                  <span>
                    {est.street ? `${est.street}, ` : ''}
                    {est.number ?? ''}
                    {est.complement ? ` - ${est.complement}` : ''}
                    {est.neighborhood ? `, ${est.neighborhood}` : ''}
                    {est.city ? `, ${est.city}` : ''}
                    {est.state ? ` - ${est.state}` : ''}
                    {est.country ? `, ${est.country}` : ''}
                    {est.zipCode ? ` - ${est.zipCode}` : ''}
                  </span>
                </div>
              )}

              {est.statusName && (
                <div className="flex items-center gap-2">
                  <span className="font-semibold">Status:</span>
                  <span>{est.statusName}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <CalendarRange className="w-4 h-4" />
                <span className="font-semibold">Criado:</span>
                <span>{new Date(est.createdAt).toLocaleString()}</span>
              </div>

              <div className="flex items-center gap-2">
                <CalendarRange className="w-4 h-4" />
                <span className="font-semibold">Atualizado:</span>
                <span>{new Date(est.updatedAt).toLocaleString()}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
