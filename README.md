# Unofficial Node.js binding for MDaemon APIs

![NPM](https://nodei.co/npm/node-mdaemon-api.png)

![Node-API v6 Badge](https://img.shields.io/badge/Node--API-v6-green.svg)

- [1. Requirements](#1-requirements)
- [2. How to install](#2-how-to-install)
- [3. How to use](#3-how-to-use)
  - [3.1. ECMAScript](#31-ecmascript)
    - [3.1.1. CommonJS](#311-commonjs)
    - [3.1.2. ESM](#312-esm)
  - [3.2. TypeScript](#32-typescript)
- [4. APIs implementation status](#4-apis-implementation-status)
- [5. Legal disclaimer](#5-legal-disclaimer)
- [6. License](#6-license)

## 1. Requirements

This package is intended for

- Microsoft Windows 10 64 bit (or newer);
- Microsoft Windows Server 2012 R2 64 bit (or newer);
- MDaemon 21.0.0 64-bit (or newer);
- Node.js 14.x LTS for Windows 64 bit (N-API 6 support, or newer).

## 2. How to install

1. select a host with [MDaemon (64 bit)](https://www.altn.com/Products/MDaemon-Email-Server-Windows/)
   already installed;
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
   v14.18.0

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
   npm WARN node-mdaemon-api@21.0.3-alpha.7 requires a peer of mdaemon@21.x but none is installed. You must install peer dependencies yourself.
   npm WARN test-md-node@1.0.0 No description
   npm WARN test-md-node@1.0.0 No repository field.

   + node-mdaemon-api@21.0.3-alpha.7
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

## 3. How to use

### 3.1. ECMAScript

#### 3.1.1. CommonJS

Minimum [ECMASCript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
example:

```javascript
'use strict';
const md = require('node-mdaemon-api');

if (md && md.isReady) {
    const mdInfo = md.getMdInfo();
    console.log(`MDaemon ${mdInfo.version.full} ready!`);
} else {
    console.error('MDaemon not available.');
}
```

#### 3.1.2. ESM

If you set your `package.json`'s `type` to `module`, Node.js can use ESM
modules, but `import` can [**not** import native
modules](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_no_native_module_loading)
as `node-mdaemon-api`. You will need to explicitly create the `require`
function to load `node-mdaemon-api`.

```javascript
'use strict';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const md = require('node-mdaemon-api');

if (md && md.isReady) {
    const mdInfo = md.getMdInfo();
    console.log(`MDaemon ${mdInfo.version.full} ready!`);
} else {
    console.error('MDaemon not available.');
}
```

### 3.2. TypeScript

Minimum [TypeScript](https://www.typescriptlang.org/docs/) example:

```typescript
import { isReady, MD_GetDomainNames } from "node-mdaemon-api";

function getDomains(pattern?: RegExp): string[] {
    const domains: string[] = isReady ? MD_GetDomainNames() ?? [] : [];
    return pattern ? domains.filter(d => pattern.test(d)) : domains;
}
getDomains().forEach(domainName => console.log(`- ${domainName}`));
```

## 4. APIs implementation status

Implementation status moved to
[wiki](https://github.com/ealib/node-mdaemon-api/wiki).

## 5. Legal disclaimer

MDaemon® is a trademark of MDaemon Technologies, Ltd. MDaemon
Technologies makes no representations, endorsements, or warranties
regarding Third Party Products or Services.

## 6. License

node-mdaemon-api 21.0.3-alpha.7 license

Copyright (c) 2016-2021 Emanuele Aliberti, MTKA

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
