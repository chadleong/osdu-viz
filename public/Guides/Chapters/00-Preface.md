<a name="TOC"></a> [Schema Usage Guide Table of Contents](../README.md)

[[_TOC_]]

# 0 Preface

## 0.1 Copyright Notice

Copyright © 2022, The Open Group

The Open Group hereby authorizes you to use this document for any purpose, PROVIDED THAT any copy of this document, or
any part thereof, which you make shall retain all copyright and other proprietary notices contained herein.

This document may contain other proprietary notices and copyright information.

Nothing contained herein shall be construed as conferring by implication, estoppel, or otherwise any license or right
under any patent or trademark of The Open Group or any third party. Except as expressly provided above, nothing
contained herein shall be construed as conferring any license or right under any copyright of The Open Group.

Note that any product, process, or technology in this document may be the subject of other intellectual property rights
reserved by The Open Group, and may not be licensed hereunder.

This document is provided “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED
TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. Some jurisdictions
do not allow the exclusion of implied warranties, so the above exclusion may not apply to you.

Any publication of The Open Group may include technical inaccuracies or typographical errors. Changes may be
periodically made to these publications; these changes will be incorporated in new editions of these publications. The
Open Group may make improvements and/or changes in the products and/or the programs described in these publications at
any time without notice.

Should any viewer of this document respond with information including feedback data, such as questions, comments,
suggestions, or the like regarding the content of this document, such information shall be deemed to be non-confidential
and The Open Group shall have no obligation of any kind with respect to such information and shall be free to reproduce,
use, disclose, and distribute the information to others without limitation. Further, The Open Group shall be free to use
any ideas, concepts, know-how, or techniques contained in such information for any purpose whatsoever including but not
limited to developing, manufacturing, and marketing products incorporating such information.

If you did not obtain this copy through The Open Group, it may not be the latest version. For your convenience, the
latest version of this publication may be downloaded at www.opengroup.org/library.

Published by The Open Group, January 2022. Comments relating to the material contained in this document may be submitted
to:
> The Open Group, Apex Plaza, Forbury Road, Reading, Berkshire, RG1 1AX, United Kingdom

or by electronic mail to:
> ogspecs@opengroup.org

## 0.2 The Open Group

The Open Group is a global consortium that enables the achievement of business objectives through technology standards.
Our diverse membership of more than 700 organizations includes customers, systems and solutions suppliers, tools
vendors, integrators, academics, and consultants across multiple industries.

The mission of The Open Group is to drive the creation of Boundaryless Information Flow™ achieved by:

* Working with customers to capture, understand, and address current and emerging requirements, establish policies, and
  share best practices
* Working with suppliers, consortia, and standards bodies to develop consensus and facilitate interoperability, to
  evolve and integrate specifications and open source technologies
* Offering a comprehensive set of services to enhance the operational efficiency of consortia
* Developing and operating the industry’s premier certification service and encouraging procurement of certified
  products

Further information on The Open Group is available at www.opengroup.org.

The Open Group publishes a wide range of technical documentation, most of which is focused on development of Standards
and Guides, but which also includes white papers, technical studies, certification and testing documentation, and
business titles. Full details and a catalog are available at www.opengroup.org/library.

## 0.3 This Document

This document is _The Open Group Guide to OSDU Schema Usage_. It has been developed by The Open Group. The collocation 
with the schema repository attempts to create a tight connection to schema resources and examples, which are validated 
against the schemas to provide up-to-date, as correct as possible information.

This guide is intended to clarify certain complexities within the OSDU data definition framework. It will help data
modelers, data loaders, and application developers to understand the intention behind some of the schema design choices
and avoid misusing the schema.

## 0.4 Trademarks

ArchiMate®, DirecNet®, Making Standards Work®, Open O® logo, Open O and Check® Certification logo, OpenPegasus®,
Platform 3.0®, The Open Group®, TOGAF®, UNIX®, UNIXWARE®, and the Open Brand X® logo are registered trademarks and Agile
Architecture Framework™, Boundaryless Information Flow™, Build with Integrity Buy with Confidence™, Dependability
Through Assuredness™, Digital Practitioner Body of Knowledge™, DPBoK™, EMMM™, FACE™, the FACE™ logo, FBP™, FHIM Profile
Builder™, the FHIM logo, IT4IT™, the IT4IT™ logo, O-AAF™, O-DEF™, O-HERA™, O-PAS™, Open FAIR™, Open Platform 3.0™, Open
Process Automation™, Open Subsurface Data Universe™, Open Trusted Technology Provider™, O-SDU™, OSDU™, Sensor
Integration Simplified™, SOSA™, and the SOSA™ logo are trademarks of The Open Group. Microsoft® is a registered
trademark of Microsoft Corporation in the United States and/or other countries.

