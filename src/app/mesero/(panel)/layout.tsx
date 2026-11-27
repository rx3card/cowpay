import type { ReactNode } from "react";
import { MeseroHeader } from "../../../features/mesero/components/MeseroHeader";
import styles from "../../../features/mesero/styles/MeseroLayout.module.css";

type MeseroLayoutProps = {
  children: ReactNode;
};

export default function MeseroLayout({ children }: MeseroLayoutProps) {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <MeseroHeader />
      </aside>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
