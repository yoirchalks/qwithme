-- This is an empty migration.
-- Custom SQL to enforce only one active status per patient
CREATE UNIQUE INDEX one_active_status_per_patient
ON "ques" ("patient_id")
WHERE status = 'waiting';
