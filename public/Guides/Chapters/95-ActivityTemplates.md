<a name="TOC"></a> Previous Chapter: [Appendix E Known Issues](94-KnownIssues.md)

[[_TOC_]]

# Appendix F Activity Templates

An **ActivityTemplate** is an OSDU `master-data` record that defines the expected inputs and outputs of a computational
workflow - for example, a volume-of-shale calculation, a seismic surface generation, or a reservoir simulation run.
Each parameter in the template has a name (`Title`), a kind (DataObject, String, Double, Boolean, …), direction
(input / output), occurrence bounds, and optionally a unit quantity or PWLS property type.

An **Activity** is the corresponding `work-product-component` record that holds the actual parameter values produced
when the workflow ran - linking back to the template via its `ActivityTemplateID` field (a recommended field). The two record types together
capture the full provenance chain: _what the workflow expected_ and _what was actually passed_.

For background on the OSDU Activity / ActivityTemplate relationship see
[5.4 Activity](05-Provenance.md#54-activity) and the
[Activity / ActivityTemplate illustration](Illustrations/05/OSDUActivityAndActivityTemplate.gif).

The `OsduSchemaComposer.py` application provides an integrated tooling suite accessible from the
**Activity Templates** menu  that automates the proposal, parsing, validation, example generation, and documentation
steps described in this appendix.

```shell
python Scripts/OsduSchemaComposer.py -app
```

> **Note — Command-line prerequisites:** All command-line examples in this appendix assume:
>
> 1. Your working directory is the **project root** (e.g. `C:\data\osdu\members-schema` on Windows, `~/osdu/members-schema` on Mac/Linux), and
> 2. Your virtual environment is **activated**.
>
> *Windows (cmd.exe):*
> ```shell
> cd C:\data\osdu\members-schema
> Scripts\venv\Scripts\activate
> ```
> *Mac / Linux / Git Bash:*
> ```shell
> cd ~/osdu/members-schema
> source Scripts/venv/bin/activate
> ```
> The scripts are located under `Scripts/` and must be referenced by that path when called from the project root.

## Appendix F.1 Creating a Proposal

Select **Activity Templates → Create New Activity Template Proposal…** from the menu bar.

The dialog prompts for:

| Field         | Description                              | Example                       |
|---------------|------------------------------------------|-------------------------------|
| Template Name | Unique name (no spaces; hyphens allowed) | `VolumeOfShaleCalculation-GR` |
| Domain L1     | OSDU Level-1 domain                      | `Subsurface`                  |
| Domain L2     | OSDU Level-2 sub-domain                  | `GeologyPetrophysics`         |
| Namespace     | Schema namespace token                   | `{{NAMESPACE}}`               |
| Source        | Originating body                         | `OSDU Forum`                  |

Clicking **OK** generates a new proposal workbook at:

```
Proposals/activity-templates/<DomainL1>.<DomainL2>/<TemplateName>.1.0.0.xlsx
```

and opens it automatically on Windows. The `Description` field inside the workbook is pre-filled as
`<TemplateName> ActivityTemplate for <DomainL1>.<DomainL2>` — edit it to provide a meaningful description before
saving.

[Back to TOC](#TOC)

---

## Appendix F.2 The Proposal Workbook

The workbook contains three sheets: **Instructions**, **ActivityTemplate**, and **Parameters**.

### Appendix F.2.1 Instructions Sheet

A colour-coded guide to the Parameters sheet column groups, default-value formats, parameter states, and the
Activity Example column. Read this sheet before filling in Parameters for the first time.

### Appendix F.2.2 ActivityTemplate Sheet (Metadata)

Fill in the template-level fields in column B:

| Field                   | Notes                                                                                               |
|-------------------------|-----------------------------------------------------------------------------------------------------|
| Template Name           | Must match the filename stem exactly                                                                |
| Version                 | Semantic version — starts at `1.0.0`                                                                |
| Domain L1               | OSDU Level-1 domain (e.g. `Subsurface`)                                                             |
| Domain L2               | OSDU Level-2 domain (e.g. `GeologyPetrophysics`)                                                    |
| Description             | Human-readable description of what the template does                                                |
| Source                  | Originating body (e.g. `OSDU Forum`)                                                                |
| Namespace               | Leave as `{{NAMESPACE}}` unless you have a specific namespace                                       |
| State                   | Overall approval status: `Pending` (DEVELOPMENT), `Accepted` (PUBLISHED), `Rejected`, or `Deferred` |
| Version Creation Reason | Required for minor/patch versions; leave blank for 1.0.0                                            |

### Appendix F.2.3 Parameters Sheet (Column Reference)

Columns are colour-coded by function. Freeze panes keep columns A–B and the header rows visible while scrolling.

**Blue — Required**

| Column | Name                   | Notes                                                                                     |
|--------|------------------------|-------------------------------------------------------------------------------------------|
| A      | Item #                 | Auto-generated; do not edit                                                               |
| B      | Title                  | Unique parameter name within this template — used as the property key in Activity records |
| C      | Allowed Parameter Kind | Select from dropdown: `DataObject`, `String`, `Double`, `Integer`, `Boolean`, `TimeIndex` |
| D      | Description            | Human-readable description of the parameter                                               |
| E      | Is Input               | `Y` or `N` — a parameter may be both                                                      |
| F      | Is Output              | `Y` or `N` — a parameter may be both                                                      |
| G      | Min Occurs             | Minimum occurrences: `0` (optional) or `1` (required)                                     |
| H      | Max Occurs             | Maximum occurrences: `1` (single), or `-1` (unbounded)                                    |
| V      | State                  | Per-parameter state: `Pending`, `Accepted`, `Rejected` (skipped), or `Deferred`           |

**Yellow — Reference (use one OR the other, not both)**

| Column | Name               | Notes                                                                                                                                                                                             |
|--------|--------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| L      | Unit Quantity      | OSDU UnitQuantity code, e.g. `length`, `pressure`, `dimensionless`. Resolves to MemberUnits in the JSON. Provide a matching unit symbol in column T (Default UoM) when supplying a default value. |
| M      | Property Type Name | PWLS property-type name, e.g. `gamma ray`, `porosity`. Resolved automatically from the manifest.                                                                                                  |
| N      | Property Type ID   | Bare GUID — use only when the name cannot be found in the manifest.                                                                                                                               |

**Orange — Optional Default Values**

Fill the column that matches the parameter's kind; leave the others blank.

| Column | Name                     | Kind                                                                                |
|--------|--------------------------|-------------------------------------------------------------------------------------|
| O      | Default Selection        | Description of the default value selection                                          |
| P      | Default String Parameter | String                                                                              |
| Q      | Default Double           | Double                                                                              |
| R      | Default Integer          | Integer                                                                             |
| S      | Default Boolean          | Boolean (`True` / `False` dropdown)                                                 |
| T      | Default Data Object      | DataObject — full OSDU ID or `EntityType:Identifier` shorthand                      |
| U      | Default Time Index       | TimeIndex                                                                           |
| V      | Default UoM              | Unit symbol for numeric defaults when Unit Quantity is set (e.g. `m`, `ft`, `degC`) |

**Green — Administrative (not written to JSON)**

| Column | Name             | Notes                                                                                                                       |
|--------|------------------|-----------------------------------------------------------------------------------------------------------------------------|
| W      | Comments         | Internal design notes; not written to the JSON record                                                                       |
| X      | State            | _(same as the blue State column above — repeated here for colour-code clarity)_                                             |
| Y      | Activity Example | Example value for the auto-generated Activity worked-example record. See [F.2.4](#appendix-f24-the-activity-example-column) |

### Appendix F.2.4 The Activity Example Column

Column Y drives the generated Activity record (see [Appendix F.4](#appendix-f4-what-gets-generated)) — it is **not**
written into the ActivityTemplate JSON, rather it is written into the example Activity. Provide realistic values where possible.

| Parameter Kind   | Format                                        | Example                        |
|------------------|-----------------------------------------------|--------------------------------|
| String           | Value directly                                | `GR`                           |
| Double / Integer | Value directly                                | `3000.0`                       |
| Boolean          | `true` or `false`                             | `true`                         |
| DataObject       | `EntityType:Identifier` (preferred)           | `VshCalculationModel:Linear`   |
| DataObject       | Content-type only (identifier auto-generated) | `master-data--Wellbore`        |
| Multi-occurrence | Pipe-separated, no spaces                     | `Wellbore:wb-1\|Wellbore:wb-2` |

[Back to TOC](#TOC)

---

## Appendix F.3 Parsing the Proposal

Once the workbook is saved, select **Activity Templates → Parse Proposal Workbook…** and choose the `.xlsx` file, or
use the command line from the project root (see prerequisite note at the top of this appendix):

```shell
python Scripts/ActivityTemplateWorkflow.py parse -name VolumeOfShaleCalculation-GR
```

The parser reads every non-`Rejected` parameter row and writes the ActivityTemplate JSON record to:

```
OsduStandardRecords/ActivityTemplates/<DomainL1>.<DomainL2>/<TemplateName>.<major>.<minor>.<patch>.json
```

Parsing is **skipped** (with a message) if:

- the target JSON already exists, _and_
- its modification timestamp is newer than the workbook's — i.e. there are no unsaved changes.

Pass `--force` / select **Force re-parse** in the dialog to override.

### Appendix F.3.1 State Filtering

Template-level `State` (set on the ActivityTemplate sheet) is the OSDU schema-service record state and is
independent of the speculative parsing toggle.

**Template-level State**

| Template State | Behaviour                                                        |
|----------------|------------------------------------------------------------------|
| Accepted       | Parsed — record is approved                                      |
| Pending        | Parsed — record exists but is not yet approved by the OSDU Forum |
| Deferred       | **Skipped** — template is postponed                              |
| Rejected       | **Skipped** — template will not be published                     |

**Parameter-level State** (set per row on the Parameters sheet)

| Parameter State | Speculative mode ON | Speculative mode OFF |
|-----------------|---------------------|----------------------|
| Accepted        | Included            | Included             |
| Pending         | Included            | **Skipped**          |
| Deferred        | **Skipped**         | **Skipped**          |
| Rejected        | **Skipped**         | **Skipped**          |

Parameters whose `Description` begins with `DEPRECATED` are also skipped during Activity example generation.

[Back to TOC](#TOC)

---

## Appendix F.4 What Gets Generated

A single parse operation produces up to four artefacts. All paths are relative to the repository root.

### Appendix F.4.1 ActivityTemplate JSON Record

```
OsduStandardRecords/ActivityTemplates/<DomainL1>.<DomainL2>/<TemplateName>.<version>.json
```

The record `id` follows the pattern:

```
{{NAMESPACE}}:master-data--ActivityTemplate:<DomainL1>.<DomainL2>--<TemplateName>.<major>.<minor>.<patch>
```

Record variables use double curly-bracket placeholders (`{{NAMESPACE}}`, `{{LEGAL_TAG}}`, etc.) consistent with the
OSDU manifest convention.

### Appendix F.4.2 Activity Worked Example

```
Examples/WorkedExamples/OsduStandardActivityExamples/<TemplateName>_Example.json
```

One canonical Activity example is maintained per template name (not per version). When a template is updated the
example file is regenerated in place and its `ActivityTemplateID` updated to the current version. The `meta[]` array
is populated with UoM context blocks keyed by parameter Title, resolved from the `UnitQuantityID` fields via the
OSDU manifest.

### Appendix F.4.3 Mermaid Diagram

```
OsduStandardRecords/ActivityTemplates/_diagrams/<DomainL1>.<DomainL2>/<TemplateName>.<version>.mmd
```

A Mermaid `graph LR` diagram showing inputs on the left, the Activity Template node in the centre, and outputs on the
right. Node shapes and colours indicate parameter kind (DataObject = cylinder, Boolean = double-bracket, etc.).

### Appendix F.4.4 Markdown Documentation

```
OsduStandardRecords/ActivityTemplates/<DomainL1>.<DomainL2>/<TemplateName>.<version>.md
```

A per-template reference page containing the Mermaid diagram, the input and output parameter tables (with approval
status footnotes), versioning guidelines, and the worked-example format note. These pages are linked from the
`WorkedExamples/Activity/README.md` catalogue.

[Back to TOC](#TOC)

---

## Appendix F.5 Validating Templates and Activity Examples

Select **Activity Templates → Validate Templates &amp; Examples** to run the full validation suite. This covers:

1. **Schema compliance** — each ActivityTemplate JSON record is validated against the latest
   `Generated/master-data/ActivityTemplate.*.json` schema.
2. **Parameter Title consistency** — every Activity example in `OsduStandardActivityExamples/` is cross-checked
   against its template: each `Title` in the Activity's `Parameters` array must appear in the template.
3. **Undeclared parameter properties** — Activity parameter objects are checked for keys not declared in
   `AbstractActivityParameter`; undeclared keys are reported as warnings.

Validation findings are reported as warnings in the application log; they do not halt parsing.

To validate a single template from the command line:

```shell
python Scripts/ActivityTemplateWorkflow.py validate \
    -json_path "OsduStandardRecords/ActivityTemplates/Subsurface.GeologyPetrophysics/VolumeOfShaleCalculation-GR.1.1.0.json"
```

[Back to TOC](#TOC)

---

## Appendix F.6 Refreshing Documentation

If you edit a JSON record directly (without re-parsing), the Markdown documentation and the `WorkedExamples/Activity/README.md`
catalogue may fall out of date. Select **Activity Templates → Refresh Documentation** to regenerate documentation for
all non-managed templates.

From the command line:

```shell
python Scripts/ActivityTemplateWorkflow.py doc \
    -json_path "OsduStandardRecords/ActivityTemplates/Subsurface.GeologyPetrophysics/VolumeOfShaleCalculation-GR.1.1.0.json"
```

[Back to TOC](#TOC)

---

## Appendix F.7 Converting a JSON Record to a Proposal

To edit an existing ActivityTemplate record using the proposal workflow — for example, to author a new minor version —
select **Activity Templates → Convert JSON Record to Proposal…** and choose the `.json` file.

The converter reverse-engineers the record into a new `.xlsx` workbook pre-populated with all current parameter
definitions. Field mappings:

| JSON field                              | Workbook column                                        |
|-----------------------------------------|--------------------------------------------------------|
| `AllowedParameterKind` (full reference) | Allowed Parameter Kind (short name, e.g. `DataObject`) |
| `UnitQuantityID`                        | Unit Quantity (human-readable name from manifest)      |
| `PropertyType.Name`                     | Property Type Name                                     |
| `DataObjectContentType[]`               | Data Object Content Type (pipe-separated)              |
| `DefaultValue.*`                        | Appropriate Default … column                           |
| Per-parameter `State`                   | State                                                  |

Edit the workbook as needed, increment the version in the ActivityTemplate sheet, then parse to produce the new
version record.

[Back to TOC](#TOC)

---

## Appendix F.8 Upgrading Schema Versions

Over time the `master-data--ActivityTemplate` schema itself receives new minor versions. To upgrade all non-managed
template records so their `kind` field reflects the latest schema version, select
**Activity Templates → Upgrade Records to Preferred Schema Version**.

Managed templates (see [Appendix F.9](#appendix-f9-the-_managedactivitytemplatesjson-registry)) are excluded from bulk upgrades and
must be updated manually.

[Back to TOC](#TOC)

---

## Appendix F.9 The `_ManagedActivityTemplates.json` Registry

```
OsduStandardRecords/ActivityTemplates/_ManagedActivityTemplates.json
```

Templates listed in `_ManagedActivityTemplates.json` were authored before the automated proposal pipeline and are maintained manually.
The tooling honours this registry by:

- **Never** overwriting their JSON or Markdown during a parse or Refresh Documentation run.
- **Still** including them in the `WorkedExamples/Activity/README.md` catalogue.
- **Excluding** them from bulk schema-version upgrades.

To add a record to the managed set, append its path relative to the `ActivityTemplates/` folder (forward slashes):

```json
{
  "_comment": "...",
  "managed": [
    "Subsurface.GeologyPetrophysics/VolumeOfShaleCalculation-GR.1.0.0.json",
    "Subsurface.ReservoirManagement/ReservoirSimulationRun.1.0.0.json"
  ]
}
```

[Back to TOC](#TOC)

---

## Appendix F.10 ActivityTemplate Versioning

The version suffix (`<major>.<minor>.<patch>`) is embedded in the record `id` and is part of the record's identity —
a new version is a distinct OSDU record, not an in-place update. This mirrors the versioning convention used by OSDU
schemas.

| Change type                                                 | Version segment | Example trigger                                      |
|-------------------------------------------------------------|-----------------|------------------------------------------------------|
| Breaking — removed or renamed parameters, changed semantics | **major**       | Removing a required input parameter                  |
| Backwards-compatible addition or correction                 | **minor**       | Adding an optional parameter, fixing a unit quantity |
| Documentation or metadata only                              | **patch**       | Correcting a description or a typo                   |

A single canonical Activity worked example is maintained per **template name** (not per version). When a template
advances to a new version the example file is updated in place and its `ActivityTemplateID` field is pointed to the
new version. Previous versions remain as distinct OSDU records.

[Back to TOC](#TOC)

---

## Links

1. Return to the [Beginning of the Chapter](#TOC)
2. [Schema Usage Guide Table of Contents](../README.md)
3. Browse to the [Schema Usage Guide Table of Contents](../README.md)