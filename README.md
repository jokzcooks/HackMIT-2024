# Match-Stick - An ai powered Team formation app! 

## Overview

 Match-Stick is a Full-stack Web App helps participants easily form teams by matching them based on their skills, interests, and preferences and by understanding them even deeply using creating their persona. We offers real-time updates, secure sign-in, and a simple interface, all built on scalable infrastructure.

## Figma : https://www.figma.com/design/Xpvv87g7VcvpZAr5vmZCxK/HACKMIT?node-id=0-1&t=ON2r3EEuRbVqyqWM-1

## Features

- **User Registration and Authentication**: Sign up or log in securely with Clerk. Create a profile to showcase your skills, experience, and interests.
- **Team Matching**: Autonomous agents (Fetch.ai uAgents) match users with potential teammates based on skills, interests, and preferences.
- **Real-Time Notifications**: Get instant alerts when matches are found or team updates occur.
- **Dashboard**: View match suggestions, team invitations, and messages in one place. Search and filter other participants or teams.
  

## Tech Stack

- **Frontend**: React.js for a responsive and reusable user interface.
- **Backend**: Convex for serverless backend functions and real-time data sync.
- **Database**: MongoDB for storing user and team data.
- **AI Agents**: Fetch.ai uAgents for autonomous user representation and team matching.


## System Design

### How It Works

1. **User Actions**: Users interact with the React frontend (e.g., update profile, search for teams).
2. **API Calls**: Frontend communicates with Convex backend to perform actions.
3. **Authentication**: Clerk handles sign-in and access control.
4. **Matching**: Convex calls Fetch.ai uAgents to match users into teams.
5. **Real-Time Updates**: Convex syncs updates instantly to the frontend.

## Getting Started

### Prerequisites
- Install **Node.js** and **npm**.
- Set up **MongoDB**.
- Get a **Clerk** API key.

### Installation

1. **Clone the repo**:

    ```bash
    git clone https://github.com/yourusername/hackathon-team-formation-app.git
    ```

2. **Navigate to the project directory**:

    ```bash
    cd hackathon-team-formation-app
    ```

3. **Install dependencies**:

    ```bash
    npm install
    ```

4. **Set up environment variables**:
   - Create a `.env` file in the root directory.
   - Add your Clerk API key and MongoDB connection string:

    ```env
    VITE_CLERK_PUBLISHABLE_KEY=your_clerk_api_key
    MONGODB_URI=your_mongodb_connection_string
    ```

### Running the App

- **Start the development server**:

    ```bash
    npm run dev
    ```

- **Build for production**:

    ```bash
    npm run build
    ```

- **Deploy** to your preferred hosting platform.

## Contributing

We welcome contributions! Fork the repo and submit a pull request with your changes.

## License

This project is licensed under the MIT License.

## Contact

Questions? Reach out at [colenangle.dev@gmail.com](mailto:coleangle.dev@gmail.com) | [17thien.nguyen@gmail.com](mailto:17thiennguyen.nguyen@gmail.com) | [gupta.kanika2004@gmail.com](mailto:gupta.kanika2004@gmail.com).
