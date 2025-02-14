# 🏏 Cricket Player Management API

This is a backend API built with **Node.js**, **Express.js**, and **MySQL** for managing cricket player data, including creating, retrieving, updating, and deleting player information.

---

## 🚀 Features

- **Create Player:** Add new players with details like name, age, team, and position.  
- **Retrieve Players:** Get all players or a specific player by ID.  
- **Update Player:** Modify existing player details.  
- **Delete Player:** Remove a player from the database.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Environment Variables:** dotenv  
- **Dev Tools:** Nodemon  

---

## 📂 Project Structure


---

## ⚙️ Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/player-backend.git
    cd player-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory with the following:
    ```env
    DB_HOST=your_host
    DB_USER=your_username
    DB_PASSWORD=your_password
    DB_NAME=your_database_name
    PORT=5000
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

---

## 📋 API Endpoints

### ➕ Create a Player
- **URL:** `/api/players`
- **Method:** `POST`
- **Payload (JSON):**
    ```json
    {
      "name": "John Doe",
      "age": 25,
      "team": "Team A",
      "position": "Batsman"
    }
    ```
- **Response:**
    ```json
    {
      "message": "Player created successfully",
      "playerId": 1
    }
    ```

---

### 🔍 Get All Players
- **URL:** `/api/players`
- **Method:** `GET`
- **Response:**
    ```json
    [
      {
        "id": 1,
        "name": "John Doe",
        "age": 25,
        "team": "Team A",
        "position": "Batsman"
      }
    ]
    ```

---

### 🔍 Get Player by ID
- **URL:** `/api/players/:id`
- **Method:** `GET`
- **Example:** `/api/players/1`
- **Response:**
    ```json
    {
      "id": 1,
      "name": "John Doe",
      "age": 25,
      "team": "Team A",
      "position": "Batsman"
    }
    ```

---

### ✏️ Update Player
- **URL:** `/api/players/:id`
- **Method:** `PUT`
- **Payload (JSON):**
    ```json
    {
      "name": "Jane Doe",
      "age": 26
    }
    ```
- **Response:**
    ```json
    {
      "message": "Player updated successfully"
    }
    ```

---

### ❌ Delete Player
- **URL:** `/api/players/:id`
- **Method:** `DELETE`
- **Response:**
    ```json
    {
      "message": "Player deleted successfully"
    }
    ```

---

## 🗃️ Database Schema

```sql
CREATE TABLE players (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  age INT,
  team VARCHAR(100),
  position VARCHAR(100),
  matches_played INT DEFAULT 0,
  runs_scored INT DEFAULT 0,
  wickets_taken INT DEFAULT 0,
  batting_average FLOAT DEFAULT 0,
  bowling_average FLOAT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
