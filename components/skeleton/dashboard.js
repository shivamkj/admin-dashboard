import { useState } from "react";
import Header from "./header";
import SideBar from "./sidebar";
import MobileMenu from "./mobile-menu";

export default function Dashboard({ children }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="h-full flex">
      {/* Narrow sidebar */}
      <SideBar />

      {/* Mobile menu */}
      <MobileMenu isOpen={mobileMenuOpen} setOpen={setMobileMenuOpen} />

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header setOpen={setMobileMenuOpen} />
        <div className="p-12 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
