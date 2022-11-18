import { useState } from "react";
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
        <div className="p-12 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
