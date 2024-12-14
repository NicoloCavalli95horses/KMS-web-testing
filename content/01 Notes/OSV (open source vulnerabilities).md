| ID       | 2024-12-05-10:56  |
| -------- | ----------------- |
| **Tags** | #definition #tool |
## What is OSV?

OSV consists of:

- The OSV Schema: An easy-to-use data format that maps precisely to open source versioning schemes
- Reference infrastructure (OSV.dev website, API, and tooling) that aggregates, enriches and indexes vulnerability data from databases that use the OSV schema.
- OSV-Scanner, the officially supported frontend for OSV.dev

We created OSV to address many of the shortcomings of dealing with vulnerabilities in open source software using existing solutions.

## Why a new format to describe vulnerability?

We found that there was no existing standard format which:
- Enforces version specification that precisely matches naming and versioning schemes used in actual open source package ecosystems. For instance, matching a vulnerability such as a CVE to a package name and set of versions in a package manager is difficult to do in an automated way using existing mechanisms such as CPEs.
- Can be used to describe vulnerabilities in any open source ecosystem, while not requiring ecosystem-dependent logic to process them.
- Is easy to use by both automated systems and humans.

A unified format means that vulnerability databases, open source users, and security researchers can easily share tooling and consume vulnerabilities across all of open source. This means a more complete view of vulnerabilities in open source for everyone, as well as faster detection and remediation times resulting from easier automation.

## Who is using the OSV schema?

The benefits of the OSV schema have led to adoption by several vulnerability databases, including GitHub Security Advisories, PyPA, RustSec, and many more. The full list of databases can be found here.

## Usage

OSV.dev provides an easy-to-use API for querying against the aggregated database of vulnerabilities.

Command line tooling is also available for vulnerability scanning of SBOMs, language manifests, and container images.

There are numerous third-party integrations with the API, and we have stopped maintaining an exhaustive list. You can try this GitHub search as a starting point.

## References
https://google.github.io/osv.dev/