/*
  Warnings:

  - Added the required column `pacienteId` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."SignosVitales" ADD COLUMN     "pacienteId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "public"."Pacientes" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "sexo" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "dni" INTEGER NOT NULL,
    "habitacion" INTEGER NOT NULL,
    "ingreso_paciente" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pacientes_dni_key" ON "public"."Pacientes"("dni");

-- AddForeignKey
ALTER TABLE "public"."SignosVitales" ADD CONSTRAINT "SignosVitales_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "public"."Pacientes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
