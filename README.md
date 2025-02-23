# Project Management Tool

## Overview
The Project Management Tool with React and Express is a comprehensive project management tool designed to streamline project planning, execution, and monitoring. Built using the MERN stack, this tool leverages modern web technologies to provide a robust, scalable, and user-friendly platform for managing projects of any size.

The primary goal is to address the inefficiencies and communication gaps that arise from using multiple disconnected tools for project management. By consolidating all project-related activities into a single platform, the tool aims to enhance productivity, improve collaboration, and ensure timely project delivery.

## Features
- **User Authentication**: Secure login and registration using JWT authentication.
- **Project Management**: Create, update, and delete projects with detailed descriptions.
- **Task Management**: Assign tasks to team members, set deadlines, and update task status.
- **Team Collaboration**: Invite team members to projects and manage roles.
- **Real-time Notifications**: Stay updated on project and task changes.
- **Dashboard**: Overview of ongoing projects and tasks.
- **Responsive UI**: Fully optimized for desktop and mobile devices.

## Tech Stack
- **Front-end**: React.js (with Tailwind CSS for styling)
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JSON Web Tokens (JWT)
- **Real-time updates**: WebSockets (Socket.io)
- **Version Control**: Git & GitHub

## Installation
### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- Git

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/snehavarmak/project-management-tool.git
   ```
2. Navigate to the project directory:
   ```sh
   cd project-management-tool
   ```
3. Install dependencies for the backend:
   ```sh
   cd backend
   npm install
   ```
4. Install dependencies for the frontend:
   ```sh
   cd ../frontend
   npm install
   ```
5. Set up environment variables:
   - Create a `.env` file in the backend folder and add:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_secret_key
     ```
6. Start the backend server:
   ```sh
   cd backend
   npm start
   ```
7. Start the frontend application:
   ```sh
   cd frontend
   npm start
   ```

## Usage
1. Register and log in to the platform.
2. Create a new project and invite team members.
3. Assign tasks, set deadlines, and track progress.
4. Receive real-time updates and notifications.
5. Manage tasks and collaborate effectively.

## Contributing
We welcome contributions! Follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -m "Add new feature"`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## License
This project is licensed under the MIT License.


