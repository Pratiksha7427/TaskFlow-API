# 🚀 TaskFlow API

A RESTful Task Management API built with Node.js, Express.js, and MongoDB Atlas.

## 📌 Features

- Create a task
- Get all tasks
- Get a task by ID
- Update a task
- Delete a task
- MongoDB Atlas integration
- MVC architecture
- Environment variables using dotenv

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Git
- GitHub

## 📂 Project Structure

```
TaskFlow-API/
│── controllers/
│── models/
│── routes/
│── .env
│── .gitignore
│── package.json
│── server.js
```

## 🚀 Installation

```bash
git clone <repository-url>
cd TaskFlow-API
npm install
```

Create a `.env` file:

```
MONGODB_URI=your_connection_string
PORT=3000
```

Start the server:

```bash
node server.js
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /tasks | Get all tasks |
| GET | /tasks/:id | Get task by ID |
| POST | /tasks | Create a task |
| PUT | /tasks/:id | Update a task |
| DELETE | /tasks/:id | Delete a task |

## 👩‍💻 Author

Pratikshaa
