import CounselorNavbar from "./(components)/CounselorNavbar";
import CounselorSidebar from "./(components)/CounselorSidebar";

export default function counselorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="lg:grid lg:min-h-screen w-full lg:grid-cols-[230px_1fr]">
      <CounselorSidebar />
      <CounselorNavbar>
        <main className="p-4 ">{children}</main>
      </CounselorNavbar>
    </div>
  );
}
