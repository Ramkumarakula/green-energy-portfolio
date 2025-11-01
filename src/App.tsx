import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// CRITICAL: Switched to HashRouter
import { HashRouter, Routes, Route } from "react-router-dom"; 
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Activity1 from "./pages/Activity1";
import Activity2 from "./pages/Activity2";
import Activity3 from "./pages/Activity3";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* HashRouter handles routing entirely client-side, avoiding server 404s */}
      <HashRouter> 
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/activity1" element={<Activity1 />} />
            <Route path="/activity2" element={<Activity2 />} />
            <Route path="/activity3" element={<Activity3 />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;