import "../styles/globals.css";

import Footer from "../components/footer/Footer";
import Header from "@/components/header/Header";
import Promosale from "@/components/header/promoSale/Promosale";
import NavbarSection from "@/components/header/navbar/CustomNavbar";
import WhatsAppComponent from "@/components/whatsapp/WhatsAppComponent";
import WhatsAppComponent2 from "@/components/whatsapp/WhatsAppComponent2";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-screen relative">
        <Promosale />
        <Header />
        <NavbarSection />
        <WhatsAppComponent2 />
        {children}
        <Footer />
      </body>
    </html>
  );
}
