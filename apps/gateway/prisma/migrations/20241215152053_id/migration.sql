-- AlterTable
ALTER TABLE "SysRole" ADD COLUMN     "permission" TEXT[];

-- CreateTable
CREATE TABLE "SysPermission" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "SysPermission_pkey" PRIMARY KEY ("id")
);
