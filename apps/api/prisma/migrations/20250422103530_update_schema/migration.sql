/*
  Warnings:

  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `BabyUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PetsUser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SoulUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BabyUser" DROP CONSTRAINT "BabyUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "PetsUser" DROP CONSTRAINT "PetsUser_userId_fkey";

-- DropForeignKey
ALTER TABLE "SoulUser" DROP CONSTRAINT "SoulUser_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "role";

-- DropTable
DROP TABLE "BabyUser";

-- DropTable
DROP TABLE "PetsUser";

-- DropTable
DROP TABLE "SoulUser";

-- DropEnum
DROP TYPE "Role";
