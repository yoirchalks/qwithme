-- CreateEnum
CREATE TYPE "que_status" AS ENUM ('waiting', 'being_seen', 'done', 'cancelled');

-- CreateEnum
CREATE TYPE "staff_position" AS ENUM ('doctor', 'pa', 'nurse', 'secretary', 'IT', 'maintenance', 'manager');

-- CreateTable
CREATE TABLE "patients" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "contact_number" TEXT,
    "email_address" TEXT,
    "image" BYTEA,
    "chronic_diagnosis" TEXT,
    "dr_id" INTEGER NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "patients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ques" (
    "id" SERIAL NOT NULL,
    "patient_id" INTEGER NOT NULL,
    "staff_id" INTEGER NOT NULL,
    "room_id" INTEGER NOT NULL,
    "queue_number" INTEGER NOT NULL,
    "status" "que_status" DEFAULT 'waiting',
    "sign_in_time" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "started_time" TIMESTAMPTZ(6),
    "completed_time" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "ques_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "rooms" (
    "id" SERIAL NOT NULL,
    "room_number" VARCHAR(50) NOT NULL,
    "room_name" VARCHAR(100) NOT NULL,
    "room_type" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "rooms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff" (
    "id" SERIAL NOT NULL,
    "full_name" TEXT NOT NULL,
    "position" "staff_position" NOT NULL,
    "image" BYTEA,
    "years_of_service" SMALLINT NOT NULL,
    "monthly_wages" MONEY NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6),

    CONSTRAINT "staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "staff_rooms" (
    "id" SERIAL NOT NULL,
    "staff_id" INTEGER NOT NULL,
    "room_id" INTEGER NOT NULL,
    "sign_in_date" DATE NOT NULL,
    "sign_in_time" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "sign_out_time" TIMESTAMPTZ(6),

    CONSTRAINT "staff_rooms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "unique_staff_room_day" ON "staff_rooms"("staff_id", "room_id", "sign_in_date");

-- AddForeignKey
ALTER TABLE "patients" ADD CONSTRAINT "fk_dr_id" FOREIGN KEY ("dr_id") REFERENCES "staff"("id") ON DELETE RESTRICT ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ques" ADD CONSTRAINT "ques_patient_id_fkey" FOREIGN KEY ("patient_id") REFERENCES "patients"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ques" ADD CONSTRAINT "ques_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ques" ADD CONSTRAINT "ques_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "staff_rooms" ADD CONSTRAINT "staff_rooms_room_id_fkey" FOREIGN KEY ("room_id") REFERENCES "rooms"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "staff_rooms" ADD CONSTRAINT "staff_rooms_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "staff"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
