# Project Management Dashboard

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Technical Stack](#technical-stack)
- [Setup Instructions](#setup-instructions)
- [Contributions](#contributions)
- [License](#license)

## Description

This project is a web application for managing tasks and projects efficiently. It provides features such as task management, project overview, authentication, and more.

## Auth Information
- **User**: admin
- **Password**: password

## Features

- **Authentication**: Users can log in securely using a username and password. Authentication is handled on the client side with mock responses for successful and unsuccessful logins.
  
- **Projects Overview**: Displays a list of projects with options to view, edit, or delete. Project data is fetched from a mock API using React Query for efficient state management and caching.

- **Project Details**: After selecting a project, users can view detailed information including tasks, team members, and recent activities. They can also add new tasks and assign team members as needed.

- **Task Management**: Tasks can be added, edited, or marked as completed. Each task has a detailed view with descriptions, deadlines, and assigned members. Zustand is used for managing global state, including drag-and-drop functionality to change task status.

- **Task Filters and Search**: Users can filter tasks by status, due date, or assignee. A search bar is also provided to quickly find tasks based on keywords.

- **Interactive Dashboard**: The application uses Ant Design for creating interactive components such as modals, dropdowns, and tooltips. Tailwind CSS ensures responsive design across different screen sizes.

## Technical Stack

- **Framework**: Next.js is used for routing and server-side rendering, providing fast page loads and SEO benefits.

- **State Management**: Zustand is employed for managing global state, ensuring a predictable and efficient state update process.

- **Data Fetching**: React Query handles asynchronous data fetching, state management, and cache management, improving performance and reducing boilerplate code.

- **UI Components**: Ant Design is utilized for pre-built UI components, enhancing user experience with a consistent and visually appealing interface.

- **Styling**: Tailwind CSS is used for responsive design and custom styling needs, offering flexibility and maintainability in styling the application.

## Setup Instructions

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/project-management-dashboard.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd project-management-dashboard
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   The application should now be running on `http://localhost:3000`.

## Contributions

Contributions are welcome! If you find any bugs or want to suggest new features, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
