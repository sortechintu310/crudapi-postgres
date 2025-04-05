# 🚀 Simple User CRUD API (Express + PostgreSQL + Joi)

A lightweight REST API for managing users with Node.js, Express, PostgreSQL, and Joi for validation.

---

## 🧰 Tech Stack

- **Node.js** + **Express**
- **PostgreSQL** (via `pg`)
- **Joi** for input validation

---

## 📦 Installation

```bash
git clone https://github.com/yourname/user-crud-api.git
cd user-crud-api
npm install
```

---

## ⚙️ Setup

1. Create a `.env` file:

```env
PORT=5000
DB_HOST=localhost
DB_USER=your_user
DB_PASSWORD=your_pass
DB_NAME=your_db
DB_PORT=5432
```

2. Create `users` table:

```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  age INT
);
```

3. Start the server:

```bash
npm run dev
```

---

## 📂 Folder Structure

```
├── app.js
├── db/index.js
├── models/userModel.js
├── routes/userRoutes.js
├── validations/userValidation.js
└── .env
```

---

## 🔗 API Endpoints

| Method | Endpoint         | Description     |
|--------|------------------|-----------------|
| GET    | /api/users       | List all users  |
| GET    | /api/users/:id   | Get user by ID  |
| POST   | /api/users       | Create user     |
| PUT    | /api/users/:id   | Update user     |
| DELETE | /api/users/:id   | Delete user     |

---

## ✅ Sample Request

```json
{
  "name": "Chintu Sorte",
  "email": "chintu@example.com",
  "age": 20
}
```

---

## 🧑‍💻 Author

**Chintu Sorte**  
Passionate about Full Stack Development & Clean Code ✨

