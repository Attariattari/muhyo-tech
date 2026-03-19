import AdminSidebar from "@/components/AdminSidebar";
import Topbar from "@/components/admin/Topbar";

export default function ProtectedAdminLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#0a0f1c] selection:bg-accent selection:text-white">
      <AdminSidebar />
      <div className="flex-grow flex flex-col pl-64">
        <Topbar />
        <main className="p-10 flex-grow overflow-y-auto scroll-smooth">
          {children}
        </main>
      </div>
    </div>
  );
}
