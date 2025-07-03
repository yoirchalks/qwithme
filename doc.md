# qwithme

A repository by [@yoirchalk1995](https://github.com/yoirchalk1995/qwithme)

---

## Overview

**qwithme** appears to be a backend application, likely for managing queues or waiting lists in a healthcare or service environment. It uses PostgreSQL (via Prisma ORM), Express.js, TypeScript, and Zod for validation.

---

## Features

- **Queue Management**: Manage queues (`ques`) related to patients, staff, and rooms.
- **Prisma ORM**: Integrates with a PostgreSQL database using Prisma for data modeling and access.
- **Express.js API**: RESTful endpoints for queue and potentially other resources.
- **Validation**: Uses Zod schemas for validating incoming request payloads.
- **User Roles**: Role management for various staff types (doctor, nurse, secretary, PA, IT, maintenance, manager).
- **Status Tracking**: Queue status includes waiting, being seen, done, and cancelled.

---

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yoirchalk1995/qwithme.git
   cd qwithme
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   - Create a `.env` file at the root with at least:
     ```
     DATABASE_URL=postgresql://user:password@host:port/dbname
     ```
   - Adjust as needed for your setup.

4. **Generate Prisma client and migrate database:**

   ```bash
   npx prisma generate
   npx prisma migrate dev
   ```

5. **Run the application:**
   ```bash
   npm run dev
   ```
   or
   ```bash
   npm start
   ```

---

## Usage

- The API exposes RESTful endpoints, e.g., `/ques` for managing queues.
- Example to fetch all queues for a room:

  ```
  GET /ques?roomId=123
  ```

- Creating a new queue entry (POST `/ques`):

  ```json
  {
    "patientId": 1,
    "staffId": 2,
    "roomId": 101
  }
  ```

- Updating queue status (PUT `/ques/:id`):
  ```json
  {
    "status": "done"
  }
  ```

---

## API

### Models

#### patients

- `id`: Int
- `full_name`: String
- `address`: String?
- `contact_number`: String?
- `email_address`: String?
- `image`: Bytes?
- `chronic_diagnosis`: String?
- `dr_id`: Int?
- `created_at`: DateTime
- `updated_at`: DateTime

#### ques

- `id`: Int
- `patient_id`: Int
- `staff_id`: Int
- `room_id`: Int
- `queue_number`: Int
- `status`: Enum (`waiting`, `being_seen`, `done`, `cancelled`)
- `sign_in_time`: DateTime
- `started_time`: DateTime
- `completed_time`: DateTime
- `created_at`: DateTime
- `updated_at`: DateTime

#### staff

- `id`: Int
- `full_name`: String
- `position`: Enum (`doctor`, `pa`, `nurse`, `secretary`, `IT`, `maintenance`, `manager`)
- `image`: Bytes?
- `years_of_service`: Int?
- `monthly_wages`: Float?
- `created_at`: DateTime
- `updated_at`: DateTime

#### rooms

- `id`: Int
- `room_number`: String
- `room_name`: String
- `room_type`: String
- `created_at`: DateTime
- `updated_at`: DateTime

### Validation

- **POST `/ques`** requires:
  - `patientId`: number (0–999999)
  - `staffId`: number (0–999999)
  - `roomId`: number (0–999999)
- **PUT `/ques/:id`** requires:
  - `status`: one of `waiting`, `being seen`, `done`, `cancelled`

---

## Contribution Guidelines

1. Fork the repository and create your branch.
2. Ensure code quality by running `npm test` or equivalent.
3. Open a pull request with a detailed description of your changes.

---

## License

_No license information provided in the repository._

---

## Links

- [Repository on GitHub](https://github.com/yoirchalk1995/qwithme)

---

## Contact

For questions, open an issue in the repository.

# API Reference

_All endpoints are prefixed with `/api`, e.g., `/api/users`._

---

## Users (`/api/users`)

### GET `/`

- **Description:** Get all patients.
- **Response:** `200 OK` — Array of patient objects.

---

### GET `/:id`

- **Description:** Get one patient by ID.
- **Response:**
  - `200 OK` — Patient object.
  - `404 Not Found` — `{"error": "patient with id X not found"}`

---

### POST `/`

- **Description:** Create a patient.
- **Valid Request Body:**
  ```json
  {
    "fullName": "John Doe",
    "address": "123 Main St",
    "contactNumber": "555-1234",
    "emailAddress": "john@example.com",
    "image": "<base64string>",
    "chronicDiagnoses": "Diabetes",
    "drId": 1
  }
  ```
- **Validation:**

  - `fullName`: required string
  - `address`: required string
  - At least one of `emailAddress` or `contactNumber` required
  - `image`: base64 string (optional)
  - `chronicDiagnoses`: optional string
  - `drId`: required number

- **Invalid Examples:**

  - Missing all contact info:

    ```json
    { "fullName": "Jane", "address": "x", "drId": 1 }
    ```

    → `400 Bad Request`: `"contactNumber is either an email address or contact number must be given"`

  - `image` is not base64:
    ```json
    {
      "fullName": "Jane",
      "address": "x",
      "contactNumber": "y",
      "drId": 1,
      "image": "notbase64!!"
    }
    ```
    → `400 Bad Request`: `"image is invalid base64 string"`

- **Responses:**
  - `200 OK` — Created patient object
  - `400 Bad Request` — Validation error (see above)

---

### PUT `/:id`

- **Description:** Update a patient.
- **Valid Request Body:** (all fields optional, same validation as POST)
  ```json
  {
    "fullName": "Jane Doe",
    "image": "<base64string>"
  }
  ```
- **Responses:**
  - `200 OK` — Updated patient object
  - `400 Bad Request` — Validation error
  - `404 Not Found` — Patient not found

---

### DELETE `/:id`

- **Description:** Delete a patient.
- **Response:**
  - `200 OK` — Deleted patient object
  - `400 Bad Request` or `404 Not Found` — Patient not found

---

## Staff (`/api/staff`)

### GET `/`

- **Description:** Get all staff.
- **Response:** `200 OK` — Array of staff

---

### GET `/:id`

- **Description:** Get staff member by ID.
- **Response:**
  - `200 OK` — Staff object
  - `400` or `404` — Not found

---

### POST `/`

- **Description:** Create staff.
- **Valid Request Body:**
  ```json
  {
    "fullName": "Dr. Smith",
    "position": "doctor",
    "yearsOfService": 10,
    "monthlyWages": "15000.00",
    "image": "<base64string>"
  }
  ```
- **Validation:**

  - `fullName`: required string
  - `position`: one of `doctor`, `pa`, `nurse`, `secretary`, `IT`, `maintenance`, `manager`
  - `yearsOfService`: required integer 0–60
  - `monthlyWages`: string, must be decimal with two places, parsed as float
  - `image`: optional base64 string

- **Invalid Example:**

  ```json
  {
    "fullName": "Dr. Smith",
    "position": "invalid",
    "yearsOfService": 100,
    "monthlyWages": "abc"
  }
  ```

  → `400 Bad Request`: position/yearsOfService/monthlyWages validation errors

- **Response:**
  - `200 OK` — Created staff
  - `400 Bad Request` — Validation error

---

### PUT `/:id`

- **Description:** Update staff.
- **Valid Request Body:** (all fields optional, same validation as above)
- **Response:**
  - `200 OK` — Updated staff
  - `400/404` — Not found/validation error

---

### DELETE `/:id`

- **Description:** Delete staff.
- **Response:**
  - `200 OK` — Deleted staff
  - `404` — Not found

---

## Rooms (`/api/rooms`)

### GET `/`

- **Description:** List all rooms.
- **Response:** `200 OK` — Array of rooms

---

### POST `/`

- **Description:** Create a room.
- **Valid Request Body:**
  ```json
  {
    "roomType": "examination",
    "roomNumber": "123A"
  }
  ```
- **Validation:**

  - `roomType`: one of `"examination"`, `"daySurgery"`, `"nurses"`, `"preparation"`, `"physio"`, `"cardio"`, `"emergency"`, `"dental"`
  - `roomNumber`: string (2–7 chars)

- **Invalid Example:**

  ```json
  { "roomType": "invalid", "roomNumber": "1" }
  ```

  → `400 Bad Request`: roomType/roomNumber validation

- **Response:**
  - `200 OK` — Created room
  - `400 Bad Request` — Validation error

---

### DELETE `/:id`

- **Description:** Delete a room.
- **Response:**
  - `200 OK` — Deleted room
  - `404` — Not found

---

## Ques (`/api/ques`)

### GET `/`

- **Description:** List ques.
- **Query:** `roomId` (optional, integer)
- **Responses:**
  - `200 OK` — Array of ques
  - `400 Bad Request` — Invalid roomId

---

### GET `/:id`

- **Description:** Get que by id.
- **Response:**
  - `200 OK` — Que object
  - `404 Not Found` — Not found

---

### POST `/`

- **Description:** Create a que.
- **Valid Request Body:**
  ```json
  {
    "patientId": 5,
    "staffId": 2,
    "roomId": 10
  }
  ```
- **Validation:**

  - All fields: number, 0–999999

- **Invalid Example:**
  ```json
  { "patientId": -1, "staffId": 2, "roomId": 10 }
  ```
  → `400 Bad Request`: `patientId` min value

---

### PUT `/:id`

- **Description:** Cancel a patient's que.
- **Valid Request Body:**
  ```json
  { "status": "cancelled" }
  ```
- **Validation:**
  - `status`: "waiting", "being seen", "done", "cancelled"
- **Response:**
  - `200 OK` — Updated que
  - `404 Not Found` — Not found

---

### PUT `/`

- **Description:** Mark next waiting as being seen, previous as done.
- **No Request Body**
- **Response:**
  - `200 OK` — Updated que or "no patients waiting"

---

## SignIns (`/api/signIns`)

### POST `/`

- **Description:** Sign in as doctor or patient.
- **Valid Request Body:**
  - For doctor:
    ```json
    { "attempt": "doctor", "staffId": 1 }
    ```
  - For patient:
    ```json
    { "attempt": "patient", "patientId": 5, "staffId": 1 }
    ```
- **Validation:**

  - `attempt`: must be `"doctor"` or `"patient"`
  - For doctor: `staffId` required, 1–999
  - For patient: `patientId` and `staffId` required, 1–999

- **Invalid Example:**
  ```json
  { "attempt": "patient" }
  ```
  → `400 Bad Request`: missing `patientId`/`staffId`

---

### PUT `/:id`

- **Description:** Staff sign out.
- **Response:**
  - `200 OK` — Signed out
  - `400` — Not logged in
  - `403` — Patients still waiting
  - `404` — Not found

---

## Errors

- All validation errors return `400 Bad Request` with a message in the response body.
- Not found errors return `404 Not Found`.
- Forbidden actions (e.g., trying to sign out with patients waiting) return `403 Forbidden`.

---
