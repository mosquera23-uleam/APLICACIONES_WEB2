-- CreateEnum
CREATE TYPE "Estado" AS ENUM ('Activo', 'Inactivo');

-- CreateTable
CREATE TABLE "cocinero" (
    "id" INTEGER NOT NULL,
    "nombre" TEXT NOT NULL,
    "sueldoBasico" INTEGER NOT NULL,
    "estado" "Estado" NOT NULL DEFAULT 'Activo',

    CONSTRAINT "cocinero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "receta" (
    "id" INTEGER NOT NULL,
    "nombrePlato" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "estado" "Estado" NOT NULL DEFAULT 'Activo',

    CONSTRAINT "receta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "preparacion" (
    "id" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hora" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "cantidadProductos" INTEGER NOT NULL,
    "costo" INTEGER NOT NULL,
    "tiempoEstimado" TEXT NOT NULL,
    "cocineroId" INTEGER NOT NULL,
    "recetaId" INTEGER NOT NULL,
    "estado" "Estado" NOT NULL DEFAULT 'Activo',

    CONSTRAINT "preparacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "preparacion" ADD CONSTRAINT "preparacion_cocineroId_fkey" FOREIGN KEY ("cocineroId") REFERENCES "cocinero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "preparacion" ADD CONSTRAINT "preparacion_recetaId_fkey" FOREIGN KEY ("recetaId") REFERENCES "receta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
