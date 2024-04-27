/*
  Warnings:

  - You are about to drop the column `motd` on the `Server` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Server" DROP COLUMN "motd",
ADD COLUMN     "motdFirstLine" TEXT,
ADD COLUMN     "motdSecondLine" TEXT;
