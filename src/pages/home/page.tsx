import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, FileText, Activity, ArrowUpRight, MoreHorizontal, Settings } from "lucide-react"
import { useAuth } from "@/components/context/auth-context"

const stats = [
  {
    name: "Total de Usuários",
    value: "2,847",
    change: "+12%",
    changeType: "positive",
    icon: Users,
  },
  {
    name: "Documentos",
    value: "1,234",
    change: "+8%",
    changeType: "positive",
    icon: FileText,
  },
  {
    name: "Atividade",
    value: "89.2%",
    change: "+2.1%",
    changeType: "positive",
    icon: Activity,
  },
  {
    name: "Crescimento",
    value: "24.5%",
    change: "+4.3%",
    changeType: "positive",
    icon: TrendingUp,
  },
]

const recentActivity = [
  {
    id: 1,
    title: "Novo usuário registrado",
    description: "João Silva se registrou na plataforma",
    time: "2 min atrás",
  },
  {
    id: 2,
    title: "Documento atualizado",
    description: "Relatório mensal foi atualizado",
    time: "15 min atrás",
  },
  {
    id: 3,
    title: "Sistema atualizado",
    description: "Nova versão 2.1.0 foi implantada",
    time: "1 hora atrás",
  },
]

export default function Home() {
  const { signOut } = useAuth();
  return (
    <div className="flex-1 p-8 space-y-8">
    
    </div>
  )
}
