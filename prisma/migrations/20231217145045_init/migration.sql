/*
  Warnings:

  - You are about to alter the column `user_pseudo` on the `Users` table. The data in that column could be lost. The data in that column will be cast from `VarChar(30)` to `VarChar(20)`.

*/
-- AlterTable
ALTER TABLE "Users" ALTER COLUMN "user_pseudo" SET DATA TYPE VARCHAR(20);
