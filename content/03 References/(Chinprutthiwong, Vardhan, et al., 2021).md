---
ID: 2025-04-10T07:33:35.647Z
tags: ref

Project:
 - SLR
---
## External Link

https://dl.acm.org/doi/10.1145/3471621.3471845

## BibTeX

@inproceedings{10.1145/3471621.3471845, author = {Chinprutthiwong, Phakpoom and Vardhan, Raj and Yang, GuangLiang and Zhang, Yangyong and Gu, Guofei}, title = {The Service Worker Hiding in Your Browser: The Next Web Attack Target?}, year = {2021}, isbn = {9781450390583}, publisher = {Association for Computing Machinery}, address = {New York, NY, USA}, url = {https://doi.org/10.1145/3471621.3471845}, doi = {10.1145/3471621.3471845}, abstract = {In recent years, service workers are gaining attention from both web developers and attackers due to the unique features they provide. Recent findings have shown that an attacker can register a malicious service worker to take advantage of the victim such as by turning the victim’s device into a crypto-currency miner. However, the possibility of benign service workers being leveraged is not well studied. To bridge this gap, we systematically analyze the security of service workers from a new perspective. Specifically, we consider how an attacker can leverage a benign service worker installed in popular websites. To this end, we uncover two attack channels – [[IndexedDB]] and Push notification. Through [[IndexedDB]], an attacker can compromise a benign service worker and persistently control the vulnerable website. Likewise, push subscription can also be easily hijacked and used to track a user’s location. To understand the prevalence and security impacts of these attack channels, we conduct a measurement study on popular websites that deploy a service worker. Our results show 200 websites that are vulnerable to XSS attacks are also susceptible to push hijacking. We estimate the number of potential victims, who visit these susceptible websites and could be exposed to location tracking, to be up to 1.75 million users per month. Finally, we discuss potential defenses to prevent this problem from growing further.}, booktitle = {Proceedings of the 24th International Symposium on Research in Attacks, Intrusions and Defenses}, pages = {312–323}, numpages = {12}, keywords = {service worker, push notification, [[IndexedDB]]}, location = {San Sebastian, Spain}, series = {RAID '21} }
