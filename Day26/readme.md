# Simple Chat Application

A simple chat application built with Node.js and WebSocket for real-time communication.

## Features

- **Real-Time Messaging**: Send and receive messages instantly with low latency.
- **User Authentication**: Simple username-based login to identify users.
- **Responsive Design**: A mobile-friendly chat interface that adapts to various screen sizes.
- **WebSocket Integration**: Efficient, real-time communication using WebSocket protocol.

## Installation

### Clone the Repository

To get started with the chat application, clone the repository:

```bash
git clone https://github.com/Nikhildj03/Javascript_Challenge_30Days/tree/main/Day26
Navigate to the Project Directory
Move to the specific day's challenge/project folder:

bash
Copy code
cd '30-days-javascript-challenge\Day 26 - Chat Application'
Install Dependencies
Open a terminal and run the following commands to initialize the project and install the necessary dependencies:

bash
Copy code
npm init -y
npm install ws
This will install all the required dependencies for both the client and server.

Running the Application
Start the Server
Navigate to the server directory and start the server:

bash
Copy code
cd server
node server.js
The server will start running on http://localhost:8080.

Connect to the Server
Open another terminal and install wscat globally if you haven't already:

bash
Copy code
npm install -g wscat
After that, run:

bash
Copy code
wscat -c ws://localhost:8080
Usage
Login: Enter a username and click the "Login" button to join the chat room.
Send Messages: Type your message in the input field and press Enter or click the "Send" button to send the message.
View Messages: Messages from other users will appear in the chat window in real time.
Technologies Used
Node.js: JavaScript runtime environment for building the server-side logic.
WebSocket: Protocol enabling real-time, full-duplex communication between the client and server.
HTML/CSS: Structure and styling of the front-end chat interface.
JavaScript: Client-side scripting to handle user interactions and dynamic content.
License
This project is licensed under the MIT License. See the LICENSE file for more details.

vbnet
Copy code

Once you save this as `README.md`, it will be ready to display on your project's GitHub page.
