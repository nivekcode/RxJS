## Description
This repository contains a small application that displays some polls from the doodle account. You can view and filter those polls.

## Filters
The applications provides the following filters:

- *Filter by the name of the Creator or Title*
- *Filter by number of participants*
- *Filter by number of Invitees*
- *Filter by type*
- *Filter by participant names*

## How to start the app

Requirements: You need to have node with npm installed on your local machine. To start the app just navigate to the app directory and run
```
npm install
```

NPM install installes all third party libraries. After a successfull npm istall run

```
npm start
```

This task will first run npm prestart. NPM Prestart bundles the app with Browesrify and Babel. The main bundle will then be included in the index.html. After the bundeling process the application automatically starts up in a new browser window.