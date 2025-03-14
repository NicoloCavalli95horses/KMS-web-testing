---
ID: 2025-03-14T15:39:10.776Z
tags:
  - paper
  - memoryForensics
  - digitalForensics
  - privateBrowsing
  - IndexedDB
  - clientStorageAttack
Project:
  - SLR
---
## Context

This paper shows how to ==decrypt client-side storages==, specifically [[IndexedDB]] storage on Gecko-based browsers’ private mode, ==by extracting cipherkeys== in memory.
- Experimental results indicate that when private session is running, our proof-of-concept tool successfully decrypts all encrypted files
- Additionally, there is a possibility of ==recovering data even in an inactive state (with the computer turned off)== by utilizing *hibernation file* on disk

## Approach



---
#### References
- [[(Kim, Lee, et al., 2024)]]
