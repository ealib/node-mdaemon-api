# Unofficial Node.js binding for MDaemon APIs

> node-mdaemon-api 21.0.3-alpha.4

## Requirements

This package is intended for

- Microsoft Windows 10 64 bit (or newer)
- Microsoft Windows Server 2012 R2 64 bit (or newer)
- MDaemon 21.0.0 64-bit (or newer)
- Node.js 14.x LTS for Windows 64 bit, i.e. with N-API 7 support (or newer)

## How to install

1. select a host with [MDaemon (64 bit)](https://www.altn.com/Products/MDaemon-Email-Server-Windows/)
   already installed;
2. install [Node.js LTS (64 bit) for Windows](https://nodejs.org/en/download/)
   on that host;
3. open a command shell (aka "DOS prompt");
4. create a new directory, say `test-md-node`;
5. CD to that directory (`cd test-md-node`);
6. run `node --version` and check it correctly reports Node's version;
7. initialize a Node.js project with `npm init -y`;
8. run `npm install node-mdaemon-api`;
9. import `node-mdaemon-api` in your `index.js` as `const md = require('node-mdaemon-api');`;
10. use MDaemon's native APIs via `md` object.

## How to use

Minimum [ECMASCript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
example:

```javascript
const md = require('node-mdaemon-api');

if (md && md.isReady) {
  console.log("MDaemon ready!");
} else {
  console.error("MDaemon not available.");
}
```

Minimum [TypeScript](https://www.typescriptlang.org/docs/) example:

```typescript
import { readDomains } from "node-mdaemon-api";

function getDomains(): Promise<string[]> {
  return new Promise<string[]>((resolve, reject) => {
    readDomains((err: Error | null, domains?: string[]) => {
      if (err) {
        reject(err);
      } else {
        resolve(domains ?? []);
      }
    });
  });
}
```

## Legal disclaimer

MDaemon® is a trademark of MDaemon Technologies, Ltd. MDaemon
Technologies makes no representations, endorsements, or warranties
regarding Third Party Products or Services.

## License

node-mdaemon-api 21.0.3-alpha.4 license

Copyright (c) 2016-2021 Emanuele Aliberti, MTKA

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
