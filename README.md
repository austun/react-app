# Campaign Front-End App

This module designed as front-end part of full stack Campaign app.

It is built with React, Redux, Redux Saga, React-Router, Material UI and Axios.

React's component approach makes rendering easy for complex data structure such in the given data.json file. 

Material-UI components used in overview and detailed presentation views.

Navigation header on the landing page designed in order to demonstrate a React-Router example.

State and Props management orchestrated with React Redux.

Redux provides each component of an application can have direct access to the state of the application without having to send props down to child components or using callback functions to send data back up to a parent.

When application gets complex, this provides predictable state updates.

Campaign fetching handled with async calls using Redux Saga. Saga watches for dispatched fetch campaign actions. 
When defined campaign action dispatched, handles the process, take care of API invocation and return result to generator.

The detailed information about functional features of full stack app provided in [README.md](https://github.com/austun/campaigns/blob/master/README.md) file of full stack app repository.
### Installation and Run

To install app, node should be installed beforehand.

Front-end project created using [create-react-app](https://github.com/facebook/create-react-app), which provides simple way to start React projects without any external configuration.

Once npm installed, below command should be run in project directory, react-app:

```npm start```

This runs app in development mode and opens landing page at [http://localhost:3000](http://localhost:3000/) in browser.