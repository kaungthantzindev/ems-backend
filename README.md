# EMS Application

A backend application built with **NestJS**, **Prisma**, and **PostgreSQL**.

## swagger ui
http://localhost:8080/apidoc 

---

## Prerequisites

Before running the application, ensure you have the following installed:

- Node.js (v16 or higher recommended)
- PostgreSQL
- pnpm (v7 or higher recommended)

---

## Installation

1. Clone the repository:

   git clone [https://github.com/kaungthantzindev/ems-backend](https://github.com/kaungthantzindev/ems-backend)

   cd ems-backend

2. Install dependencies:

   pnpm install

---

## Database Setup

1. Configure the database:

   - Create a `.env` file in the root directory of the project (if not already present).
   - Add your PostgreSQL connection string:

     DATABASE_URL=postgresql://<user>:<password>@<host>:<port>/<database_name>

     Replace `<user>`, `<password>`, `<host>`, `<port>`, and `<database_name>` with your PostgreSQL credentials.

2. Run Prisma migrations:
   Generate the Prisma Client and apply database migrations:

   pnpm prisma generate
   pnpm prisma migrate dev

   This will apply all the schema changes to your database.

3. (Optional) Seed the database (if a seed script is available):

   pnpm prisma db seed

---

## Running the Application

### Development Mode

Start the application in development mode with hot-reloading:

pnpm run start:dev

### Production Mode

1. Build the application:

   pnpm run build

2. Start the production server:

   pnpm run start:prod

---

## Testing

Run tests using the following commands:

- Unit Tests:
  pnpm run test

- End-to-End Tests:
  pnpm run test:e2e

- Test Coverage:
  pnpm run test:cov

---

## Prisma Studio

Prisma Studio provides a GUI to interact with your database. Start Prisma Studio by running:

pnpm prisma studio

Open the URL provided in the terminal to interact with your database.

---

## Environment Variables

The following environment variables are required to run the application:

- `DATABASE_URL`: Connection string for your PostgreSQL database

---

## Troubleshooting

- Migration Issues: If migrations fail, you can reset the database and reapply migrations:

  pnpm prisma migrate reset

- Port Conflicts: Ensure no other services are running on the same port (`5432` for PostgreSQL or the port your NestJS app uses).

---
