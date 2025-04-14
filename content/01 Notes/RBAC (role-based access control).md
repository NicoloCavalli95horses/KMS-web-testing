---
ID: 2024-12-03-09:08
tags:
  - definition
  - cyberSecurity
  - designPattern
  - RBAC
  - accessControl
---
## Definition

RBAC is a foundational principle in cyber security that helps organizations to manage and control access to their critical resources. It implies ==diversify the access to the resources based on roles and permissions.==

**Mapping users to roles, and roles to permissions**
 At its core, RBAC operates on the principle of assigning permissions to roles, rather than to individual users
 - Users should only have access to the information and the resources necessary for their roles ([[PoLP (principle of least privilege)]])

## Components of RBAC

==Roles==: roles represent different job functions or responsibilities within an organization. These roles are defined based on the tasks and the access requirements of various users.
- For example, in a healthcare setting, roles may include doctors, nurses, administrators or patients. Each role is associated with specific permissions that dictate what actions users in that role can perform.

==Permissions==: permissions define the actions or operations that users are allowed to perform within a system or application. These permissions can include tasks such as read, write, execute, delete and modify. Permissions are assigned to roles based on the access requirements of each role.
- For instance, a doctor role may have permissions to view patient records and prescribe medications, while a nurse role may only have permissions to view patient records and administer medications.

==Users==: users are individuals who are assigned to specific roles within an organization. Each user is associated with *one or more roles based on their job responsibilities*. By assigning users to roles, organizations can effectively manage access to resources and ensure that users only have access to the information and functionalities necessary for their roles.

### How RBAC works

When a user attempts to access a resource or perform a certain action, the system checks their role and determines whether they have the necessary permissions to complete the task. If the user’s role includes the required permissions, access is granted; otherwise, access is denied.
- For example, suppose a nurse attempts to access a patient’s medical records. The system first checks the nurse’s role to see if it includes permissions to view patient records. If the nurse is assigned to a role with the appropriate permissions, such as the “nurse” role, access is granted. However, if the nurse is not assigned to a role with the necessary permissions, access is denied.

Overall, RBAC provides a structured approach to access management, enabling organizations to efficiently manage user permissions and enforce security policies. By implementing RBAC, organizations can reduce the risk of unauthorized access, streamline access management processes and maintain compliance with regulatory requirements.

### Challenges and limitations of RBAC

**Complexity in managing roles**
As organizations grow, the number of roles within the RBAC system can proliferate, leading to increased complexity in role management. With multiple roles to manage, administrators may struggle to accurately define and maintain role definitions, leading to confusion and potential security vulnerabilities.

**Risk of role creep**
Role creep occurs when users are assigned additional permissions beyond their core job responsibilities, leading to an accumulation of unnecessary access rights. This can result in a bloated RBAC system with overly permissive roles, increasing the risk of unauthorized access and insider threats.

**Lack of flexibility**
Difficulty in accommodating dynamic environments: RBAC systems may struggle to adapt to dynamic organizational structures and evolving access requirements. As roles and responsibilities change over time, administrators may find it challenging to update role definitions and permissions accordingly, leading to gaps in [[access control]] and potential security vulnerabilities.

**Potential for over-restriction**
In an effort to enforce strict access controls, RBAC systems may inadvertently over-restrict user access, hindering productivity and business operations. Overly restrictive access policies can lead to frustration among users and may necessitate frequent requests for access modifications, adding to administrative overhead.

**Scalability issues**
- Managing access in large organizations: RBAC systems may encounter scalability issues in large organizations with thousands of users or complex role structures. As the number of users and roles grows, managing access rights and enforcing access policies becomes increasingly challenging, potentially leading to performance degradation & administrative inefficiencies.
- Performance considerations: RBAC systems must strike a balance between robust [[access control]] mechanisms and performance considerations. As [[access control]] policies become more complex and granular, there is a risk of increased latency and system overhead. 

### Best practices for implementing RBAC

- Clearly identify roles and permissions by conducting a thorough analysis
- Mapping roles to organizational structure or hierarchy, to ensure clarity and consistency
- Regularly review and audit user access rights to ensure compliance
- Identify and remove unused access or unnecessary access rights
- implement automated tools or solutions to improve efficiency and reduce human [[error]]
- integrate RBAC with other security solutions

## Example of a vulnerability

In a web application implementing RBAC principles, URLs would be associated to specific permissions, that determine what resources can be accessed:
- https://app.com/admin/dashboard 
- https://app.com/user-name/profile

URLs should be protected by [[sessions token]] or by other controls executed by the server.

### Bad RBAC implementations

```JavaScript
if ( user.hasRole(ADMIN) || user.hasRole(MANAGER) ) {
  deleteAccount();
}
```

This implementation is not flexible and it is difficult to maintain when new roles need to be created. What if, one day, a new `SUPER_ADMIN` role is needed? You would have to manually insert another condition in all the if statements that are affected.

Using a centralized system with granular permissions is much more easy to maintain:

```JavaScript
if (user.hasPermission(DELETE_ACCOUNT) ) {
  deleteAccount();
}
```


---
## References
- RBAC exploitation, review in [[(Onukrane, Skrodelis, et al., 2023)]]
- https://www.neumetric.com/role-based-access-control-rbac-for-cybersecurity/
- https://top10proactive.owasp.org/archive/2024/the-top-10/c1-accesscontrol/#5-principle-of-least-privilege-just-in-time-jit-just-enough-access-jea