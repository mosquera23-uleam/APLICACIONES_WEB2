/*
  Warnings:

  - You are about to drop the `Cocinero` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Preparacion` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Receta` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Preparacion" DROP CONSTRAINT "Preparacion_cocineroId_fkey";

-- DropForeignKey
ALTER TABLE "Preparacion" DROP CONSTRAINT "Preparacion_recetaId_fkey";

-- DropTable
DROP TABLE "Cocinero";

-- DropTable
DROP TABLE "Preparacion";

-- DropTable
DROP TABLE "Receta";

-- CreateTable
CREATE TABLE "cocinero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "sueldoBasico" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "cocinero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receta" (
    "id" SERIAL NOT NULL,
    "nombrePlato" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,

    CONSTRAINT "receta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "preparacion" (
    "id" SERIAL NOT NULL,
    "idMesero" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "cantidadProductos" INTEGER NOT NULL,
    "costo" DOUBLE PRECISION NOT NULL,
    "tiempoEstimado" INTEGER NOT NULL,
    "cocineroId" INTEGER NOT NULL,
    "recetaId" INTEGER NOT NULL,

    CONSTRAINT "preparacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "preparacion" ADD CONSTRAINT "preparacion_cocineroId_fkey" FOREIGN KEY ("cocineroId") REFERENCES "cocinero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "preparacion" ADD CONSTRAINT "preparacion_recetaId_fkey" FOREIGN KEY ("recetaId") REFERENCES "receta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
