+++
title = "Early abort the script if"
sort_by = "weight"
weight = 100
+++

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
