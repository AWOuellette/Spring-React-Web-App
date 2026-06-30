# Spring React Todo App

A full-stack todo management application with JWT authentication. Users can log in, then create, view, update, and delete personal todo items with descriptions and target dates.

---

## Tech Stack

**Frontend**
- React 17 + React Router 6
- Axios (with JWT interceptor)
- Formik (form validation)
- Moment.js (date formatting)
- Bootstrap

**Backend**
- Java 17 + Spring Boot 3.4
- Spring Security + JWT (JJWT 0.11)
- Spring Data JPA
- H2 (in-memory database)
- Maven

---

## Project Structure

```
Spring-React-Web-App/
├── backend/
│   └── src/main/java/com/todo/
│       ├── jwt/                        # JWT auth filter, token util, security config
│       ├── restful_web_services/
│       │   ├── Todo.java               # JPA entity
│       │   ├── TodoJpaResource.java    # REST controller (JPA-backed)
│       │   ├── TodoJpaRepository.java  # Spring Data repository
│       │   ├── TodoResource.java       # REST controller (hardcoded service)
│       │   └── TodoHardCodedService.java
│       └── helloworld/                 # Example endpoints
└── frontend/
    └── src/
        ├── Constants.js                # API base URLs
        ├── api/todo/                   # Axios service clients
        └── components/todo/
            ├── TodoApp.jsx             # Router / app shell
            ├── LoginComponent.jsx
            ├── ListTodosComponent.jsx
            ├── TodoComponent.jsx       # Create / edit form
            ├── AuthenticationService.js
            └── AuthenticatedRoute.jsx  # Route guard
```

---

## Getting Started

### Backend

```bash
cd backend
./mvnw spring-boot:run        # Linux/Mac
mvnw.cmd spring-boot:run      # Windows
```

Runs on `http://localhost:8080`.

The H2 in-memory database is created automatically on startup. Data resets when the server restarts. The H2 console is available at `http://localhost:8080/h2-console`.

### Frontend

```bash
cd frontend
npm install
npm start
```

Runs on `http://localhost:4200`.

---

## Default Credentials

```
Username: andrew
Password: test
```

These are hardcoded in `JwtInMemoryUserDetailsService.java` for development purposes.

---

## API Reference

### Authentication

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/authenticate` | Login — returns JWT token | Public |
| GET | `/refresh` | Refresh JWT token | Required |

### Todos (JPA-backed)

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| GET | `/jpa/users/{username}/todos` | List all todos for user | Required |
| GET | `/jpa/users/{username}/todos/{id}` | Get a single todo | Required |
| POST | `/jpa/users/{username}/todos` | Create a todo | Required |
| PUT | `/jpa/users/{username}/todos/{id}` | Update a todo | Required |
| DELETE | `/jpa/users/{username}/todos/{id}` | Delete a todo | Required |

### Example Login Request

```bash
curl -X POST http://localhost:8080/authenticate \
  -H "Content-Type: application/json" \
  -d '{"username": "andrew", "password": "test"}'
```

Returns a JWT token to include as `Authorization: Bearer <token>` on subsequent requests.

---

## Features

- **JWT authentication** — stateless, token stored in `sessionStorage`, automatically attached to every API request via Axios interceptor
- **Todo CRUD** — create todos with a description and target date, mark as done, edit, or delete
- **Two service implementations** — a hardcoded in-memory service and a JPA database-backed service (both expose the same REST interface)
- **Form validation** — Formik handles input validation on the create/edit form
- **Protected routes** — `AuthenticatedRoute` redirects unauthenticated users to login

---

## Running Tests

```bash
cd backend
./mvnw test
```
