<h1 align='center'><b>Tasker ✅</b></h1>  
<p align='center'>
A <code>Node.js</code>, <code>Express</code> and <code>JavaScript</code> API aimed to provide
a convenient way manage tasks.
</p>

<p align="center">
Built with 💖 and ✨ by <a href='https://github.com/vannida-lim'>Vannida
Lim</a>
</p>

**Demo**
------------
[Heroku](https://tasker-app-backend.herokuapp.com/)

**Features**
------------

Tasker is a backend API that aims to provide users a convenient way to list tasks and manage them. Users can signup, login and be authenticated to manage their own tasks. Users can create, read, update, and delete their tasks. Users can also delete their own accounts. 

**Tech Stack**
--------------

This API makes use of the following:

-   [Node.js 12.12.0](https://nodejs.org/en/)
-   [Express ~> 4.17.1](https://expressjs.com/) - Node framework
-   [MongoDB](https://www.mongodb.com/) - Database

**Prerequisites**
-----------------

Before you begin, ensure you have installed the latest version of:

-   [Node.js](https://nodejs.org/en/)
-   [Express](https://expressjs.com/)

This web app uses the following API keys from:

-   [Sendgrid](https://sendgrid.com/)

**Endpoints**
--------------
### User Model: 

`POST https://tasker-app-backend.herokuapp.com/users`

`POST https://tasker-app-backend.herokuapp.com/users/login`

`POST https://tasker-app-backend.herokuapp.com/users/logout`

`POST https://tasker-app-backend.herokuapp.com/users/logoutAll`

`GET https://tasker-app-backend.herokuapp.com/users/me`

`PATCH https://tasker-app-backend.herokuapp.com/users/me`

`DELETE https://tasker-app-backend.herokuapp.com/users/me`

`POST https://tasker-app-backend.herokuapp.com/users/me/avatar`

`DELETE https://tasker-app-backend.herokuapp.com/users/me/avatar`

`GET https://tasker-app-backend.herokuapp.com/users/:id/avatar`

### Task Model: 

`POST https://tasker-app-backend.herokuapp.com/tasks`

`GET https://tasker-app-backend.herokuapp.com/tasks` 

Fetch by these available queries: 
* `GET /tasks?completed=false`
* `GET /tasks?limit=10&skip=0`
* `GET /tasks?sortBy=createdAt:desc`

`GET https://tasker-app-backend.herokuapp.com/tasks/:id`

`PATCH https://tasker-app-backend.herokuapp.com/tasks/:id`

`DELETE https://tasker-app-backend.herokuapp.com/tasks/:id`

**Installing**
--------------
-   Clone this repo to your local machine `git clone git <this-repo-url>`

-   `cd` to `task-manager`

-   run `npm install && npm run dev` to install all dependencies and start the server locally

-   When prompted, ensure app is running at `http://localhost:3000` or another available port