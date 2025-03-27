---
ID: 2025-03-27-15:08
tags:
  - "#definition"
  - objectStorage
  - cloudSecurity
  - cloudComputing
---
## Definition

Object storage (or blob storage) is a computer data storage approach that ==manages data as "blobs" or "objects"==. It is opposed to other storage architectures like:
- file systems, which manage data as a file hierarchy
- block storage, which manages data as blocks within sectors and tracks

Each object is typically associated with a variable amount of metadata, and a globally unique identifier. 

Object storage systems allow ==retention of massive amounts of unstructured data== in which data is written once and read once or many times. Object storage is used for purposes such as storing objects like:
- videos and photos on Facebook
- songs on Spotify
- files in online collaboration services, such as Dropbox

### Object storage composition

- ID: a unique key identify the object
- Data: the data content of the object, in blob format
- Metadata: attribute and extra information (file type, size, date, etc)
### Example

- Google Cloud
- AWS S3

Google Drive is not technically a cloud object storage service, because it is oriented towards personal use and collaboration, with a file system-like interface (folders, sharing, synchronization), but internally it may use an architecture similar to object storage for file management.
- However, it does not provide the same APIs, scalability, and functionality as true object storage

---
#### References
- [[(Lv, Shi, et al., 2023)]]