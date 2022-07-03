# To-Do List!

## Description

_Duration: 4 hours

This application allows the user to organize all of their tasks into a to-do list. They are able to type in a task and have it added to the the list, which is stored in a database. When the user completes the task, they have the option to click on the "Complete" button. This will change the background color of the table row and the status of the task to "true". The user is also able to remove a task from their list by clicking the "Delete" button.

## Screen Shot

Include one or two screen shots of your project here (optional). Remove if unused.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- Express
- PG

## Installation

1. Create a database named `task_list`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Type a task into the input field
2. Click the "Add" button
3. See your task populate in the list below, along with a status of "false" under the "Completed?" heading
4. When you have finished your task, click the "Complete" button to change the status to "true". This will also change the background color to yellow
5. When you wish to remove a task, click the "Delete" button


## Built With

HTML, CSS, JQuery, JavaScript, SQL


## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support
If you have suggestions or issues, please email me at [rachelbruce922@gmail.com]