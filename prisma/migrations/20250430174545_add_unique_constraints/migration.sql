/*
  Warnings:

  - A unique constraint covering the columns `[email_address]` on the table `patients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[full_name,contact_number]` on the table `patients` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[queue_number]` on the table `ques` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[room_number]` on the table `rooms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[room_name]` on the table `rooms` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[full_name]` on the table `staff` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "patients_email_address_key" ON "patients"("email_address");

-- CreateIndex
CREATE UNIQUE INDEX "patients_full_name_contact_number_key" ON "patients"("full_name", "contact_number");

-- CreateIndex
CREATE UNIQUE INDEX "ques_queue_number_key" ON "ques"("queue_number");

-- CreateIndex
CREATE UNIQUE INDEX "rooms_room_number_key" ON "rooms"("room_number");

-- CreateIndex
CREATE UNIQUE INDEX "rooms_room_name_key" ON "rooms"("room_name");

-- CreateIndex
CREATE UNIQUE INDEX "staff_full_name_key" ON "staff"("full_name");
