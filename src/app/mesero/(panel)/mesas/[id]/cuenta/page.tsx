import { CuentaMesaPage } from "../../../../../features/mesero/pages/CuentaMesaPage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <CuentaMesaPage id={id} />;
}
