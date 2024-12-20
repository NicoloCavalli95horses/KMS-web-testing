
| ID       | 2024-07-27-17:11 |
| -------- | ---------------- |
| **Tags** | #principle       |
## Main concepts

AIFs are very common functionalities shared between the majority of the application.

Examples of AIFs are, for example:
- The authentication process, composed of the sign in, sing up, and sign out operations
- Creating, reading, updating and deleting information ([[CRUD (Create, Read, Update, Delete) operations]])
- Saving the work on a file and then reloading it
- Searching and then booking a certain service (car, hotel, flight),
- Handling an e-commerce cart, etc.

Despite their diffusion, AIFs can easily include faults, even in extremely popular applications, and thus require careful testing. For instance, faults impacting an extensive number of users have been reported for CRUD operations in Jenkins and for authentication operations in Dropbox.

The general idea that functionalities recur in a similar way in the GUI of different applications has been already investigates in the field of UI design. 

Even if the concept of UI design pattern is not exactly the same of AIF, many UI design patterns turn out to be also AIFs. 
## References
[[ref_augusto_exploiting_popular_functionalities_generation_semantic_gui_test]]

