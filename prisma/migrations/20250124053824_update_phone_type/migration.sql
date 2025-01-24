/*
  Warnings:

  - The `phone` column on the `employees` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "employees" DROP COLUMN "phone",
ADD COLUMN     "phone" INTEGER;
