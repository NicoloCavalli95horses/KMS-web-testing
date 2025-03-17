---
ID: "2025-03-17-10:00"
tags:
  - "#definition"
---
## Definition

Low-level definition and explanation of the concept


## Benefits of client side storage

From [[(Kimak, Ellman, et al., 2012)]]:
- **connectivity failure**: the application can be used even when connection is not available
- **less bandwidth usage**: as data is stored on client side and the data is transferred only when the web application requires it
- **speed up application load time**: data can be periodically saved to the browser while the client completes it. The information can be transmitted to the server only after the data has been processed

## How IndexedDB saves files on the disk (for Gecko-based browsers)

- When accessing a web service that uses IndexedDB in Firefox’s private mode, a new “private” folder is initially created in the Firefox storage path
- Inside this folder, a unique 32 bytes UUID is assigned for each web service and used as the folder name. The web application's data are stored here
- Various classes of the [[Gecko engine]] are used to manage an IndexedDB in Firefox.
	- *IndexedDatabaseManager*: reference objects
	- *DatabaseFileManages*:  contains sensitive information such as DB name, DB path, and whether it was created during private mode
	- *CipherKeyManager*: generate a unique 32 bytes cipherkey for each file, with random values
- The AEAD algorithm (ChaCha20-Poly1305) is applied to encrypt files on the disk using the randomly generated cipherkey and initial vector
- When accessing the same origin’s IndexedDB data during the same private session after the initial encryption and storage on disk, Firefox utilizes the cipherkey of the corresponding file managed in memory to decrypt the IndexedDB data on disk
- When private mode ends, the “private” folder path where the IndexedDB data were stored is deleted

---
#### References
- [[(Kimak, Ellman, et al., 2012)]]
- [[(Kim, Lee, et al., 2024)]]
