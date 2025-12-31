import "@/app/globals.css";

export const metadata = {
  title: "Dashboard Pages",
  description: "Dashboard pages",
};

export default function DashboardLayout({ children, users, notifications, revenue }) {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
        <div className="flex">
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div>{users}</div>
            <div>{revenue}</div>
          </div>
          <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
        </div>
      </body>
    </html>
  );
}
