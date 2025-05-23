# Design System Assignment

This project is a design system built using React, TypeScript, and Vite. It includes various UI components styled with Tailwind CSS and is set up for development with Storybook.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Scripts](#scripts)
- [Configuration](#configuration)
- [License](#license)

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/ujjwaltomar0808/ujjwaltomar0808-design-system-assignment.git
cd ujjwaltomar0808-design-system-assignment
npm install```


## Usage
To run the development server, use the following command:
npm run dev

To build the project for production, run:
npm run build

To preview the production build, use:
npm run preview

To start Storybook for component development, run:
npm run storybook


## Components

This design system includes the following components:

- **Alert:** Displays alert messages with different variants (info, success, warning, error).
- **Input:** A customizable input field with label and error handling.
- **Select:** A dropdown select component with options and support for disabled states.
- **Toast:** A notification component that can display messages temporarily.
- **Typography:** A flexible typography component for various text styles.

## Scripts

The following scripts are available in the `package.json`:

- `dev`: Starts the Vite development server.
- `build`: Compiles the TypeScript files and builds the project.
- `lint`: Runs ESLint to check for code quality issues.
- `preview`: Previews the production build.
- `storybook`: Starts the Storybook development server.
- `build-storybook`: Builds the Storybook for production.

## Configuration

### Vite Configuration

The Vite configuration is located in `vite.config.ts`. It includes plugins for React and font handling.

### Tailwind CSS Configuration

The Tailwind CSS configuration is in `tailwind.config.js`, where you can customize themes and variants.

### ESLint and Prettier

ESLint and Prettier configurations are provided to maintain code quality and formatting. You can find them in `.eslintrc.cjs` and `.prettierrc.cjs`.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
