/*
  Warnings:

  - You are about to drop the column `presion` on the `SignosVitales` table. All the data in the column will be lost.
  - Added the required column `frecuencia_cardiaca` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `frecuencia_respiratoria` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_paciente` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lactato` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `leucocitos` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `patologias_presentes` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `presion_arterial` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `procalcitonina` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `proteina_creactiva` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `saturacion_oxigeno` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.
  - Added the required column `temperatura_corporal` to the `SignosVitales` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SignosVitales" DROP COLUMN "presion",
ADD COLUMN     "frecuencia_cardiaca" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "frecuencia_respiratoria" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "id_paciente" INTEGER NOT NULL,
ADD COLUMN     "lactato" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "leucocitos" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "patologias_presentes" TEXT NOT NULL,
ADD COLUMN     "presion_arterial" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "procalcitonina" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "proteina_creactiva" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "saturacion_oxigeno" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "temperatura_corporal" DOUBLE PRECISION NOT NULL;

-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "sexo" TEXT NOT NULL,
    "habitacion" TEXT NOT NULL,
    "fecha_ingreso" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SignosVitales" ADD CONSTRAINT "SignosVitales_id_paciente_fkey" FOREIGN KEY ("id_paciente") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
