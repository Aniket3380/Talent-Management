# 🧠 Talent Management Backend

This is the **backend** of the Talent Management web application, built using **Node.js**, **Express.js**, and **MongoDB** with **Mongoose**.  
It provides RESTful APIs to manage and filter talents based on skills, experience, and email.

---

## 🚀 Features

- 🌐 RESTful API using Express.js  
- 💾 MongoDB database with Mongoose ODM  
- 🧩 Add, fetch, and filter talents by skills  
- ⚙️ Environment variable support with dotenv  
- 🔄 CORS enabled for frontend communication  
- 🔥 Nodemon for development server auto-reload  

---

## 🛠️ Tech Stack

| Layer | Technology |
|--------|-------------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| ODM | Mongoose |
| Environment | dotenv |
| CORS | Enabled |

---

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/talent-backend.git
cd talent-backend

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env file in the root directory

Example:

PORT=5000
MONGO_URL=your_mongodb_connection_string

4️⃣ Run the Server

For development (auto-reload using nodemon):

npm run dev