/*
  Warnings:

  - You are about to drop the column `id_paciente` on the `SignosVitales` table. All the data in the column will be lost.
  - You are about to drop the `Paciente` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SignosVitales" DROP CONSTRAINT "SignosVitales_id_paciente_fkey";

-- AlterTable
ALTER TABLE "SignosVitales" DROP COLUMN "id_paciente";

-- DropTable
DROP TABLE "Paciente";
