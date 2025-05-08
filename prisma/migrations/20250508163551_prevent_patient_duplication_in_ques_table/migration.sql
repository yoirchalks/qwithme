/*
  Warnings:

  - A unique constraint covering the columns `[patient_id]` on the table `ques` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ques_patient_id_key" ON "ques"("patient_id");
