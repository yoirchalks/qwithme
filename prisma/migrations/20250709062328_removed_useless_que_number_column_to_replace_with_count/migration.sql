/*
  Warnings:

  - You are about to drop the column `queue_number` on the `ques` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "ques_queue_number_key";

-- AlterTable
ALTER TABLE "ques" DROP COLUMN "queue_number";
