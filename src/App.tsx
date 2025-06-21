import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { Navigate } from "react-router-dom";


import Home from "./pages/Home";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Register" replace />} />

          <Route path="/index" element={<Index />} />
  {/* Home */}
          <Route
          path="/Home"
          element={<Home />}
          />

          {/* Register */}
          <Route
          path="/Register"
          element={<Register />}
          />

          {/* Login */}
          <Route
          path="/Login"
          element={<Login />}
          />

{/* Daskboard */}
          <Route
          path="/Dashboard"
          element={<Dashboard />}
          />


          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/" element={<Home />} />
//           <Route path="/" element={<Register />} />
//           <Route path="/" element={<Login />} />
//           <Route path="/" element={<Dashboard />} />
//           {/* Catch-all */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

export default App;
