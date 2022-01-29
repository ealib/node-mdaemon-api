# Unofficial Node.js binding for MDaemon APIs

![NPM](https://nodei.co/npm/node-mdaemon-api.png)

![Node-API v6 Badge](https://img.shields.io/badge/Node--API-v6-green.svg)

- [1. Goal and Philosophy](#1-goal-and-philosophy)
- [2. Requirements](#2-requirements)
- [3. Version number](#3-version-number)
- [4. Security](#4-security)
- [5. How to install](#5-how-to-install)
- [6. How to use](#6-how-to-use)
  - [6.1. ECMAScript](#61-ecmascript)
    - [6.1.1. CommonJS](#611-commonjs)
    - [6.1.2. ESM](#612-esm)
  - [6.2. TypeScript](#62-typescript)
- [7. APIs implementation status](#7-apis-implementation-status)
- [8. Legal disclaimer](#8-legal-disclaimer)
- [9. License](#9-license)

## 1. Goal and Philosophy

**`node-mdaemon-api`** strives to be an easily embeddable bridge to
MDaemon's functionality.

MDaemon's native APIs have been reviewed and adapted to behave as much
as possible as ECMAScript/TypeScript functions.

## 2. Requirements

This package is intended for

- Microsoft Windows 10 64 bit (or newer);
- Microsoft Windows Server 2012 R2 64 bit (or newer);
- MDaemon 21.5.0 64-bit (or newer);
- Node.js 14.x LTS for Windows 64 bit (N-API 6 support, or newer).

If not already present, this package requires the latest
[VC++ runtime](https://docs.microsoft.com/en-US/cpp/windows/latest-supported-vc-redist)
for
[X64 (permalink)](https://aka.ms/vs/17/release/vc_redist.x64.exe)
to be installed.

## 3. Version number

Due to the nature of the MDaemon SDK, which is per-version with breaking
changes possibly happening whenever the first figure (major) and/or the
second figure (minor) in the version number change, this package follows
strictly the *Major.minor* version numbering of MDaemon.

For this reason, a new module property `versionsMatch` is available. It
holds `true` if module's *major* **and** *minor* version numbers match
MDaemon's. Please, **early abort** a script based on `node-mdaemon-api`,
if `versionsMatch` does *not* hold.

## 4. Security

> Please, note that `node-mdaemon-api` is a *pre-built binary module* for
> Node.js for Microsoft Windows.

All best-practices in security have been followed to ensure the very
binary is safe and without any malware. This, however, does not entitle
the end user to trust us blindly. We strongly suggest implementing best
security practices for the target machine as well and verifying again
this package locally.

## 5. How to install

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
   npm WARN node-mdaemon-api@21.5.1-alpha.5 requires a peer of mdaemon@21.x but none is installed. You must install peer dependencies yourself.
   npm WARN test-md-node@1.0.0 No description
   npm WARN test-md-node@1.0.0 No repository field.

   + node-mdaemon-api@21.5.1-alpha.5
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

## 6. How to use

> **WARNING**
> Early abort the script if `versionsMatch` is false.

```javascript
const md = require('node-mdaemon-api');

if (!md.versionsMatch) {
    // Early abort!
    throw new Error('MDaemon version and node-mdaemon-api version do NOT match!');
}

// Safe to use "md" to access MDaemon's APIs...
// ...
```

### 6.1. ECMAScript

#### 6.1.1. CommonJS

Minimum [ECMASCript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
example:

```javascript
'use strict';
const md = require('node-mdaemon-api');

if (!md.versionsMatch) {
    // Early abort!
    throw new Error('MDaemon version and node-mdaemon-api version do NOT match!');
}

if (md.isReady) {
    const mdInfo = md.getMdInfo();
    console.log(`MDaemon ${mdInfo.version.full} ready!`);
} else {
    console.error('MDaemon not available.');
}
```

#### 6.1.2. ESM

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

if (!md.versionsMatch) {
    // Early abort!
    throw new Error('MDaemon version and node-mdaemon-api version do NOT match!');
}

if (md.isReady) {
    const mdInfo = md.getMdInfo();
    console.log(`MDaemon ${mdInfo.version.full} ready!`);
} else {
    console.error('MDaemon not available.');
}
```

### 6.2. TypeScript

Minimum [TypeScript](https://www.typescriptlang.org/docs/) example:

```typescript
import { isReady, versionsMatch, MD_GetDomainNames } from "node-mdaemon-api";

function getDomains(pattern?: RegExp): string[] {
    const domains: string[] = MD_GetDomainNames() ?? [];
    return pattern ? domains.filter(d => pattern.test(d)) : domains;
}

if (!versionsMatch) {
    // Early abort!
    throw new Error('MDaemon version and node-mdaemon-api version do NOT match!');
}

if (isReady) {
    getDomains().forEach(domainName => console.log(`- ${domainName}`));
} else {
    console.error('MDaemon not available.');
}
```

## 7. APIs implementation status

Implementation status moved to
[wiki](https://github.com/ealib/node-mdaemon-api/wiki).

## 8. Legal disclaimer

MDaemon® is a trademark of [MDaemon Technologies, Ltd.](https://www.altn.com/Company/)
MDaemon Technologies makes no representations, endorsements, or
warranties regarding Third Party Products or Services.

Node.js is a trademark of [Joyent, Inc.](https://www.joyent.com/).

Windows&trade; is a [trademark of Microsoft Corp.](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks)

## 9. License

node-mdaemon-api 21.5.1-alpha.5 license

Copyright (c) 2016-2022 Emanuele Aliberti, MTKA

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
