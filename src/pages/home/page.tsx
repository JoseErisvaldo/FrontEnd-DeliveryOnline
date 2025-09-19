import { useAuth } from "@/components/context/auth-context";
import { Button } from "@/components/ui/button";

export default function Home() {
  const { signOut } = useAuth();
  return (
    <div>
      <h1>Bem Vindo</h1>
      <div>Home</div>
      <Button variant="destructive" onClick={signOut}>Sair</Button>
    </div>
  );
}
