/*
  Warnings:

  - A unique constraint covering the columns `[staff_id]` on the table `staff_rooms` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "staff_rooms_staff_id_key" ON "staff_rooms"("staff_id");
