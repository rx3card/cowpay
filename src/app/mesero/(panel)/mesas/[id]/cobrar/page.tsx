import { CobrarMesaPage } from "../../../../../features/mesero/pages/CobrarMesaPage";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  return <CobrarMesaPage id={id} />;
}
