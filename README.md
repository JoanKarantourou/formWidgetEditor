## Form Widget Editor ##
A Form Widget Editor project with a frontend and backend for customizing and previewing form elements in real-time.

#Table of Contents#
Description
Technologies Used
Getting Started
Frontend Setup
Backend Setup
Database Configuration
Running Tests
Usage
Contributing
License

#Description#
In this assignment, we've built a Form Widget Editor with a frontend and backend. The editor allows customization of form elements such as title, subtitle, and input fields. These changes are reflected in real-time in a dynamic preview pane. The backend, built with Node.js, handles data persistence and HTML rendering via a message broker and a background worker.

#Technologies Used#
Angular
Angular CLI
TypeScript
JavaScript
Bootstrap
CSS
HTML
Node.js
REST API
CORS
npm
Express (Node.js framework)
SQLite (database)

#Getting Started#
Frontend Setup

1. Installation:

-Navigate to the widget/src/app directory of the project.
-Run npm install to install the required frontend dependencies.

2. Starting the Frontend:

- Run ng serve to start the Angular development server for the frontend.
- Open a web browser and access http://localhost:4200 to use the Form Widget Editor.

Backend Setup

1. Installation:

-Navigate to the widget/widgetBackend directory of the project.
-Run npm install to install the required backend dependencies.

2. Starting the Backend:

-Run npm start to start the Node.js backend, which provides the REST API for the Form Widget Editor.

#Database Configuration#
-This application uses an SQLite database. To configure the database, please do the following:

#Usage#
The Form Widget Editor is accessible by opening a web browser and visiting http://localhost:4200.
Contributing

