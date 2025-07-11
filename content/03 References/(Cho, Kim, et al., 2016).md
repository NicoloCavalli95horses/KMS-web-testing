---
ID: 2025-03-28T08:26:34.005Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2987386.2987432

## BibTeX

@inproceedings{10.1145/2987386.2987432, author = {Cho, Sangwook and Kim, Gyoosik and Cho, Seong-je and Choi, Jongmoo and Park, Minkyu and Han, Sangchul}, title = {Runtime Input Validation for Java Web Applications using Static Bytecode [[code instrumentation]]}, year = {2016}, isbn = {9781450344555}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2987386.2987432}, doi = {10.1145/2987386.2987432}, abstract = {As web applications is becoming more prominent due to the ubiquity of web services, web applications have become main targets for attackers. In order to steal or leak sensitive user data managed by web applications, attackers exploit a wide range of input validation vulnerabilities such as SQL injection, path traversal (or directory traversal), cross-site scripting (XSS), etc. This paper propose a technique that can verify input values of Java-based web applications using static bytecode [[code instrumentation]] and runtime input validation. The technique searches for target methods or object constructors in compiled Java class files, and statically inserts bytecode modules. At runtime, the instrumented bytecode modules validate input values of the targets, and take countermeasure against malicious inputs. The proposed technique can mitigate the input validation vulnerabilities in Java-based web applications without source codes. To evaluate the effectiveness of the proposed technique, experiments are carried out with an insecure web application maintained by OWASP WebGoat Project. The experimental results show that the proposed technique successfully mitigates input validation vulnerabilities such as SQL injection and path traversal.}, booktitle = {Proceedings of the International Conference on Research in Adaptive and Convergent Systems}, pages = {148–152}, numpages = {5}, keywords = {path traversal, input validation, bytecode [[code instrumentation]], SQL injection, Java web application}, location = {Odense, Denmark}, series = {RACS '16} }
