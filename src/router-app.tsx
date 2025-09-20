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
import { AppSidebar } from './components/app-sidebar';
import { ThemeProvider } from './components/theme-provider';
import { CardSignIn } from './components/auth/sign-in';
import { CardSignUp } from './components/auth/sign-up';
import Home from './pages/home/page';
import DashboardOverview from './pages/dashboard/overview';
import DashboardReports from './pages/dashboard/reports';
import DashboardAnalytics from './pages/dashboard/analytics';
import OrdersActive from './pages/orders/active';
import OrdersHistory from './pages/orders/history';
import OrdersCancelled from './pages/orders/cancelled';
import MenuProducts from './pages/menu/products';
import MenuCategories from './pages/menu/categories';
import MenuCombos from './pages/menu/combos';
import CustomersFeedbacks from './pages/customers/feedbacks';
import CustomersLoyalty from './pages/customers/loyalty';
import DriversRoutes from './pages/drivers/routes';
import DriversReports from './pages/drivers/reports';
import FinancePayments from './pages/finance/payments';
import FinanceInvoices from './pages/finance/invoices';
import FinanceFees from './pages/finance/fees';
import SettingsStore from './pages/settings/store';
import SettingsHours from './pages/settings/hours';
import SettingsIntegrations from './pages/settings/integrations';
import SettingsTeam from './pages/settings/team';

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
                path="/drivers/routes"
                element={
                  <PrivateLayout>
                    <DriversRoutes />
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
