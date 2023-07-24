![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Lab | React Native - Local storage

## Learning Goals

This exercise allows you to practice and apply the concepts and techniques taught in class.

Upon completion of this exercise, you will be able to:

1. Be able to create applications with persisting data.
2. Implement `@react-native-async-storage/async-storage` to persist app data.
3. Create applications that stores and gets information from local storage.

## Introduction

In this lab, we're going to create a task management app. The task management app allows users to create, view, update, and delete tasks. Users can organize their tasks into different categories (e.g., personal, work, shopping) and mark tasks as completed.

For this lab, we don't have a backend or an api. Instead all data should be stored on the user device by implementing `@react-native-async-storage/async-storage`.

## Requirements

- Fork this repo.
- Clone this repo.
- Run `nvm use` to use the node version specified in the `.nvmrc` file.

```bash
nvm use
```

- Install the dependencies.

```bash
npm install
```

- Start the project.

```bash
npm run ios
npm run android
```

## Submission

- Upon completion, run the following commands:

```bash
git add .
git commit -m "done"
git push origin master
```

- Create a Pull Request so your TAs can review your work.

## Instructions

**Iteration 1**: Project Setup

1. Set up a new React Native project.
2. Install React Navigation and its dependencies.
3. Create the necessary folder structure and boilerplate files for the app (e.g., screens, components, navigation, context, types).
4. Create a basic navigation structure with screens for task list, task creation, and task details.

**Iteration 2**: Task List Screen

1. Create a simple list of tasks (mock data for now) on the task list screen.
2. Define the task object type using TypeScript and use it throughout the app.
3. Implement a context provider using the React Context API to manage the tasks' state. Initially, use an empty array for tasks.
4. Use useReducer hook to handle actions related to tasks (e.g., add task, update task status).
5. Display task titles and categories on the task list screen fetched from the context state.
6. Tasks data should be store on the device.

**Iteration 3**: Task Creation Screen

1. Create a form on the task creation screen with input fields for task title, description, and category.
2. Implement an action.type pattern to handle the task creation action and update the context state accordingly.
3. Upon submitting the form, add the newly created task to the task list.

**Iteration 4**: Task Details Screen

1. Create a task details screen that shows task details (title, description, category, completion status).
2. Implement an action.type pattern to handle task completion and task deletion actions.
3. Allow users to mark a task as completed or delete it from the task details screen.

**Iteration 5**: Category Filtering

1. Implement an action.type pattern to handle category actions (e.g., add category, select category).
2. Add a dropdown or button on the task list screen to filter tasks by category using the selected category from the context.

**Iteration 6**: TypeScript Refinement

1. Review the entire codebase and ensure TypeScript typings are correctly applied to all components, functions, and context.
2. Handle potential errors and edge cases related to TypeScript typings.

### Bonus

- Implement a screen to search for tasks.
- Implement your own styles to your application 🎨.

Happy coding! 💙
