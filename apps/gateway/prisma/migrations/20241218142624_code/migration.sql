/*
  Warnings:

  - Added the required column `code` to the `SysPermission` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `SysRole` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SysPermission" ADD COLUMN     "code" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SysRole" ADD COLUMN     "code" TEXT NOT NULL,
ADD COLUMN     "description" TEXT;
