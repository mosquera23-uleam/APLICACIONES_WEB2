-- CreateTable
CREATE TABLE "Cocinero" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "sueldoBasico" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Cocinero_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Receta" (
    "id" SERIAL NOT NULL,
    "nombrePlato" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,

    CONSTRAINT "Receta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Preparacion" (
    "id" SERIAL NOT NULL,
    "idMesero" INTEGER NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL,
    "hora" TIMESTAMP(3) NOT NULL,
    "cantidadProductos" INTEGER NOT NULL,
    "costo" DOUBLE PRECISION NOT NULL,
    "tiempoEstimado" INTEGER NOT NULL,
    "cocineroId" INTEGER NOT NULL,
    "recetaId" INTEGER NOT NULL,

    CONSTRAINT "Preparacion_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Preparacion" ADD CONSTRAINT "Preparacion_cocineroId_fkey" FOREIGN KEY ("cocineroId") REFERENCES "Cocinero"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Preparacion" ADD CONSTRAINT "Preparacion_recetaId_fkey" FOREIGN KEY ("recetaId") REFERENCES "Receta"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
