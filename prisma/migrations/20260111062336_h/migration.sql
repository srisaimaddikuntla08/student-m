/*
  Warnings:

  - You are about to drop the column `studentId` on the `Teacher` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Teacher_studentId_key";

-- AlterTable
ALTER TABLE "Teacher" DROP COLUMN "studentId";
