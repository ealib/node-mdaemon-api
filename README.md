# Unofficial Node.js binding for MDaemon APIs

> node-mdaemon-api 21.0.2-alpha.1

## REQUIREMENTS

This package is intended for

- Microsoft Windows 10 64 bit (or newer)
- Microsoft Windows Server 2012 R2 64 bit (or newer)
- MDaemon 21.0.0 64-bit (or newer)
- Node.js 14.x LTS for Windows 64 bit, i.e. with N-API 7 support (or newer)

## HOW TO INSTALL

1. select a host with [MDaemon (64 bit)](https://www.altn.com/Products/MDaemon-Email-Server-Windows/)
   already installed;
2. install [Node.js LTS (64 bit) for Windows](https://nodejs.org/en/download/)
   on that host;
3. open a command shell (aka "DOS prompt");
4. create a new directory, say `test-md-node`;
5. CD to that directory (`cd test-md-node`);
7. run `node --version` and check it correctly reports Node's version;
6. initialize a Node.js project with `npm init -y`;
7. run `npm install node-mdaemon-api`

## HOW TO USE

Minimum [ECMASCript](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/)
example:

```javascript
const md = require(`node-mdaemon-api`);

if (md.isReady) {
    console.log('MDaemon ready!');
} else {
    console.error('MDaemon not available.');
}
```

Minimum [TypeScript](https://www.typescriptlang.org/docs/) example:

```typescript
import { readDomains } from 'node-mdaemon-api';

export class DomainService {
 
    public async domains(): Promise<string[]> {
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

}
```

## LEGAL DISCLAIMER

MDaemon® is a trademark of MDaemon Technologies, Ltd. MDaemon
Technologies makes no representations, endorsements, or warranties
regarding Third Party Products or Services.
