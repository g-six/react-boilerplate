# Skyrun Web ReactJS App
**This is the code-base for our web app.**

Please ensure that for every js file that you create, there are respective test cases.

We are aiming for 100% coverage!

Getting Started
---------------  
Requirements:  

```sh
   NodeJS 6.5.0 or greater
   npm 3.*.* or greater
   A running API (or you may use https://kaishahero.com/live as source API)
```

Installation:

```sh
   npm install
```

Node enviromental variables:

```sh
   API=<specify where the public api is hosted>
   PORT=<Webpack will launch on this port. ex. http://localhost:5000>
```

Running development:

```sh
   $ API=https://kaishahero.com/live PORT=8000 npm start
   Access URLs:
   --------------------------------------
         API: https://kaishahero.com/live
   Localhost: http://localhost:8000
         LAN: http://192.168.1.234:8000
   --------------------------------------
   Press CTRL-C to stop

   webpack built 2808603dd12c0f048faf in 4679ms
```

1. First, let's kick the tyres by launching the sample app bundled with this project to demo some of its best features:    
    ```sh
    API=https://kaishahero.com/live PORT=8000 npm start
    ```
2. Open [http://localhost:8000](http://localhost:8000) to see it in action.  
    - Click the login button to see Redux and Redux Sagas in action: effortless async state updates and side effects are now yours :)
    - Edit the file at ./app/components/Header/index.js so that the text of the <Button> component reads "Sign In"... Hot Module Reloading gives you a feedback loop with your UI so smooth it's almost conversational!


### Structure
The [app/](/tree/master/app) directory contains your entire application code, including CSS, JavaScript, HTML and tests.

The rest of the folders and files only exist to make your life easier, and should not need to be touched.


### Development
Run `API=https://kaishahero.com/live PORT=8000 npm start` to see your app at [http://localhost:8000](http://localhost:8000)


### Generators
```sh
npm run generate
```
Allows you to auto-generate base code for common parts of your application, specifically `components`, and `containers`. You can also run npm run generate <part> to skip the first selection. (e.g. `npm run generate container`).

### Building & Deploying
1. Run `npm run build`, which will compile all the necessary files to the `build` folder.
2. Upload the contents of the `build` folder to your web server's root folder.

### Testing
1. Unit testing  
    ```
    npm test
    ```
    Tests your application with the unit tests specified in the `**/tests/*.js` files throughout the application.
All the test commands allow an optional -- [string] argument to filter the tests run by Jest. Useful if you need to run a specific test only.  
    Run only the HomePage container tests:  
    ```
    npm test -- HomePage
    ```
    
### Linting
```sh
npm run lint
```


