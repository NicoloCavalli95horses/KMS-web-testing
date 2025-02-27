---
ID: 2025-02-27-10:02
tags:
  - "#definition"
  - course
  - parallelComputing
---

**SED: service expérimentation et devéloppement**

Exploit a cluster of computers to performe heavy computational operations

Grid5000
- 2 clusters, 59 nodes
- 2096 CPU cores
- 15.38 TiB RAM
- 91 SSD and 135 HDDs

Abaca
- 75 nodes
- 2252 CPU cores
- 71 GPUs
- 21.56 TiB RAM
- 36 SSDs and 71 HDDs

Arcana: for sensible data

==Remember to reference Abaca if you use it on your paper==

**Step to access a cluster**
- create SSH public key: ssh-keygen -t rsa
- access to Grid5000: ssh nicolo.cavalli@inria.fr.grid5000.fr
- grid5000 login is not the INRIA logic
- you will receive a confirmation email

You can access different clusters in France (Lyon, Rennes, Grenoble, Nantes)

![[grid5000_locations.png]]

access.grid5000.fr

More info on:
- https://mattermost.inria.fr/landing#/grid5000

Best practice:
- reserve a node to compile your node
- compile on a machine similar to your target machine
- the front should be able to handle small to medium compilations

Apptainer can run docker images, do Docker ins not necessary

If you can, use the modules that are already installed and available, ask support for installing new libraries

Storage limits:
- 25 GB (max 10 millions of files)

Best practices:
- Avoid using many small files
- Avoid reading or writing manu small chinks of data
- Do not create too many entities in the same directory (1.5k file per directory max)
- Define checkpoint/restart, not to repeat calculations that have been done already 

About processing sensitive data:
- public, limited diffusion, confidential, restricted
- use Abaca's **Armored Node** and **CompuVault** to process confidential data

**Monika**: to check if a node is available or not and to see the current jobs

Keep in mind that cluster computing is very expensive in terms of energy consumption

---

### References
- https://www.grid5000.fr/w/Getting_Started 