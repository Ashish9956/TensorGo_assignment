# Email Sender with Google OAuth

This project allows users to send emails using Postmark and Google OAuth for authentication. It includes both a backend and a frontend application.

## Requirements
- Node.js
- MongoDB
- Postmark API Token

## Setup Instructions

### Backend

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-repo.git
    cd your-repo
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    Create a `.env` file in the root directory and add the following:
    ```env
    MONGODB_URI=mongodb://localhost:27017/your-database
    POSTMARK_API_TOKEN=your-postmark-api-token
    GOOGLE_CLIENT_ID=your-google-client-id
    GOOGLE_CLIENT_SECRET=your-google-client-secret
    SESSION_SECRET=your-session-secret
    ```

4. **Start the server:**
    ```sh
    npm start
    ```

### Frontend

1. **Navigate to the frontend directory:**
    ```sh
    cd frontend
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Start the frontend:**
    ```sh
    npm start
    ```

## Usage
- **Login with Google:** Users can log in using their Google accounts.
- **View Communication History:** Users can view their sent and received emails.
- **Compose Email:** Users can compose and send emails using the Postmark API.

## Additional Features
- Real-time updates of communication history.
- User profiles.
- Organize emails into folders.

## License
This project is licensed under the MIT License.
