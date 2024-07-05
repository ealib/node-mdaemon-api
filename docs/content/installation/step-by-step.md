+++
title = "Step by step installation"
sort_by = "weight"
weight = 400
+++
# Step by step installation

1. select a host with [MDaemon (64 bit)](https://mdaemon.com/pages/mdaemon-email-server)
   already installed; MDaemon requires a licence key to function:
   alternatively, you can join their [beta testing community](https://mdaemon.com/pages/beta-program)
   and receive a free time-limited licence key;
2. install [Node.js LTS (64 bit) for Windows](https://nodejs.org/en/download/)
   on that host;
3. open a command shell (aka "DOS prompt");
4. create a new directory, say `test-md-node`
   ```cmd
   C:\> mkdir test-md-node

   C:\> _
   ```
5. CD to that directory
   ```cmd
   C:\> cd test-md-node

   C:\test-md-node> _
   ```
6. run `node --version` and check it correctly reports Node's version
   ```cmd
   C:\test-md-node>node --version
   v20.14.0

   C:\test-md-node>
   ```
7. initialize a Node.js project with `npm init -y`
   ```cmd
   C:\test-md-node>npm init -y
   Wrote to C:\test-md-node\package.json:

   {
    "name": "test-md-node",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
   }

   C:\test-md-node>
   ```
8. run `npm install node-mdaemon-api`
   ```cmd
   C:\test-md-node>npm install node-mdaemon-api
   npm notice created a lockfile as package-lock.json. You should commit this file.
   npm WARN node-mdaemon-api@{{MODULE_VERSION}} requires a peer of mdaemon@22.x but none is installed. You must install peer dependencies yourself.
   npm WARN test-md-node@1.0.0 No description
   npm WARN test-md-node@1.0.0 No repository field.

   + node-mdaemon-api@{{MODULE_VERSION}}
   added 1 package from 1 contributor and audited 1 package in 2.278s
   found 0 vulnerabilities


   C:\test-md-node>
   ```
9.  import `node-mdaemon-api` in your `index.js` as `const md = require('node-mdaemon-api');`
    ```javascript
    const md = require('node-mdaemon-api');

    // use "md" to access MDaemon's APIs...
    ```
10. use MDaemon's native APIs via `md` object.
