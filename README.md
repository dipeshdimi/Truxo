# Student Data Search
Live Deployment: https://truxo-beige.vercel.app/

## Features
- Lazy Loading
- Pagination
- Debouncing
- Responsiveness

## Installation & Usage

To get started with this project, you'll need to install it locally on your machine. Follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/dipeshdimi/Truxo.git
    ```

2. Navigate to the project folder:

    ```bash
    cd Truxo
    ```

3. Install dependenncies (prettier):

    ```bash
    npm install
    ```

4. Navigate to the client directory:

    ```bash
    cd client
    ```

5. Install client dependencies:

    ```bash
    npm i
    ```
    
6. Create a .env file in the client directory and provide server host URL:

    ```bash
    VITE_API_URL=http://localhost:8000
    ```

7. Run the frontend application:
   
   ```bash
    npm run dev
    ```

8. Navigate to the server directory:

    ```bash
    cd ../server
    ```

9. Install server dependencies:

    ```bash
    npm i
    ```
    
10. Create a .env file in the server directory and provide necessary environment variables:

    ```bash
    PORT=8000
    CORS_ORIGIN=http://localhost:5173
    DATA_FILE_PATH=./data/students.json
    ```
    
11. Ensure students.json file containing student details is present in the data directory inside of the server directory.

12. Run the backend application:
   
   ```bash
   npm run dev
   ```

13. Visit http://localhost:5173/ to use the application.
