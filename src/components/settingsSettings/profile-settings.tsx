import { useGetProfile } from "@/hooks/settings/use-get-profile";
import { Alerts } from "../common/alert";
import { SkeletonUser } from "../common/skeleton/skeleton-profile";

export default function UserSettings() {
  const { profile, loading, error } = useGetProfile();
  console.log("User data:", profile);
  if (loading) return <SkeletonUser />;

  if (error)
    return (
      <Alerts
        message={{ title: "Erro ao buscar os dados do usuário", description: error }}
        type="destructive"
      />
    );

  if (!profile)
    return (
      <Alerts
        message={{ title: "Usuário não encontrado", description: "Não foi possível carregar os dados do usuário." }}
        type="destructive"
      />
    );

  return (
    <div>
      <h2 className="font-bold text-lg mb-2">Configurações do Usuário</h2>
      {profile.name && <p><strong>Nome:</strong> {profile.name}</p>}
      {profile.email && <p><strong>Email:</strong> {profile.email}</p>}
      {profile.role && <p><strong>Permissão:</strong> {profile.role}</p>}
    </div>
  );
}
