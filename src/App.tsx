import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HospitalLayout from "./pages/hospital/HospitalLayout";
import Home from "./pages/hospital/Home";
import Services from "./pages/hospital/Services";
import Products from "./pages/hospital/Products";
import Contact from "./pages/hospital/Contact";
import Login from "./pages/hospital/Login";
import Register from "./pages/hospital/Register";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<HospitalLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/produtos" element={<Products />} />
            <Route path="/contato" element={<Contact />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
