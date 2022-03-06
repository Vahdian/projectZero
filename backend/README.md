How to start a Typescript Express project:

1-Start node project:
npm init -y

2-Install express and Typescript:

npm install --save express
npm install --save-dev typescript ts-node @types/node @types/express


3-Generate a tsconfig.json file:

npx tsc --init

and fill it with this configuration:

{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./",
    "baseUrl": "./",
    "esModuleInterop": true
  }
}

4-Scripts (to this point):

"scripts": {
  "start": "ts-node ./src/server.ts",
  "start:prod": "npm run build && node ./dist/src/server.js",
  "build": "npx tsc"
},

5-Install nodemon

npm install --save-dev nodemon

and create a nodemon config file (nodemon.json)

{
  "ignore": [".git", "node_modules", "dist"],
  "watch": ["./src"], // <- files inside folder to watch
  "exec": "npm start", // <- command that will be executed when nodemon starts
  "ext": "ts" // <- files to watch
}