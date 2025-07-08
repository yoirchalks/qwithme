/*
  Warnings:

  - A unique constraint covering the columns `[staff_id,room_id,sign_in_time]` on the table `staff_rooms` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "ques" DROP CONSTRAINT "ques_patient_id_fkey";

-- DropForeignKey
ALTER TABLE "ques" DROP CONSTRAINT "ques_room_id_fkey";

-- DropForeignKey
ALTER TABLE "ques" DROP CONSTRAINT "ques_staff_id_fkey";

-- DropIndex
DROP INDEX "ques_patient_id_key";

-- DropIndex
DROP INDEX "unique_staff_room_day";

-- CreateIndex
CREATE UNIQUE INDEX "unique_staff_room_day" ON "staff_rooms"("staff_id", "room_id", "sign_in_time");

-- AddForeignKey
ALTER TABLE "ques" ADD CONSTRAINT "ques_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ques" ADD CONSTRAINT "ques_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ques" ADD CONSTRAINT "ques_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "staff"("id") ON DELETE CASCADE ON UPDATE CASCADE;
