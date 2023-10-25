**Env Creation:**

    - Env: npm init -y
    - Setup Typescript: npm install -D typescript
    - TS Node: npm install -D ts-node (or npm uninstall nodemon & npm install -g nodemon)
    - npm install -g ts-node
    - Keep the project running during all the changes: npm install -D nodemon

**Config Typescript:**
    - create src folder, and index.ts file inside it
    - tsconfig.json : define compiler options (used to configure the TypeScript compiler, allows you to specify settings such as module resolution, output directory, source maps, strict type checking, and more)
    - nodemon.js : configure nodemon (used to monitor changes in files within a specified directory and automatically restart your application whenever changes are detected)

**Setup Express Server:**
    - Install all midleswares: npm i express body-parser cookie-parser cors compression
    - Then install their types: npm i -D @types/express @types/body-parser @types/cookie-parser @types/cors @types/compression (They provide type annotations that describe the structure of the library's API.)
    - use auth, compression, bodyparser, cookieparser: Middleware functions in Express are functions that have access to the request and response objects, and they can perform various tasks during the request-response cycle.

**Setup MongoDB:**
    - npm install mongoose, npm i -D @types/mongoose
    - ramsundar1238, QBp8CFZTdjjbaVLO
    - create folder inside src -> db and create a file inside db forder that is users.ts (It will contain user schema and user model)
    - Then create helper for authentications: create helpers folder in src and then index.ts file (These functions can be useful for generating secure tokens and managing user authentication in a web application.)
    - Now we will create auth Routes: create controllers folder in src, and authentication.ts file
    - then create a folder router, index.ts, authentication.ts (define route, define a route handler function that registers a route for user)...then add authentication to index router

**Setup Login Router:**
    - in controller folder add login code in authentication

**Setup Middlewares:**
    - create a middlewares folder, index.ts
    - npm i lodash, npm install -D @types/lodash
    - then create users.ts in controller, as well as users router as well as update the router's index
    - then add deleteuser code in controller user file, then also use delete usercode in router
    - create middleware so that it cannot delete another user
    - create update usser in controller

**To Run:**
    - npm start
