# QueueLess Management System

QueueLess is an AI-powered smart queue management system designed for hospitals, banks, and government organizations to reduce physical waiting lines and improve customer experience.

## Features

### User Module

* Register and login with role-based access
* Generate personal queue token
* View own token status
* Track live queue updates
* Receive email notifications when token is called

### Staff Module

* View all active tokens
* Call next token
* Complete token processing
* Manage token flow efficiently

### Admin Module

* Monitor all queue activities
* View analytics dashboard
* Track waiting, serving, and completed tokens
* Manage counters and staff operations

### AI Features

* AI-based waiting time prediction
* Smart counter recommendation
* Live queue monitoring using WebSockets

---

## Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios
* Recharts
* WebSocket (SockJS + STOMP)

### Backend

* Spring Boot
* Spring Data JPA
* Spring Security
* WebSocket
* Java Mail Sender

### Database

* MySQL

---

## Project Architecture

QueueLess follows a role-based architecture:

* **USER** → Generates tokens and tracks own queue
* **STAFF** → Handles calling and completing tokens
* **ADMIN** → Monitors analytics and manages system

---

## API Endpoints

### Authentication

* POST `/api/auth/register`
* POST `/api/auth/login`

### Tokens

* GET `/api/tokens`
* POST `/api/tokens`
* PUT `/api/tokens/{id}/call`
* PUT `/api/tokens/{id}/complete`
* GET `/api/tokens/user/{email}`

### Prediction

* POST `/api/prediction`

### Queue

* GET `/api/queues`

---

## Installation

### Clone Repository

```bash
git clone https://github.com/your-username/queueless-management-system.git
cd queueless-management-system
```

---

## Backend Setup

```bash
cd backend/queueless
mvn clean install
mvn spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

## Database Setup

Create MySQL database:

```sql
CREATE DATABASE queueless_db;
```

Update `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/queueless_db
spring.datasource.username=root
spring.datasource.password=yourpassword
spring.jpa.hibernate.ddl-auto=update
```

---

## Future Improvements

* Bell notification unread count
* Smart counter auto-allocation
* Queue history tracking
* Staff performance analytics
* QR-based token generation
* Mobile responsive enhancements


