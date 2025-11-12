# 🎯 Talent Management Frontend

This is the **frontend** of the Talent Management application — built using **React**, **Redux**, and **Tailwind CSS**.  
It allows users to **add**, **filter**, and **view** talents based on their name, email, skills, and experience.

---

## 🚀 Features

- ✨ Add new talents with validation (name, email required)
- 🔍 Filter talents by skill keyword
- 📋 Display a list of all talents from backend
- 🌐 Integrated with REST API (Node.js + Express)
- 🎨 Beautiful, responsive UI with Tailwind CSS 3
- ⚡ Efficient state management using Redux

---

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Redux
- Axios
- Tailwind CSS 3

**Build Tools:**
- Node.js
- npm (or yarn)

---

## 📁 Folder Structure

frontend/
│
├── src/
│ ├── Component/
│ │ ├── TalentForm.js
│ │ ├── SkillFilter.js
│ │ ├── TalentList.js
│ ├── Redux/
│ │ ├── Action.js
│ │ ├── Reducer.js
│ ├── App.js
│ ├── index.js
│ └── index.css
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

## ⚙️ Installation and Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/talent-backend.git
cd frontend 
cd frontend

2️⃣ Install Dependencies
npm install

3️⃣ Create a .env file in the root directory

REACT_APP_API_BASE=http://localhost:5000/api/talents


4️⃣ Run the Server

npm start
