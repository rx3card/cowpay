import { MesaDetallePage } from "../../../../features/mesero/pages/MesaDetallePage";

// Describimos los datos que NextJS entrega a esta página.
type PageProps = {
  params: Promise<{ id: string }>;
};

// Recibimos los párametros y podemos esperar su resultado.
export default async function Page({ params }: PageProps) {
  const { id } = await params;
  // Entregamos ese identificador a la página
  return <MesaDetallePage mesaId={id} />;
}
