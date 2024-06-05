/*
  Warnings:

  - You are about to drop the column `idMesero` on the `preparacion` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "preparacion" DROP COLUMN "idMesero",
ALTER COLUMN "tiempoEstimado" SET DATA TYPE TEXT;
