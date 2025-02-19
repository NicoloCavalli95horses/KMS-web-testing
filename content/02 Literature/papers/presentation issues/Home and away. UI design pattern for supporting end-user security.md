---
ID: 2025-02-19-11:08
tags:
  - paper
  - cyberSecurity
  - gui
  - hci
  - design
---
## Context

This paper presents a set of patterns for user interface designers to
help users better protect themselves from cyberattacks. The basic idea is to ==create and support mental models of cyber security that resembles the way people manage security in the physical world.==


> [!summary]
> When it comes to security, existing software interfaces do not adequately support the kinds of behavior people already use in the physical world.
> - People possess established mental models related to maintaining security, which ==software could anticipate and support==
> - The working mechanisms of software security are mostly ==invisible==. This ==hinder the development of useful  software mental models==

## Approach

Qualitative description of visual design patterns based on cognitive science literature and on the result of a focus group:
- [[mental models]] are described as internal models of the external world
- Their crucial feature is that they mimic the causal structure of some real world entity or process
- Creating the right mental model could improve the attitude of the end-user towards his/her own digital security

## Observations

- when users are in a hurry, or under stress, they focus on the primary task[^1], and the secondary tasks[^2] can suffer
- the ==more attention and effort the secondary tasks demand, the more likely users will find it unacceptable==. For example, they resist creating strong passwords that are difficult to remember, will avoid two-factor authentication, not check web security certificates
- cognitive load should be adequate, information should be limited, and choices offered should be simple and actionable

### UI design pattern for cyber security

**Disengagement aids**
When a user disengages from a service, help them check things are secure. In particular, ==provide users with the information needed to determine that the service is being left in a secure state==, and provide them recommendations for improvements
- show aids to remember to log-out after inactivity or after completing a task that exposed sensitive information
- show a summary of the privacy settings
- in content-creation scenarios, use pop-ups to ask the user if the content that has been created contains sensitive data
- at the end of a session, show a recap of the changes made to the state of the system, with undo options. This would improve the user memory
- show a redirect page that confirm the logout after critical operation (e.g., payments)

**Return inspection**
When a user returns to a website, help them check what happened while they were away, because ==the memory of the last interaction with the software may be poor==
- provide a summary of all last activities, starting from the most recent
- show the last successful and unsuccessful login time

**Avoid being a target**
Help users minimize their attractiveness to attackers
- suggest 2FA enabling
- suggest security updates
- suggest firewall policies

**Stay in touch**
Alert users of suspicious activity while they are away, and help them take action to secure their services. Provide users with a conspicuous alert of any suspicious activity taking place on their accounts while they are away
- power off a device while the user is away if suspicious activity is detected

**Prepare for the worst**
Help users save state elsewhere and provide advice to aid recovery after a successful attack.
- suggest backup systems and recovery options

### Conclusions

- security information is largely hidden from UIs. This information may be buried in menus, may require the use of arcane tools to find, or may not be available for anyone
- The low visibility of security information is a missed opportunity for educating users about security, better preparing them to protect themselves

---
#### References
- [[(Spero, Biddle, 2020)]]

[^1]: **Primary task**: the main goal the user are trying to achieve. E.g., complete an order, validate a payment, watch a video, etc.

[^2]: **Secondary task**: a task which is related to the primary but stays in the background. E.g., creating a safe password, accepting cookies, etc.
