## NodeJs + ReactJs Starter Pack

- In this repo you can find a simple NodeJs + ReactJs starter pack App
- The node server is built with ExpressJs Framework

Bonus: Added script to heroku deployment

### Table of Contents

1. [Installation](#installation)
2. [Run the app locally](#run-app)
3. [Deploy to Heroku](#deploy-heroku)

#### 1 - Installation <a name="installation"></a>

- Run `npm install` on the root directory and the client directory

#### 2 - Run the app locally <a name="run-app"></a>

- Run `npm run dev` from the root directory
- The server and client side reboot everytime you make changes, Happy Coding!

#### 3 - Deploy to Heroku <a name="deploy-heroku"></a>

- The code is already handling Heroku deployment but you need to connect to Heroku
- Assuming that you already have a Heroku account and you already initialized git in your repo, you simply need to follow the steps below :

note: type all the command lines from the root directory

1 - Login to heroku with `heroku login` <br>
2 - Create a new Heroku App with `heroku create` <br>
3 - Connect to the git repo that Heroku create provided you with `git remote add heroku https://git.heroku.com/link-heroku-provided.git` (paste the link provided by Heroku, not this fake one) <br>
4 - git add, commit and then push to Heroku with `git push heroku master` and you should be done <br>
5 - Everytime you want to re-deploy, just add, commit and push to Heroku <br>

note: You can check the <strong>heroku-postbuild</strong> script in the server's package.json and the if statement to handle production mode at the bottom of the app.js server file.

Made by Jérémy Geneste.
