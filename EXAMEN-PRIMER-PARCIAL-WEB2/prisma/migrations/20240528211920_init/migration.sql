-- AlterTable
ALTER TABLE "cocinero" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "cocinero_id_seq";

-- AlterTable
ALTER TABLE "preparacion" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "preparacion_id_seq";

-- AlterTable
ALTER TABLE "receta" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "receta_id_seq";

-- CreateTable
CREATE TABLE "secuencia" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "secuencia" INTEGER NOT NULL,

    CONSTRAINT "secuencia_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secuencia_nombre_key" ON "secuencia"("nombre");
