import { useGetAllEstablishments } from '@/hooks/establishment/use-get-all-establishment';
import { Card, CardHeader, CardContent } from '../ui/card';
import { MapPin, IdCard, CalendarRange, House, RefreshCcw } from 'lucide-react';
import { Alerts } from '../common/alert';
import { SkeletonEstablishment } from '../common/skeleton/skeleton-establishment';
import { Button } from '../ui/button';

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

  if (establishments.length === 0)
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
        <Button variant="outline" onClick={() => refetch()} className="flex items-center gap-2 cursor-pointer mr-3">
          <RefreshCcw className="w-4 h-4" /> Atualizar
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {establishments.map((est) => (
          <Card
            key={est.id}
            className="hover:shadow-lg transition-shadow duration-200"
          >
            <CardHeader>
              <div className="flex flex-col">
                <h2 className="font-bold text-lg flex gap-2 items-center">
                  <House className="w-4 h-4" />
                  {est.name}
                </h2>
                <h4 className="flex items-center gap-1 text-gray-500">
                  <IdCard className="w-4 h-4" /> Id usuário: {est.ownerId}
                </h4>
                <h4 className="flex items-center gap-1 text-gray-500">
                  <IdCard className="w-4 h-4" /> Id empresa: {est.ownerId}
                </h4>
              </div>
            </CardHeader>

            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CalendarRange className="w-4 h-4" />
                <span className="font-semibold">Criado:</span>
                <span>{est.createdAt.toLocaleString()}</span>
              </div>
            </CardContent>

            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <CalendarRange className="w-4 h-4" />
                <span className="font-semibold">Atualizado:</span>
                <span>{est.updatedAt.toLocaleString()}</span>
              </div>
            </CardContent>

            <CardContent className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span className="font-semibold">Endereço:</span>
                <span>{est.address}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
