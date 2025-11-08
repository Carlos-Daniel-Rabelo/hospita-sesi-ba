import { Outlet } from "react-router-dom";
import { Header } from "@/components/hospital/Header";
import { Footer } from "@/components/hospital/Footer";
import { WhatsAppWidget } from "@/components/hospital/WhatsAppWidget";

export default function HospitalLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
}
