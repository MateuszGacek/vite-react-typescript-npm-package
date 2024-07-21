# React + TypeScript + Vite + Tailwind CSS

## Setup

- `npm install` - to install all necessary dependencies.
- Change `"your-package-name"` in `vite.config.ts`, `package.json`, and `npm.package.json` to your package name.
- Update the URL in `npm.package.json` to your Git repository URL.
- Customize the following fields in `npm.package.json`: `"version"`, `"description"`, `"keywords"`, `"author"`, and `"license"`.

## Build

- The `build` script clears and builds the library again in the `dist` folder, creating a `package.json` for the library from `npm.package.json`.

## Testing NPM

- Create a new project to test your library, e.g.: `npm create vite@latest test-my-react-component -- --template react-ts`.
- In the `dist` folder, use the command: `npm link`.
- In the main directory of the testing project, use the command: `npm link your-package-name` (replace `your-package-name` with your package name).
- Import any component from the library like this:

  ```javascript
  import { Header } from "your-package-name"; // Import any component you created
  import "your-package-name/lib/styles.css"; // Import styles for your components
  ```

## NPM publish

- In the `dist` directory:

* First, you must have an account on npmjs.com.
* `npm adduser` - This command logs you into your npm account and allows you to upload
* `npm publish` - This command uploads and publishes to NPM only the content of the `dist` folder.
