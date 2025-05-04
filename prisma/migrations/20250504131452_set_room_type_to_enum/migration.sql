/*
  Warnings:

  - You are about to drop the column `room_name` on the `rooms` table. All the data in the column will be lost.
  - Changed the type of `room_type` on the `rooms` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "room_type" AS ENUM ('examination', 'day_surgery', 'nurses', 'preparation', 'physio', 'cardio', 'emergency', 'dental');

-- DropIndex
DROP INDEX "rooms_room_name_key";

-- AlterTable
ALTER TABLE "rooms" DROP COLUMN "room_name",
DROP COLUMN "room_type",
ADD COLUMN     "room_type" "room_type" NOT NULL;
