import { useUser } from "@/hooks/settings/use-user";
import { Loading } from "../common/page-loader";
import { Alerts } from "../common/alert";

export default function UserSettings() {
  const { user, loading, error } = useUser();

  if (loading) return <Loading />;
  if (error) return <Alerts message={{ title: "Erro buscar os dados do usuário", description: error }} type="destructive" />;

  return (
    <div>
      <h2 className="font-bold text-lg mb-2">Configurações do Usuário</h2>
      <p><strong>Nome:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Permissão:</strong> {user.role}</p>
    </div>
  );
}
