# Expo 51 Academic Project

This is an academic project created to test the latest features of Expo 51. The project demonstrates how to create a simple event scheduling application using React Native with Expo 51. It includes functionalities to add, view, and manage events using the `expo-sqlite` library for local database management.

## Features

- **Add Events**: Users can add events with a name, date, time, and description.
- **View Events**: Users can view all the events that have been added.
- **Local Storage**: Events are stored locally using SQLite, which persists across app restarts.

## Technologies Used

- **Expo 51**: The latest version of Expo, which includes new features and improvements.
- **React Native**: A framework for building native apps using React.
- **expo-sqlite**: A library that provides access to a SQLite database, allowing for persistent local storage.

## Getting Started

### Prerequisites

- Node.js
- Expo CLI

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Hargenx/Testando-for-fun.git
   cd Testando-for-fun
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

3. Install Expo (if not already installed): blog.expo.dev/the-new-expo-cli-f4250d8e3421

   ```sh
   npx install expo
   ```

4. Start the project:

   ```sh
   expo start
   ```

## Project Structure

```code
expo-51-academic-project
├── app
│   ├── (tabs)
│   │   └── _layout_.tsx
│   ├── index.tsx
│   ├── details.tsx
│   ├── db.ts
├── LICENSE
└── README.md
```

- `db.ts`: Contains functions to initialize the database, add events, and fetch events.
- `app/index.tsx`: The main screen where users can add new events.
- `app/details.tsx`: The screen where users can view all the events.
- `app/(tabs)/_layout.tsx`: To navigate between the two routes.

## How to Use

1. **Adding Events**:
   - Navigate to the home screen.
   - Enter the event details including name, date, time, and description.
   - Click on the "Adicionar Evento" button to add the event to the local database.

2. **Viewing Events**:
   - Navigate to the details screen.
   - All the added events will be displayed in a list.

## Notes

- This project is for academic purposes only and is intended to test and demonstrate new features in Expo 51.
- It is not intended for production use.

## License

This project is licensed under the MIT License.

---

Feel free to explore and modify the project to better understand the new features of Expo 51. If you encounter any issues or have any questions, please feel free to open an issue or contact the project maintainers.
