# AI Customer Assistant

A simple full-stack web application built with JavaScript and Node.js that analyzes customer requests and assigns a priority level and suggested action based on customer sentiment.

## Features

- Simple web interface for entering customer information
- Customer name, issue and sentiment input
- Automatic priority classification
- Suggested action based on customer sentiment
- Frontend-to-backend communication using HTTP requests
- JSON data exchange
- Input validation
- Error handling when the backend server is unavailable

## Technologies Used

- HTML
- CSS
- JavaScript
- Node.js
- HTTP
- REST-style API
- JSON

## Project Architecture

```text
Browser / Frontend
        |
        | POST /analyze
        | JSON
        v
Node.js Backend
        |
        | Customer analysis
        v
Priority + Suggested Action
        |
        | JSON response
        v
Browser / UI
```

## How It Works

The user enters:

- Customer name
- Customer issue
- Customer sentiment

The frontend sends the information to the Node.js backend using a POST request.

Example request:

```json
{
  "name": "ABC Company",
  "issue": "Delivery is late by 5 days",
  "sentiment": "angry"
}
```

The backend analyzes the sentiment and returns a result.

Example response:

```json
{
  "priority": "HIGH",
  "action": "Contact the customer immediately."
}
```

The result is then displayed in the browser.

## Priority Logic

The current version uses simple rule-based analysis:

```text
angry   -> HIGH priority
neutral -> NORMAL priority
happy   -> LOW priority
```

This logic can later be replaced or extended with an AI/LLM-based analysis system.

## Running the Project

Clone the repository:

```bash
git clone https://github.com/cristi-poli/ai-customer-assistant.git
```

Open the project directory:

```bash
cd ai-customer-assistant
```

Start the Node.js server:

```bash
node server.js
```

Then open:

```text
http://localhost:3000
```

in your browser.

## Project Structure

```text
ai-customer-assistant/
│
├── index.html
├── style.css
├── script.js
├── server.js
└── app.js
```

### `index.html`

Contains the structure of the user interface.

### `style.css`

Contains the visual styling of the application.

### `script.js`

Handles frontend logic, form validation, API requests and displaying results.

### `server.js`

Runs the Node.js backend server and processes customer analysis requests.

### `app.js`

Contains an earlier command-line version of the customer analysis logic.

## Concepts Practiced

This project was created as a practical introduction to web development and client-server architecture.

Concepts used include:

- JavaScript objects and arrays
- Functions
- Arrow functions
- `if / else`
- Object destructuring
- `async / await`
- `fetch()`
- HTTP GET and POST requests
- JSON serialization and parsing
- Node.js HTTP server
- Error handling with `try / catch`
- Frontend and backend communication

## Future Improvements

Possible future improvements include:

- TypeScript
- Angular frontend
- Database integration
- User authentication
- Customer history
- AI-generated summaries
- Automatic sentiment analysis
- LangChain integration
- LLM-based recommendations
- RAG-based customer support knowledge base

## Author

Built as a learning project focused on JavaScript, Node.js and full-stack web development.