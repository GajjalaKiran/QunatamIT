Technologies Used

MongoDB
Express.js
React.js
Node.js

Prerequisites

Node.js installed
MongoDB Atlas account (or local MongoDB)
Git

Installation & Setup
1. Clone the repository
bashgit clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
2. Backend Setup
bashcd backend
npm install
3. Environment Variables Setup
Create a .env file in the backend directory by copying from the example:
bashcp .env.example .env
Then edit the .env file and add your actual values:
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
NODE_ENV=development
Important:

Get your MongoDB connection string from MongoDB Atlas
Generate a strong JWT secret (you can use online generators)
Never commit your actual .env file to version control

4. Frontend Setup
bashcd ../frontend
npm install
5. Running the Application
Start Backend Server:
bashcd backend
npm start
# Server will run on http://localhost:5000
Start Frontend (in a new terminal):
bashcd frontend
npm start
# Client will run on http://localhost:3000
