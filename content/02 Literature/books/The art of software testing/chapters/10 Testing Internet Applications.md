---
ID: 2024-12-30-16:56
tags:
  - testingTechniques
  - softwareEngineering
---
After 2010, the end user expects every business to have a presence online. Websites are part of the new first impression for business.

Depending on the type of website, the testing approach may vary.

Users have high expectations:
- high performance and quick load
- intuitive navigation features
- good design

Challenges in testing web applications:
- **large and varied user base**: users have different skill sets and experience, different browsers, OS, devices, connection speeds
- **business challenges:** for e-commerces, calculating taxes, shipping costs, discounts, completing financial transactions, ...
- **locales**: users may reside in other countries, so language translations, time zone differences and currency conversions are issues to take into consideration
- **security**: each web application is exposed to [[DOS (Denial of Service)]] attacks or other cyber security issues
- **testing environment**: to the most accurate simulation of a real world scenario, one should ideally duplicate the whole network infrastructure 

Three-tier structure:
1. presentation layer ([[GUI (graphical user interface)]])
2. business layer (user authentication, transactions, business actions)
3. data layer (input/output data)

**Presentation layer testing**
- **content testing**: the overall aesthetics, font, colors, spelling, content accuracy, default values must be correct. Inaccurate text content may lead to legal problems
- **website architecture**: there should not be broken links or graphics
- **user environment**: the application should work fine with most browsers, considering old browser versions

**Business layer**
-  **performance**: test to see whether the application meets documented performance specifications (generally specified in response times and throughput rates).
- **data validity**: test to detect errors in data collected from customers.
- **transactions**: test to uncover errors in transaction processing, which may include credit card processing, e-mailing verifications, and calculating sales tax

**Data layer**
Testing the data layer means testing the database management system that the application use to store and retrieve information
