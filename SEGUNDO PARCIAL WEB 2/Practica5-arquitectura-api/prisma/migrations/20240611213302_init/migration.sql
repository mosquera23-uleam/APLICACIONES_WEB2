/*
  Warnings:

  - You are about to drop the column `estado` on the `cocinero` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `preparacion` table. All the data in the column will be lost.
  - You are about to drop the column `estado` on the `receta` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "cocinero" DROP COLUMN "estado";

-- AlterTable
ALTER TABLE "preparacion" DROP COLUMN "estado";

-- AlterTable
ALTER TABLE "receta" DROP COLUMN "estado";

-- DropEnum
DROP TYPE "Estado";