All other brands, company, and product names are used for identification purposes only and may be trademarks that are
the sole property of their respective owners.

---
## 0.5 Instructions to Editors

The creation of the Usage Guide must follow some rules, which are hopefully fairly intuitive. the final preparation of
the Usage Guide is assisted by the script `Scripts/UserGuide.py`. After editing the markdown files, the script should 
be run to ensure updated chapter numbering, etc.

### 0.5.1 Chapters

Chapters are represented by mark-down files (extension `.md`). The chapter number is encoded in the filename in the 
following format:

> `{##}-ChapterNameHint.md` where `{##}` is the chapter number with leading zeroes.  

In the project view, the chapters will appear ordered as in the Usage Guide. The chapter number of the file will 
override any chapter numbers inside the markdown file. The `Scripts/UserGuide.py` will update the numbers as well as 
any internal links. 

#### 0.5.1.1 Chapter Header

Each chapter should begin with:

> ```markdown
> <a name="TOC"></a> [Schema Usage Guide Table of Contents](../README.md)
>
>[[_TOC_]]
>
>### {##} {{Chapter Title}}
>```

If the anchor `<a name="TOC"></a>` is missing the anchor and the `[[_TOC_]]` will be added. 

**_Important:_** Initially, replace `{##}`with the chapter number from the mark-down file and `{{Chapter Title}}`. The
latter can differ from the chapter file name. The link after the TOC anchor will be updated by
the `Scripts/UserGuide.py`, linking to the previous chapter.

#### 0.5.1.2 Chapter Footers

Each chapter should end with a second level header `## Links` and the following lines (if not, the fragment will be
added):

>```markdown
>## Links
>
>1. Return to the [Beginning of the Chapter](#TOC)
>2. Next Chapter: [1 Introduction](01-Introduction.md)
>3. Browse to the [Schema Usage Guide Table of Contents](../README.md)
>```

#### 0.5.1.3 Chapter References

Markdown hyperlinks are formatted like:

> `[Text](chapter-file-path.md#chapter-anchor)` for chapter references across files<br>
> `[Text](#chapter-anchor)` for chapter references within the same chapter file

The chapter anchor value is constructed from the chapter paragraph heading, examples:

> Heading `#### 4.2.1.2 Coordinate Reference System (CRS)` &rarr; anchor: `4212-coordinate-reference-system-crs`

When setting up the link for the first time, the anchor needs to be formatted correctly. After the initial set-up the 
`Scripts/UserGuide.py` swaps the anchors accordingly if the chapter numbers change.

### 0.5.2 Table of Contents Generation

`Scripts/UserGuide.py` automatically generates the [table of contents](../README.md) from the chapter headers. Do not
edit the generated README.md file.

### 0.5.3 Internal Chapter Reference Validation

The hybrid manual/automatic chapter referencing is fragile. To avoid broken links from being published, the 
`Scripts/UserGuide.py` performs a validation and reports broken links. This validation extends to **_all_** mark-down 
documents in the entire schema repository. It is strongly recommended checking and correcting the reported
anomalies.

## 0.6 Migration Guides

Migration Guides are organized by OSDU platform milestones.

* Each milestone gets its own folder in the [Migration Guides folder](../MigrationGuides).
* Each folder contains a `README.md` file linking to each individual schema, which has been changed.
* Each superseded schema version, e.g.,
  [SeismicAcquisitionSurvey.1.1.0](../MigrationGuides/M12/SeismicAcquisitionSurvey.1.1.0.md) contains the instructions
  for the migration to the next version. <br>
  The actual next version is determined in the header of the migration guide - with the example above:
> ```markdown
> # Migration to `osdu:wks:master-data--SeismicAcquisitionSurvey:1.2.0`
> ```


---

## Links

1. Return to the [Beginning of the Chapter](#TOC)
2. Next Chapter: [1 Introduction](01-Introduction.md)
3. Browse to the [Schema Usage Guide Table of Contents](../README.md)

---
