This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.
It also used Formik to handle Form elements and validation
React-router-dom was used to handle routing of the application. This allows the application to be scaleable with more pages in the future.
React-testing-library was the tool of choice for unit testing

## Installation guide

`npm install`
Installs the application's dependencies
Please ensure you have at a node version of >= 12.18.0

`npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Possible improvements for the future
The application currently does not respond to the size of the screen. Adding styles for multiple breakpoints would improve the viewing experience of users across several devices.
The application is using hardcoded strings for its content. Ideally this should be coming from a config somewhere so that they is one source of truth for the content.

## Other scripts
`npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

`npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimises the build for the best performance.

The build is minified and the filenames include the hashes.<br />

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
