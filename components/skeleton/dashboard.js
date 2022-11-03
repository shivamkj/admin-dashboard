import Header from "./header";
import SideBar from "./sidebar";
import MobileMenu from "./mobile-menu";

export default function Dashboard({ children }) {
  return (
    <div className="h-full flex">
      {/* Narrow sidebar */}
      <SideBar />

      {/* Mobile menu */}
      <MobileMenu />

      {/* Content area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <div className="m-12">{children}</div>
      </div>
    </div>
  );
}
