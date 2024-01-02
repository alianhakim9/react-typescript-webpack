# React Webpack TypeScript Project

This project is a template for building React applications using webpack and TypeScript.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Development](#development)
  - [Running Locally](#running-locally)
  - [Build](#build)
- [Project Structure](#starter-project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

### Prerequisites

Make sure you have the following installed before starting the project:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/alianhakim9/react-typescript-webpack.git
cd react-typescript-webpack
```

2. Install dependencies

```
npm install --save # or yarn install
```

### Development

#### Running Locally

To start the development server and run the application locally:

```
npm start # or yarn start
```

#### Build

To build the production-ready application:

```
npm run build # or yarn build
```

### Starter Project Structure

```
/react-webpack-typescript
|-- /build
|-- /src
|   |-- /components
|   |-- /assets
|   |----/fonts
|   |----/images
|   |----|-- logo.svg
|   |----/styles
|   |    |-- index.css
|   |-- App.tsx
|   |-- declarations.d.ts
|   |-- index.html
|   |-- index.tsx
|-- /webpack
|   |-- webpack.common.js
|   |-- webpack.config.js
|   |-- webpack.dev.js
|   |-- webpack.prod.js
|-- .babel.js
|-- .eslintc.js
|-- .gitignore
|-- .prettierrc.js
|-- tsconfig.json
|-- package.json
|-- README.md

```

### Technologies

- React 18
- TypeScript
- Webpack

### Contributing

Feel free to contribute by opening an issue or submitting a pull request.

### License

This project is licensed under the MIT Licence
