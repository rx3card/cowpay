import type { ReactNode } from "react";
import { AdminHeader } from "../../features/admin/components/AdminHeader";

export const metadata = { robots: { index: false, follow: false } };

type LayoutProps = { children: ReactNode };

export default function Layout({ children }: LayoutProps) {
  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}
