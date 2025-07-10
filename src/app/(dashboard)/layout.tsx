import DashBoardLayout from "./DashBoardLayout";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DashBoardLayout>{children}</DashBoardLayout>
    </div>
  );
}
