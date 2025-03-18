import CounsellorNavbar from "./(components)/CounsellorNavbar";
import CounsellorSidebar from "./(components)/CounsellorSidebar";

export default function CounsellorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[200px_1fr] ">
      <CounsellorSidebar />
      <CounsellorNavbar>
        <main className="p-4">{children}</main>
      </CounsellorNavbar>
    </div>
  );
}
