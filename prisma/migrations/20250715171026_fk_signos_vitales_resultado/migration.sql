/*
  Warnings:

  - Added the required column `signoVitalId` to the `Resultado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Resultado" ADD COLUMN     "signoVitalId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Resultado" ADD CONSTRAINT "Resultado_signoVitalId_fkey" FOREIGN KEY ("signoVitalId") REFERENCES "SignosVitales"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
