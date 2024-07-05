+++
title = "ECMAScript"
sort_by = "weight"
weight = 200
+++
# ECMAScript

## CommonJS

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

## ESM

If you set your `package.json`'s `type` to `module`, Node.js can use ESM
modules, but `import` can [**not** import native
modules](https://nodejs.org/dist/latest-v14.x/docs/api/esm.html#esm_no_native_module_loading)
as `node-mdaemon-api`.

```json
{
    //...
    "type": "module",
    //...
}
```


You will need to explicitly create the `require` function to load
`node-mdaemon-api`.

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
