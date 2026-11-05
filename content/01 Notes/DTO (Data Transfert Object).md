---
ID: "2026-11-05-11:20"
tags:
  - "#definition"
---
**DTO (Data Transfer Object)** is an object whose sole purpose is to define the form of data traveling between client and server (request/response). It contains no business logic and does not necessarily coincide with the database entity. It serves to:
- expose only the desired fields (e.g., hide internal or sensitive fields);
- decouple the API from the DB schema;
- document/validate data (here with Swagger).

**Examples**
- Defines `AssociationDTO` with three fields: `name`, `members` (list of `Members`), and `size`
- The constructor receives `name` and `members` and **automatically calculates `size` as `members.length`. Therefore, `size` is a derived data item, which likely does not exist in the entity.
- The `@ApiProperty` decorators in `@nestjs/swagger` describe each field (description, example, type) in the generated OpenAPI/Swagger documentation.

In practice, the service/controller loads an `Association` from the DB and converts it to an `AssociationDTO` before returning it, so the API response has the desired form and fields (including `size`).