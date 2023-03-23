# Building the To Do List App: React and JavaScript

## Creating a React Project with Vite

> [Vite](https://vitejs.dev/guide/) is a tool that helps you build and run web applications faster and more efficiently, making it easier to develop modern web projects using popular JavaScript frameworks.

### If You're using Local Development

1. If you are coding locally (ie. using VSCode or other text editor), open a new empty folder (to store your project) and run the following command to run Vite's command line tool
   ```shell
   npm create vite@latest .
   ```
   - > ⚠️ If you are getting an error like `npm not found` or `'npm' is not recognized as an internal or external command`, make sure you've installed [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) -- more information can be found in [Setup](1-setup.md)
   - Project name: `todo-list-workshop` (or whatever you want to name your project)
   - Framework: `React`
2. Next, run `npm install`
   ```shell
   npm install
   ```
   - this will install all of the necessary packages for a basic React app
   - the installed packages will be stored in the `node_modules` folder (it will automatically just pop into your current project)
3. ```shell
   npm run dev
   ```

### If You're using CodeSandbox

- Fork this sandbox: https://codesandbox.io/s/qrf93

## Intro to React

- Let's start out by understanding the basic structure of a component in React:

```jsx
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
    </div>
  );
}

export default App;
```

## Writing the HTML

```jsx

```

## Making it Pretty with CSS


## React States with `useState`


## JavaScript Functions


