-- CreateEnum
CREATE TYPE "BlobType" AS ENUM ('image', 'file', 'audio', 'video', 'other');

-- CreateTable
CREATE TABLE "Server" (
    "id" SERIAL NOT NULL,
    "ip" TEXT NOT NULL,
    "motd" JSONB NOT NULL,
    "icon" "BlobType" NOT NULL,
    "version" TEXT NOT NULL,
    "slots" INTEGER NOT NULL,
    "online" INTEGER NOT NULL,
    "tags" JSONB NOT NULL,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);
