-- CreateEnum
CREATE TYPE "role" AS ENUM ('staff', 'patient');

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL,
    "role" "role" NOT NULL,
    "patientId" INTEGER,
    "staffId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_patientId_key" ON "user"("patientId");

-- CreateIndex
CREATE UNIQUE INDEX "user_staffId_key" ON "user"("staffId");

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_patientId_fkey" FOREIGN KEY ("patientId") REFERENCES "patients"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user" ADD CONSTRAINT "user_staffId_fkey" FOREIGN KEY ("staffId") REFERENCES "staff"("id") ON DELETE SET NULL ON UPDATE CASCADE;
