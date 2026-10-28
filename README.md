# My Shop Manager Backend

A TypeScript-based backend for a shop management and repair workflow platform. The project exposes a REST API for handling users, authentication, roles, employees, products, repair tickets, invoices, payments, pieces, shops, warehouses, and related business data.

This backend is built with Express, Prisma, Redis, and MySQL and is structured around a modular API layer that maps cleanly to domain areas such as user management, shop operations, payments, and repair tracking.

## What this project does

My Shop Manager Backend is designed to support the operational needs of a shop or service business, including:

- user registration, login, and role-based access control
- employee and role management
- customer and shop ownership workflows
- product catalog management with types and manufacturers
- repair order tracking, assignments, status updates, and labor entries
- invoice and payment processing
- piece inventory and warehouse tracking
- shop and warehouse management

The API is organized by domain under [src/router](./src/router), with the database schema defined in [prisma/schema.prisma](./prisma/schema.prisma).

## Why this project is useful

This project is useful for learning and building a backend around a realistic shop-management domain. It helped me to learn and put in practice topics like:

- TypeScript + Express for API development
- Prisma for type-safe database access
- Redis for session and cache management
- JWT-based authentication
- modular route/controller/service/repository organization
- MySQL-backed domain modeling for business workflows

## Project structure

```text
.
├── config/                     # environment files
├── prisma/                     # Prisma schema and migrations
├── src/
│   ├── common/                 # helpers, middleware, constants, errors
│   ├── controller/             # HTTP request handlers by domain
│   ├── dto/                    # request DTOs
│   ├── exceptions/             # custom error classes
│   ├── models/                 # shared database and schema models
│   ├── redis/                  # Redis clients
│   ├── repository/             # Prisma data access layer
│   ├── router/                 # API route registration
│   ├── schema/                 # Zod validation schemas
│   ├── service/                # business logic layer
│   ├── main.ts                 # app entrypoint
│   └── server.ts               # Express server configuration
├── package.json                # project scripts and dependencies
├── tsconfig.json               # TypeScript config
├── eslint.config.ts           # ESLint config
└── README.md
```

## Tech stack

- Node.js + TypeScript
- Express 5
- Prisma ORM
- MySQL / MariaDB-compatible database
- Redis for sessions and cache
- JWT for authentication
- Zod for schema validation
- Vitest for testing

## Prerequisites

Before you run the app, make sure you have:

- Node.js 16 or newer
- npm
- a running MySQL-compatible database
- a running Redis instance
- access to the required database credentials and JWT secret values

## Getting started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

The project expects environment variables for database access, Redis, and JWT signing. Example values are defined in the configuration files under [config](./config).

Create or edit a local environment file before starting the app. A typical setup looks like this:

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=my_user
DB_PASSWORD=my_password
DB_NAME=my_shop_manager

REDIS_SESSION_URL=redis://localhost:6379
REDIS_CACHE_URL=redis://localhost:6380

SECRET_KEY=replace-with-a-long-random-secret
```

> Do not commit real secrets to source control. Use local environment files or a secret manager for production values.

### 3) Start required infrastructure

Make sure MySQL and Redis are running before starting the API.

### 4) Run the app in development mode

```bash
npm run dev:basic
```

This uses the development environment config and starts the server with hot reload behavior.

### 5) Run production build

```bash
npm run build
npm start
```

## Useful scripts

```bash
npm run dev          # start the app in development mode
npm run build        # build the TypeScript application
npm run start        # start the compiled production build
npm run lint         # run ESLint
npm run test         # run tests with Vitest
npm run type-check   # TypeScript validation
```

## API overview

The backend exposes a REST API under the `/api` prefix. Routes are organized by feature area such as:

- `/api/auth` for authentication flows
- `/api/user` for user-related endpoints
- `/api/product` for products and product types
- `/api/repair` for repair operations
- `/api/payment` for invoices and payments
- `/api/shop` for shops and warehouses
- `/api/employee` for employee management

Example:

```bash
curl http://localhost:3000/api/role/all
```

## Database and Prisma

The database schema is defined in [prisma/schema.prisma](./prisma/schema.prisma). Prisma is used for SQL access and model generation.

When schema changes are made, run:

```bash
npx prisma generate
```

If your project uses migrations, you can also apply them with:

```bash
npx prisma migrate deploy
```

## Security notes

This project includes authentication, authorization, JWT token handling, and Redis-based session tracking. Use these features carefully when extending the application:

- keep secrets out of code and git history
- validate all incoming request data
- protect admin-only routes with authorization checks
- avoid returning sensitive user data unintentionally

## How to get help

If you run into issues while setting up or extending the project:

- check the repository issues tracker
- review the code under [src](./src) and [prisma/schema.prisma](./prisma/schema.prisma)
- confirm the required environment variables are present
- verify that MySQL and Redis are running before launching the app

For project-specific questions, open an issue in the repository or contact the maintainer through the project’s configured communication channel.

## Maintainer and contribution

This project is maintained by the repository owner and contributors working on the codebase.

Contributions are welcome. If you want to contribute:

1. fork the repository
2. create a feature branch
3. make focused changes
4. run lint and type checks
5. open a pull request with a clear explanation of the change

Keep changes small and easy to review, and prefer clear commit messages and focused updates.

Thanks.
