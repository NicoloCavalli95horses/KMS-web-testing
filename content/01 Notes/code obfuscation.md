---
ID: 2025-01-31-15:45
tags:
  - "#definition"
  - softwareEngineering
---
## Definition

In software development, obfuscation is the practice of creating source or machine code that is intentionally difficult for humans or computers to understand.

Similar to obfuscation in natural language, code obfuscation may involve using unnecessarily roundabout ways to write statements. Programmers often obfuscate code ==to conceal its purpose, logic, or embedded values. ==

The primary reasons for doing so are to prevent tampering[^1] , deter reverse engineering, or to create a puzzle or recreational challenge to deobfuscate the code.

While obfuscation can be done manually, it is more commonly performed using obfuscators.

### Obfuscation techniques

**Control obfuscation**
This class of techniques aims at obscuring the control flow of the source with:
- inserting dead code
- reordering statements
- unrolling loops
- cloning methods

**Data obfuscation**
This class of techniques aims at obscuring the way data is structured with:
- encoding variables
- splitting or merging variables
- restructuring arrays

**Layout obfuscation**
This class of techniques aims at obscuring the way data is presented with:
- renaming identifiers
- removing white space

### Evaluating code obfuscation

- **Resilience**: how well does the code resist automated deobfuscation attacks?
- **Potency**: to what degree is a human reader confused when he or she tries to decipher the obfuscated source code?
- **Cost**: how much overhead is added to the application as a result of obfuscation (size of source code, execution time etc.)?: 

Even if resilience and potency are vague by definition, because are based on human cognitive abilities, is it possible to give a more formal specification:

- **Resilience**: measured considering the time and resources spent by humans to build a deobfuscator, and the time and resources spent by the deobfuscator to deobfuscate the program

![[deobfuscation_resilience.png]]

- **Potency**: how much the transformation T changes the complexity of program P?
$$
Tpot(P) = C(P')/C(P) - 1
$$

- **Cost**: how much overhead is added to the application as a result of obfuscation (size of source code, execution time etc.)?: 

### Disadvantages of obfuscation

- While obfuscation can make reading, writing, and reverse-engineering a program difficult and time-consuming, it will not necessarily make it impossible
- It adds time and complexity to the build process for the developers
- It can make debugging issues after the software has been obfuscated extremely difficult
- Once code is no longer maintained, hobbyists may want to maintain the program, add mods, or understand it better. Obfuscation makes it hard for end users to do useful things with the code.
- Certain kinds of obfuscation (i.e. code that isn't just a local binary and downloads mini binaries from a web server as needed) can degrade performance and/or require Internet.

---
#### References
- [[(Rauti, Leppänen, 2018)]]
- https://en.wikipedia.org/wiki/Obfuscation_(software)

[^1]: See [[BFT (business flow tampering)]]