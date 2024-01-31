# Reminder App (React + Typescript)

## Table of Contents

- [Introduction](#introduction)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Run the Project](#run-the-project)
- [Project Structure](#project-structure)
- [OneSignal Integration](#onesignal-integration)

## Introduction

The Reminder App is a web application designed to send push notifications for user reminders. It utilizes OneSignal for push notification services. Users also can create their daily tasks. The project is built using React and uses local storage to store data.

[Demo URL](https://my-reminder-app.netlify.app/)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [OneSignal Account](https://onesignal.com/) with App ID and REST API Key

## Getting Started

### Installation

1. **Clone the Repository:**

```bash
 git clone https://github.com/Honey0908/Reminder-App
```

2. **Navigate to the Project Directory:**

```bash
cd Reminder-App
```

2. **Install Dependencies:**

```bash
 npm install
```

### Configuration

Before running the project, set up your environment variables:

1. **Create `.env` file in root Directory:**

```env
VITE_ONESIGNAL_REST_API_KEY=your_onesignal_rest_api_key
VITE_ONESIGNAL_APP_ID=your_onesignal_app_id
```

Replace the placeholder values with your OneSignal credentials.

### Run the Project

Now, you're ready to run the Reminder App:

Start the Server:

```bash
npm run dev
```

## Project Structure

```bash
├── index.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── public
│   ├── bell_icon.png
│   └── OneSignalSDKWorker.js
├── README.md
├── src
│   ├── App.tsx
│   ├── components
│   │   ├── CurrentTime.tsx
│   │   ├── Form.tsx
│   │   ├── Modal.tsx
│   │   ├── Navbar.tsx
│   │   ├── reminders
│   │   │   ├── ReminderForm.tsx
│   │   │   ├── ReminderList.tsx
│   │   │   └── Reminder.tsx
│   │   ├── Sidebar.tsx
│   │   └── tasks
│   │       ├── TaskForm.tsx
│   │       ├── TaskList.tsx
│   │       └── Task.tsx
│   ├── constants
│   │   ├── formData.ts
│   │   └── NavigationOptions.tsx
│   ├── context
│   │   ├── reminder
│   │   │   ├── ReminderContext.tsx
│   │   │   └── reminderReducer.ts
│   │   └── task
│   │       ├── TaskContext.tsx
│   │       └── TaskReducer.ts
│   ├── index.css
│   ├── main.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── services
│   │   ├── localStorage.ts
│   │   └── reminder.ts
│   ├── types
│   │   └── types.ts
│   └── vite-env.d.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## OneSignal Integration

This project leverages OneSignal for push notification services. Ensure that you have a OneSignal account, and configure your OneSignal App ID and REST API Key in the .env file.
