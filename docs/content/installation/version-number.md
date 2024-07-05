+++
title = "Version number"
sort_by = "weight"
weight = 200
+++
# Version number

Due to the nature of the MDaemon SDK, which is per-version with breaking
changes possibly happening whenever the first figure (major) and/or the
second figure (minor) in the version number change, this package follows
strictly the *Major.minor* version numbering of MDaemon.

For this reason, a module property `versionsMatch` is available. It
holds `true` if module's *major* **and** *minor* version numbers match
MDaemon's. Please, **early abort** a script based on `node-mdaemon-api`,
if `versionsMatch` does *not* hold.
