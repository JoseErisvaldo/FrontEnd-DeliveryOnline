import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import { Suspense, type ReactNode } from 'react';

import { AuthProvider, useAuth } from './components/context/auth-context';
import { SidebarProvider, SidebarTrigger } from './components/ui/sidebar';
import { AppSidebar } from './shared/ui/app-sidebar';
import { ThemeProvider } from './shared/ui/theme-provider';
import { CardSignIn } from './shared/auth/sign-in';
import { CardSignUp } from './shared/auth/sign-up';
import Home from './features/dashboard/home/page/page';
import DashboardOverview from './features/dashboard/overview/page/overview';
import DashboardReports from './features/drivers/reports/page/reports';
import DashboardAnalytics from './features/dashboard/analytics/page/analytics';
import OrdersActive from './features/orders/active/page/active';
import OrdersHistory from './features/orders/history/page/history';
import OrdersCancelled from './features/orders/cancelled/page/cancelled';
import MenuProducts from './features/menu/products/page/products';
import MenuCombos from './features/menu/combos/page/combos';
import CustomersLoyalty from './features/customers/loyalty/page/loyalty';
import DriversReports from './features/delivery-report/page/delivery-report';
import FinancePayments from './features/finance/payments/page/payments';
import FinanceInvoices from './features/finance/invoices/page/invoices';
import FinanceFees from './features/finance/fees/page/fees';
import SettingsStore from './features/settings/store/page/store';
import SettingsHours from './features/settings/hours/page/hours';
import SettingsIntegrations from './features/settings/integrations/page/integrations';
import SettingsTeam from './features/settings/team/page/team';
import MenuCategories from './features/menu/categories/pages/categories';
import CustomersFeedbacks from './features/customers/feedbacks/page/feedbacks';

const LOCAL_STORAGE_KEY = 'sidebar-active-route';

const PrivateRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();
  const location = useLocation();
  const lastPath = localStorage.getItem(LOCAL_STORAGE_KEY) || '/';

  if (!token) return <Navigate to="/auth/sign-in" />;
  if (location.pathname === '/' && lastPath !== '/') {
    return <Navigate to={lastPath} replace />;
  }

  return <>{children}</>;
};

const PublicRoute = ({ children }: { children: ReactNode }) => {
  const { token } = useAuth();
  return !token ? children : <Navigate to="/" />;
};

const PrivateLayout = ({ children }: { children: ReactNode }) => (
  <PrivateRoute>
    <SidebarProvider>
      <AppSidebar />
      <SidebarTrigger />
      {children}
    </SidebarProvider>
  </PrivateRoute>
);

export const RouterApp = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <AuthProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route
                path="/auth/sign-in"
                element={
                  <PublicRoute>
                    <CardSignIn />
                  </PublicRoute>
                }
              />
              <Route
                path="/auth/sign-up"
                element={
                  <PublicRoute>
                    <CardSignUp />
                  </PublicRoute>
                }
              />
              <Route
                path="/"
                element={
                  <PrivateLayout>
                    <Home />
                  </PrivateLayout>
                }
              />
              <Route
                path="/dashboard/overview"
                element={
                  <PrivateLayout>
                    <DashboardOverview />
                  </PrivateLayout>
                }
              />
              <Route
                path="/dashboard/reports"
                element={
                  <PrivateLayout>
                    <DashboardReports />
                  </PrivateLayout>
                }
              />
              <Route
                path="/dashboard/analytics"
                element={
                  <PrivateLayout>
                    <DashboardAnalytics />
                  </PrivateLayout>
                }
              />

              <Route
                path="/orders/active"
                element={
                  <PrivateLayout>
                    <OrdersActive />
                  </PrivateLayout>
                }
              />
              <Route
                path="/orders/history"
                element={
                  <PrivateLayout>
                    <OrdersHistory />
                  </PrivateLayout>
                }
              />
              <Route
                path="/orders/cancelled"
                element={
                  <PrivateLayout>
                    <OrdersCancelled />
                  </PrivateLayout>
                }
              />

              <Route
                path="/menu/products"
                element={
                  <PrivateLayout>
                    <MenuProducts />
                  </PrivateLayout>
                }
              />
              <Route
                path="/menu/categories"
                element={
                  <PrivateLayout>
                    <MenuCategories />
                  </PrivateLayout>
                }
              />
              <Route
                path="/menu/combos"
                element={
                  <PrivateLayout>
                    <MenuCombos />
                  </PrivateLayout>
                }
              />

              <Route
                path="/customers/feedbacks"
                element={
                  <PrivateLayout>
                    <CustomersFeedbacks />
                  </PrivateLayout>
                }
              />
              <Route
                path="/customers/loyalty"
                element={
                  <PrivateLayout>
                    <CustomersLoyalty />
                  </PrivateLayout>
                }
              />

              <Route
                path="/drivers/reports"
                element={
                  <PrivateLayout>
                    <DriversReports />
                  </PrivateLayout>
                }
              />

              <Route
                path="/finance/payments"
                element={
                  <PrivateLayout>
                    <FinancePayments />
                  </PrivateLayout>
                }
              />
              <Route
                path="/finance/invoices"
                element={
                  <PrivateLayout>
                    <FinanceInvoices />
                  </PrivateLayout>
                }
              />
              <Route
                path="/finance/fees"
                element={
                  <PrivateLayout>
                    <FinanceFees />
                  </PrivateLayout>
                }
              />

              <Route
                path="/settings/store"
                element={
                  <PrivateLayout>
                    <SettingsStore />
                  </PrivateLayout>
                }
              />
              <Route
                path="/settings/hours"
                element={
                  <PrivateLayout>
                    <SettingsHours />
                  </PrivateLayout>
                }
              />
              <Route
                path="/settings/integrations"
                element={
                  <PrivateLayout>
                    <SettingsIntegrations />
                  </PrivateLayout>
                }
              />
              <Route
                path="/settings/team"
                element={
                  <PrivateLayout>
                    <SettingsTeam />
                  </PrivateLayout>
                }
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};
