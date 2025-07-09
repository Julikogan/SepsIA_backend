/*
  Warnings:

  - You are about to drop the column `id_signo_vital` on the `Resultado` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Resultado" DROP CONSTRAINT "Resultado_id_signo_vital_fkey";

-- DropIndex
DROP INDEX "Resultado_id_signo_vital_key";

-- AlterTable
ALTER TABLE "Resultado" DROP COLUMN "id_signo_vital";
