# LinkTrim

LinkTrim is a lightweight and efficient URL shortener that converts long URLs into short, easy-to-share links. It is built using Node.js (Express) for the backend and React.js for the frontend. The application provides a seamless way to create and manage shortened URLs with a user-friendly interface.

# ✅ Successfully Deployed on Netlify 🎉

- LinkTrim is live at: https://linktrime.netlify.app/

# Features
- ✅ Shorten long URLs into compact links
- ✅ Fast redirection to original URLs
- ✅ Unique short URLs generated using nanoid
- ✅ Simple and intuitive UI built with React.js
- ✅ Backend powered by Express.js with in-memory storage
- ✅ Deployed on Render (Backend) and Netlify (Frontend)

# Tech Stack & Modules Used

- Backend (Node.js & Express.js)
  
    - Express.js – Web framework for handling HTTP requests

    - CORS – Enables cross-origin requests from the frontend

    - Nanoid – Generates unique, random short URL identifiers

    - Nodemon – Automatically restarts the server during development

- Frontend (React.js)
  
    - React.js – Provides a dynamic and interactive UI

    - Fetch API – Communicates with the backend to generate short links

# How It Works

- User enters a long URL in the frontend.

- The frontend sends the URL to the backend via a POST request.

- The backend generates a unique short ID using nanoid and stores the mapping in an in-memory object.

- A short URL is returned to the user.

- When the short URL is accessed, the backend looks up the original URL and redirects the user.

# Deployment

- Backend: Hosted on Render for reliable API serving.

- Frontend: Deployed on Netlify for fast and easy static hosting.

Created by Bhanu Udhay | Open for Contributions 🚀

