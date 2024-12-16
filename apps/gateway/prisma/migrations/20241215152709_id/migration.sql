/*
  Warnings:

  - Added the required column `createdBy` to the `SysPermission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted` to the `SysPermission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `SysPermission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `SysRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted` to the `SysRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `SysRole` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `SysUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `deleted` to the `SysUser` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedBy` to the `SysUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SysPermission" ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "deleted" BOOLEAN NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SysRole" ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "deleted" BOOLEAN NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SysUser" ADD COLUMN     "createdBy" TEXT NOT NULL,
ADD COLUMN     "deleted" BOOLEAN NOT NULL,
ADD COLUMN     "deletedAt" TIMESTAMP(3),
ADD COLUMN     "deletedBy" TEXT,
ADD COLUMN     "updatedBy" TEXT NOT NULL;
