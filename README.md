## Setup

In the project directory, you can run:

### `npm install`

Downloads all the necessary dependencies for the application to run locally.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm build`

Builds the app for production to the `build` folder.
Once built, the app can be statically served to you browser and run without needing to spin up the development Node.js server.

## Possible Future API

Ideally we would not be storing the re-ordered repository issues in session storage, but rather hitting an API to persist the new order. This would allow other users of the application to see the new priority. This API would sit between our front end and the GitHub API so requests for issues would pass through it so our API could apply an ording to the GitHub API response and pass the prioritized list back to the front end. I think a simple key/value database to store the order for  repositories would be fine.

We would probably want a more robust login setup, perhaps using a login form with username and password since most users don't know their GitHub API key off the top of their heads.
