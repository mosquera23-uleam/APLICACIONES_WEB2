/*
  Warnings:

  - You are about to alter the column `sueldoBasico` on the `cocinero` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `costo` on the `preparacion` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "cocinero" ALTER COLUMN "sueldoBasico" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "preparacion" ALTER COLUMN "costo" SET DATA TYPE INTEGER;
