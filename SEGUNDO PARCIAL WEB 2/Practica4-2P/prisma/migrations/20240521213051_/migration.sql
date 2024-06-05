-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('Activo', 'Pendiente', 'Eliminado');

-- AlterTable
ALTER TABLE "cocinero" ADD COLUMN     "estado" "Estado" NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "preparacion" ADD COLUMN     "estado" "Estado" NOT NULL DEFAULT 'Activo';

-- AlterTable
ALTER TABLE "receta" ADD COLUMN     "estado" "Estado" NOT NULL DEFAULT 'Activo';
