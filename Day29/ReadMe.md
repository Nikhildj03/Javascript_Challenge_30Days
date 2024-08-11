
# EchoSocial - Social Media Dashboard

Welcome to **EchoSocial**, a simple social media dashboard web application. This project enables users to sign up, create posts, and manage their accounts. The application leverages HTML, CSS, and JavaScript, with `localStorage` to persist posts and `sessionStorage` to manage user sessions.

## Features

- **User Authentication**: Secure login and sign-up functionality.
- **Dashboard Overview**: A central hub for viewing posts, managing account settings, and more.
- **Post Creation**: Easily create and share posts with text and images.
- **Responsive Design**: A user-friendly experience across all devices.

## Technologies Used

- HTML
- CSS
- JavaScript

## Project Structure

```
/project-root
├── dashboard/
│   └── dashboard.html
├── login-page/
│   ├── login.css
│   ├── login.html
│   └── login.js
├── signup-page/
│   ├── signup.css
│   ├── signup.html
│   └── signup.js
├── index.html
├── style.css
├── favicon.jpg
└── README.md
```

## Prerequisites

Before you start, ensure you have the following installed on your machine:

- A modern web browser (e.g., Chrome, Firefox, Safari)
- A code editor (e.g., VSCode, Sublime Text)

## Files and Directories

- **index.html**: The homepage of the application.
- **style.css**: Global styles for the application.
- **signup-page/**:
  - **signup.html**: The signup page where users can create an account.
  - **signup.css**: Styles for the signup page.
  - **signup.js**: JavaScript for handling signup functionality.
- **login-page/**:
  - **login.html**: The login page where users can log in.
  - **login.css**: Styles for the login page.
  - **login.js**: JavaScript for handling login functionality.
- **dashboard/**:
  - **dashboard.html**: The dashboard where users can create and view posts.
  - **dashboard.css**: Styles specific to the dashboard page.
  - **dashboard.js**: JavaScript for handling post creation and display functionality.

## Notes

- **Session Management**: User sessions are managed using `sessionStorage`, and posts are stored in `localStorage`.
- **Post Images**: Images are handled using `FileReader` to convert files to data URLs.

## Usage

### Access the Login Page

Navigate to `login.html` to log in or create an account.

### Sign Up for an Account

Use the `signup.html` page to register a new account.

### Explore the Dashboard

Once logged in, you’ll be redirected to `dashboard.html`, where you can create and view posts, manage your account, and explore other features.

---

Feel free to customize this README to fit your specific needs!
