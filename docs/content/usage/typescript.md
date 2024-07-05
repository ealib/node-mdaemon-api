+++
title = "Typescript"
sort_by = "weight"
weight = 300
+++
# TypeScript

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

