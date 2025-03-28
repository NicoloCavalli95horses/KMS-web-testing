---
ID: 2025-03-17-10:00
tags:
  - "#definition"
  - clientStorage
---
## Definition

HTML5's IndexedDB is a client side database integrated into the client’s web browser. The application uses local data stored on a client system.
- It ==caches large data== (images, video, text) from server to client side using JavaScript Object Stores, equivalent to tables in relational databases 
- An application stores JavaScript objects into IndexedDB when the application is connected to the Internet. When the connection terminates the application can still fetch data from the local IndexedDB and ==the application may run offline==

## How data are stored

Unlike other web-based databases such as SQL databases that use tables for storing data, IndexedDB uses **object stores**. 

Multiple object stores use a single database. Keys are assigned to every value in an object store within a database, with keys being assigned by key path or by a key generator.
## Benefits of client side storage

From [[(Kimak, Ellman, et al., 2012)]], [[(Kimak, Ellman, et al., 2015)]]:
- **connectivity failure**: the application can be used even when connection is not available
- **less bandwidth usage**: as data is stored on client side and the data is transferred only when the web application requires it
- **speed up application load time**: data can be periodically saved to the browser while the client completes it. The information can be transmitted to the server only after the data has been processed
- **mobile-friendly approach**: mobile devices may suffer from weak signal more than desktop devices, which are likely to be used in the same place often
- **desktop-like experience**: local storage provides functionality similar to that of desktop applications, where application state is persistent

## Risks of client side storage

From [[(Kimak, Ellman, et al., 2012)]]:
- if an application is vulnerable to [[XSS (cross site scripting)]], then an attacker could steal data from the IndexedDB
- The ==data stored in IndexedDB is not using any kind of client input validation==, which may be why possible flaws exist. This means that any site can store potentially dangerous JavaScript code into client local machine

From [[(Kimak, Ellman, et al., 2015)]]:
- standard forensic tools may be used to identify data stored, and then deleted from IndexedDB
- data stored on the client file system is unencrypted


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
- [[(Kimak, Ellman, et al., 2015)]]
