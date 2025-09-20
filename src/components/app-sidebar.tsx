import * as React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { SearchForm } from '@/components/search-form';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';
import { ModeToggle } from './mode-toggle';
import { useAuth } from './context/auth-context';
import { Button } from './ui/button';
import { SideBar } from './version-switcher';

// Sample data
const data = {
  versions: ['1.0.0', '1.0.0-alpha', '1.0.0-beta1'],
  navMain: [
    {
      title: 'Dashboard',
      url: '#',
      items: [
        { title: 'Visão Geral', url: '/dashboard/overview' },
        { title: 'Relatórios', url: '/dashboard/reports' },
        { title: 'Analytics', url: '/dashboard/analytics' },
      ],
    },
    {
      title: 'Pedidos',
      url: '#',
      items: [
        { title: 'Pedidos Ativos', url: '/orders/active' },
        { title: 'Histórico de Pedidos', url: '/orders/history' },
        { title: 'Cancelados', url: '/orders/cancelled' },
      ],
    },
    {
      title: 'Cardápio',
      url: '#',
      items: [
        { title: 'Produtos', url: '/menu/products' },
        { title: 'Categorias', url: '/menu/categories' },
        { title: 'Combos & Ofertas', url: '/menu/combos' },
      ],
    },
    {
      title: 'Clientes',
      url: '#',
      items: [
        { title: 'Lista de Clientes', url: '/customers' },
        { title: 'Feedbacks', url: '/customers/feedbacks' },
        { title: 'Fidelidade', url: '/customers/loyalty' },
      ],
    },
    {
      title: 'Entregadores',
      url: '#',
      items: [
        { title: 'Entregadores Ativos', url: '/drivers' },
        { title: 'Rotas e Regiões', url: '/drivers/routes' },
        { title: 'Relatórios de Entrega', url: '/drivers/reports' },
      ],
    },
    {
      title: 'Financeiro',
      url: '#',
      items: [
        { title: 'Pagamentos', url: '/finance/payments' },
        { title: 'Faturas', url: '/finance/invoices' },
        { title: 'Taxas e Comissões', url: '/finance/fees' },
      ],
    },
    {
      title: 'Configurações',
      url: '#',
      items: [
        { title: 'Loja & Perfil', url: '/settings/store' },
        { title: 'Horários de Funcionamento', url: '/settings/hours' },
        { title: 'Integrações (ex: iFood)', url: '/settings/integrations' },
        { title: 'Equipe e Permissões', url: '/settings/team' },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { signOut } = useAuth();
  const location = useLocation();

  const localStorageKey = 'sidebar-active-route';

  // sempre que mudar de rota, salvar no localStorage
  React.useEffect(() => {
    localStorage.setItem(localStorageKey, location.pathname);
  }, [location.pathname]);

  // recuperar rota ativa salva
  const savedPath = localStorage.getItem(localStorageKey) || location.pathname;

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SideBar versions={data.versions} defaultVersion={data.versions[0]} />
        <SearchForm />
      </SidebarHeader>

      <SidebarContent className="flex flex-col justify-between h-full">
        <div>
          {data.navMain.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        asChild
                        isActive={savedPath === item.url} // 🔥 marca ativo mesmo após reload
                      >
                        <NavLink to={item.url}>{item.title}</NavLink>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </div>

        {/* Rodapé */}
        <div className="flex flex-col gap-2 pt-6 border-t border-border mt-4">
          <Button variant="outline" className="w-full" onClick={signOut}>
            Sair
          </Button>

          <div className="w-full">
            <ModeToggle />
          </div>
        </div>
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
