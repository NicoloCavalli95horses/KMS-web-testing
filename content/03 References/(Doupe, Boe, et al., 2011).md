---
ID: 2025-04-17T07:01:10.928Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/2046707.2046736

## BibTeX

@inproceedings{10.1145/2046707.2046736, author = {Doupe, Adam and Boe, Bryce and Kruegel, Christopher and Vigna, Giovanni}, title = {Fear the EAR: discovering and mitigating execution after redirect vulnerabilities}, year = {2011}, isbn = {9781450309486}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/2046707.2046736}, doi = {10.1145/2046707.2046736}, abstract = {The complexity of modern web applications makes it difficult for developers to fully understand the security implications of their code. Attackers exploit the resulting security vulnerabilities to gain unauthorized access to the web application environment. Previous research into web application vulnerabilities has mostly focused on input validation flaws, such as cross site scripting and SQL injection, while logic flaws have received comparably less attention. In this paper, we present a comprehensive study of a relatively unknown logic flaw in web applications, which we call Execution After Redirect, or EAR. A web application developer can introduce an EAR by calling a redirect method under the assumption that execution will halt. A vulnerability occurs when server-side execution continues after the developer's intended halting point, which can lead to broken/insufficient access controls and information leakage. We start with an analysis of how susceptible applications written in nine web frameworks are to EAR vulnerabilities. We then discuss the results from the EAR challenge contained within the 2010 International Capture the Flag Competition. Finally, we present an open-source, white-box, [[static analysis]] tool to detect EARs in Ruby on Rails web applications. This tool found 3,944 EAR instances in 18,127 open-source applications. Finally, we describe an approach to prevent EARs in web frameworks.}, booktitle = {Proceedings of the 18th ACM Conference on Computer and Communications Security}, pages = {251–262}, numpages = {12}, keywords = {execution after redirect, [[static analysis]], web applications}, location = {Chicago, Illinois, USA}, series = {CCS '11} }
