/*
  Warnings:

  - The `estado` column on the `Cuenta` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to alter the column `total` on the `Cuenta` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - You are about to alter the column `precioUnitario` on the `LineaPedido` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - You are about to drop the column `ocupada` on the `Mesa` table. All the data in the column will be lost.
  - The `estado` column on the `Pedido` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the column `fotoUrl` on the `Plato` table. All the data in the column will be lost.
  - You are about to alter the column `precio` on the `Plato` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - You are about to drop the column `horario` on the `Restaurante` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[restauranteId,numero]` on the table `Mesa` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `actualizadoEn` to the `Categoria` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `CodigoQR` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `Comensal` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `Cuenta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meseroId` to the `Cuenta` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `Ingrediente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `LineaPedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `Mesa` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `Plato` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `RecetaItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `latitud` to the `Restaurante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `longitud` to the `Restaurante` table without a default value. This is not possible if the table is not empty.
  - Added the required column `actualizadoEn` to the `SesionMesa` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RolStaff" AS ENUM ('ADMINISTRADOR', 'MESERO', 'COCINERO', 'CAJERO');

-- CreateEnum
CREATE TYPE "EstadoPedido" AS ENUM ('RECIBIDO', 'EN_PREPARACION', 'LISTO', 'ENTREGADO');

-- CreateEnum
CREATE TYPE "EstadoCuenta" AS ENUM ('ABIERTA', 'CERRADA', 'CANCELADA');

-- CreateEnum
CREATE TYPE "DiaSemana" AS ENUM ('LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO');

-- AlterTable
ALTER TABLE "Categoria" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "CodigoQR" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Comensal" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "usuarioId" TEXT;

-- AlterTable
ALTER TABLE "Cuenta" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "cerradaEn" TIMESTAMP(3),
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "meseroId" TEXT NOT NULL,
ADD COLUMN     "propina" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "subtotal" INTEGER NOT NULL DEFAULT 0,
DROP COLUMN "estado",
ADD COLUMN     "estado" "EstadoCuenta" NOT NULL DEFAULT 'ABIERTA',
ALTER COLUMN "total" SET DEFAULT 0,
ALTER COLUMN "total" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Ingrediente" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "LineaPedido" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "comensalId" TEXT,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "notas" TEXT,
ALTER COLUMN "precioUnitario" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "Mesa" DROP COLUMN "ocupada",
ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
DROP COLUMN "estado",
ADD COLUMN     "estado" "EstadoPedido" NOT NULL DEFAULT 'RECIBIDO';

-- AlterTable
ALTER TABLE "Plato" DROP COLUMN "fotoUrl",
ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "fotos" TEXT[],
ALTER COLUMN "precio" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "RecetaItem" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "Restaurante" DROP COLUMN "horario",
ADD COLUMN     "latitud" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "longitud" DOUBLE PRECISION NOT NULL;

-- AlterTable
ALTER TABLE "SesionMesa" ADD COLUMN     "actualizadoEn" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- CreateTable
CREATE TABLE "Usuario" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "nombre" TEXT NOT NULL,
    "telefono" TEXT,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" TEXT NOT NULL,
    "rol" "RolStaff" NOT NULL,
    "activo" BOOLEAN NOT NULL DEFAULT true,
    "restauranteId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reseña" (
    "id" TEXT NOT NULL,
    "calificacion" INTEGER NOT NULL,
    "comentario" TEXT,
    "restauranteId" TEXT NOT NULL,
    "usuarioId" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Reseña_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ParteCuenta" (
    "id" TEXT NOT NULL,
    "subtotal" INTEGER NOT NULL,
    "total" INTEGER NOT NULL,
    "cuentaId" TEXT NOT NULL,
    "comensalId" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParteCuenta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pago" (
    "id" TEXT NOT NULL,
    "monto" INTEGER NOT NULL,
    "metodo" TEXT NOT NULL,
    "parteCuentaId" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Pago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TransaccionPago" (
    "id" TEXT NOT NULL,
    "proveedor" TEXT NOT NULL,
    "referenciaExterna" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "respuestaCruda" TEXT,
    "pagoId" TEXT NOT NULL,
    "creadoEn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "actualizadoEn" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TransaccionPago_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorarioAtencion" (
    "id" TEXT NOT NULL,
    "dia" "DiaSemana" NOT NULL,
    "horaApertura" TEXT NOT NULL,
    "horaCierre" TEXT NOT NULL,
    "restauranteId" TEXT NOT NULL,

    CONSTRAINT "HorarioAtencion_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_usuarioId_key" ON "Staff"("usuarioId");

-- CreateIndex
CREATE INDEX "Staff_restauranteId_idx" ON "Staff"("restauranteId");

-- CreateIndex
CREATE INDEX "Reseña_restauranteId_idx" ON "Reseña"("restauranteId");

-- CreateIndex
CREATE UNIQUE INDEX "Reseña_restauranteId_usuarioId_key" ON "Reseña"("restauranteId", "usuarioId");

-- CreateIndex
CREATE INDEX "ParteCuenta_cuentaId_idx" ON "ParteCuenta"("cuentaId");

-- CreateIndex
CREATE INDEX "ParteCuenta_comensalId_idx" ON "ParteCuenta"("comensalId");

-- CreateIndex
CREATE UNIQUE INDEX "ParteCuenta_cuentaId_comensalId_key" ON "ParteCuenta"("cuentaId", "comensalId");

-- CreateIndex
CREATE INDEX "Pago_parteCuentaId_idx" ON "Pago"("parteCuentaId");

-- CreateIndex
CREATE UNIQUE INDEX "TransaccionPago_referenciaExterna_key" ON "TransaccionPago"("referenciaExterna");

-- CreateIndex
CREATE UNIQUE INDEX "TransaccionPago_pagoId_key" ON "TransaccionPago"("pagoId");

-- CreateIndex
CREATE INDEX "HorarioAtencion_restauranteId_idx" ON "HorarioAtencion"("restauranteId");

-- CreateIndex
CREATE UNIQUE INDEX "HorarioAtencion_restauranteId_dia_key" ON "HorarioAtencion"("restauranteId", "dia");

-- CreateIndex
CREATE INDEX "Categoria_restauranteId_idx" ON "Categoria"("restauranteId");

-- CreateIndex
CREATE INDEX "Comensal_sesionMesaId_idx" ON "Comensal"("sesionMesaId");

-- CreateIndex
CREATE INDEX "Comensal_usuarioId_idx" ON "Comensal"("usuarioId");

-- CreateIndex
CREATE INDEX "Cuenta_sesionMesaId_idx" ON "Cuenta"("sesionMesaId");

-- CreateIndex
CREATE INDEX "Cuenta_meseroId_idx" ON "Cuenta"("meseroId");

-- CreateIndex
CREATE INDEX "Ingrediente_restauranteId_idx" ON "Ingrediente"("restauranteId");

-- CreateIndex
CREATE INDEX "LineaPedido_pedidoId_idx" ON "LineaPedido"("pedidoId");

-- CreateIndex
CREATE INDEX "LineaPedido_platoId_idx" ON "LineaPedido"("platoId");

-- CreateIndex
CREATE INDEX "LineaPedido_comensalId_idx" ON "LineaPedido"("comensalId");

-- CreateIndex
CREATE INDEX "Mesa_restauranteId_idx" ON "Mesa"("restauranteId");

-- CreateIndex
CREATE UNIQUE INDEX "Mesa_restauranteId_numero_key" ON "Mesa"("restauranteId", "numero");

-- CreateIndex
CREATE INDEX "Pedido_cuentaId_idx" ON "Pedido"("cuentaId");

-- CreateIndex
CREATE INDEX "Plato_categoriaId_idx" ON "Plato"("categoriaId");

-- CreateIndex
CREATE INDEX "RecetaItem_platoId_idx" ON "RecetaItem"("platoId");

-- CreateIndex
CREATE INDEX "RecetaItem_ingredienteId_idx" ON "RecetaItem"("ingredienteId");

-- CreateIndex
CREATE INDEX "SesionMesa_mesaId_idx" ON "SesionMesa"("mesaId");

-- AddForeignKey
ALTER TABLE "Comensal" ADD CONSTRAINT "Comensal_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cuenta" ADD CONSTRAINT "Cuenta_meseroId_fkey" FOREIGN KEY ("meseroId") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LineaPedido" ADD CONSTRAINT "LineaPedido_comensalId_fkey" FOREIGN KEY ("comensalId") REFERENCES "Comensal"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "Restaurante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Staff" ADD CONSTRAINT "Staff_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reseña" ADD CONSTRAINT "Reseña_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "Restaurante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reseña" ADD CONSTRAINT "Reseña_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParteCuenta" ADD CONSTRAINT "ParteCuenta_cuentaId_fkey" FOREIGN KEY ("cuentaId") REFERENCES "Cuenta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ParteCuenta" ADD CONSTRAINT "ParteCuenta_comensalId_fkey" FOREIGN KEY ("comensalId") REFERENCES "Comensal"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pago" ADD CONSTRAINT "Pago_parteCuentaId_fkey" FOREIGN KEY ("parteCuentaId") REFERENCES "ParteCuenta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TransaccionPago" ADD CONSTRAINT "TransaccionPago_pagoId_fkey" FOREIGN KEY ("pagoId") REFERENCES "Pago"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorarioAtencion" ADD CONSTRAINT "HorarioAtencion_restauranteId_fkey" FOREIGN KEY ("restauranteId") REFERENCES "Restaurante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
