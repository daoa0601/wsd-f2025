# CS-C3170-Web Software Development Project Summary

### Project Overview

This project is a full-stack web application with a modern architecture, containerized for easy setup and deployment. It consists of a reactive frontend, a lightweight backend, a relational database, and an end-to-end testing suite. The entire application is orchestrated using Docker Compose, which simplifies the development and deployment process.

### Core Technologies

*   **Frontend (Client):**
    *   **Framework:** Svelte with SvelteKit, a modern JavaScript framework for building user interfaces.
    *   **Build Tool:** Vite, a fast and efficient build tool for modern web projects.
*   **Backend (Server):**
    *   **Runtime:** Deno, a secure and modern runtime for JavaScript and TypeScript.
    *   **Web Framework:** Hono, a small, simple, and ultrafast web framework for the edge.
*   **Database:**
    *   **Engine:** PostgreSQL, a powerful, open-source object-relational database system.
    *   **Migrations:** Flyway, a tool for managing database schema changes.
*   **Testing:**
    *   **Framework:** Playwright for end-to-end testing, which allows for testing the application in a real browser environment.
*   **Containerization:**
    *   **Tool:** Docker and Docker Compose are used to containerize and manage the application's services.

### Project Structure and Setup

The project is organized into several services, as defined in the `compose.yaml` file:

1.  **`client`:** The SvelteKit frontend application. It runs on port `5173`.
2.  **`server`:** The Deno backend application using Hono. It runs on port `8000` and connects to the database.
3.  **`database`:** The PostgreSQL database service.
4.  **`database-migrations`:** A service that uses Flyway to apply database migrations from the `database-migrations` folder.
5.  **`e2e-tests`:** A service for running Playwright end-to-end tests.

To set up and run the entire application, you would navigate to the `walking-skeleton` directory and run the following command:

```bash
docker-compose up
```

This will build the necessary Docker images and start all the services, making the application accessible for development and testing. The client will be available at `http://localhost:5173`.
