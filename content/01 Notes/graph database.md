---
ID: 2025-04-30-15:46
tags:
  - "#definition"
  - graphModel
  - graphDatabase
---
## Definition

A graph data model structures data into interconnected objects that form a graph. It is useful:
- for highly interconnected data
- particularly popular in online social networks

Two entities of a graph data model:
- **objects**: nodes that have a unique identifier (ID) and a type (OTYPE)
- **associations**: edges, have a source object (ID1), a destination object (ID2) and a type (ATYPE)

**Attributed graph**
In an attributed graph, both objects and associations may have properties, expresses as key-value pairs

**Operations over graph database**
- retrieval of objects and associations
- creation of objects and associations
- deletion of objects and associations
- mutation of objects and associations

### Example

In a social media, objects or nodes can be represented by users, business, groups or photos, while associations may represents friendships, follower-follower relationships or "like" relationships

---
#### References
- Invariant detector finder over graph database, by [[(Marinescu, Parry, et al., 2017)]], Facebook