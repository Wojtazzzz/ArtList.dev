/*
  Warnings:

  - The `motd` column on the `Server` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `tags` column on the `Server` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `icon` on the `Server` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Server" DROP COLUMN "motd",
ADD COLUMN     "motd" TEXT[],
DROP COLUMN "icon",
ADD COLUMN     "icon" TEXT NOT NULL,
DROP COLUMN "tags",
ADD COLUMN     "tags" TEXT[];

-- DropEnum
DROP TYPE "BlobType";
