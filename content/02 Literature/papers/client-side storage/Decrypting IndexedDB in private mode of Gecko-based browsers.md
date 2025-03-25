---
ID: 2025-03-14T15:39:10.776Z
tags:
  - paper
  - IndexedDB
  - clientStorageAttack
  - forensic
  - projectSLR
Project:
  - SLR
---
## Context

This paper shows how to ==decrypt client-side storages==, specifically [[IndexedDB]] storage on Gecko-based browsers’ private mode, ==by extracting cipherkeys== in memory.
- Experimental results indicate that when private session is running, our proof-of-concept tool successfully decrypts all encrypted files
- Additionally, there is a possibility of ==recovering data even in an inactive state (with the computer turned off)== by utilizing *hibernation file* on disk
## Approach

- **Identification of candidate CipherKeys** inside physical memory-related data using [[RegEx (Regular Expression)]]. This is possible because physical memory and related data contains fixed pattern
- **Extraction of a valid CipherKey by** [[brute forcing]]. Bruteforcing is performed on encrypted file to find a key that does not result in a MAC authentication error during AEAD decryption
- **Decryption of IndexedDB data**: if a key is found that does not result in a MAC authentication error, that key is considered the correct cipherkey for the file. Subsequently, the AEAD algorithm is applied page-by-page to decrypt the encrypted file using the identified cipherkey
to r
In the case in which PC is shut down, it is not possible to acquire physical memory directly. Therefore, candidate cipherkeys are found in memory-related data such as Hiberfil.sys, Pagefile.sys, Swapfile.sys or in disk’s unallocated area


> [!WARNING] Not possible to reconstruct the original decrypted file
> Currently, attempting decryption at the extracted page level is possible, but to reconstruct the original encrypted DB file, one would need to explore various combinations. Therefore, the carving algorithm for entire DB and BLOB files are not completed

A proof-of-concept tool was developed to test the algorithm in real-case scenario:
- Test results show that if a PC with an active private session of Gecko-based browsers can be acquired, it is possible to decrypt 100% of the encrypted data related to IndexedDB

---
#### References
- [[(Kim, Lee, et al., 2024)]]
