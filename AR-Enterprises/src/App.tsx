import { Route, Switch, Router as WouterRouter } from 'wouter';
import { ThemeProvider } from '@/components/theme-provider';
import { Layout } from '@/components/layout/Layout';
import NotFound from '@/pages/not-found';

import Home from '@/pages/Home';
import Services from '@/pages/Services';
import Leadership from '@/pages/Leadership';
import Contact from '@/pages/Contact';

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/leadership" component={Leadership} />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </ThemeProvider>
  );
}

export default App;
