# Dual-Use Resource Bundles

A Cribl app that gives users a complete blueprint for getting dual-use value (security + observability) from any data source flowing through Cribl. Instead of starting from scratch, you select a source, pick your detections, and deploy or export a ready-to-use configuration.

| Metric | Count |
|---|---|
| Data Sources | 89 across 26 categories |
| Detections | 602 (301 security + 301 observability) |
| Cribl Search Queries | 2,063 |
| Sigma Rule Mappings | 14 |
| Observability Rule Mappings | 16 |
| Correlation Stories | 9 |

## What's Inside

- **89 data sources** across 26 categories (firewalls, identity, endpoint, cloud, Windows, AI/LLM, email, network flow, and more), each with full field matrices, routing blueprints, enrichment recommendations, and 8-15 realistic sample log events
- **602 detections** (301 security + 301 observability) with MITRE ATT&CK mappings, required field analysis, and tuning guidance. Select which ones matter and the app tells you exactly which fields to keep and which to drop.
- **2,063 Cribl Search queries** ready to deploy as saved searches against your live datasets, no query writing required
- **One-click Deploy** - select detections, name your dataset, and the app creates saved searches directly in Cribl Search via the platform API
- **Stream Pack Export** - select any source and generate a ready-to-import Cribl Stream pipeline with field drops, Guard masking/redaction, and routing metadata. Preview the full YAML in-browser before downloading, with inline comments explaining every section.
- **Search Pack Export** - export saved queries scoped to only the sources and detections you selected
- **Data Reduction Calculator** - shows field-level math behind the reduction estimate. Separate bars for SIEM routing and observability tool routing, with a three-layer breakdown of Field Drops, Intelligent Routing, and Guard Protection. Accepts EPS + event size or daily GB volume directly.
- **Sigma Rule Integration** - 14 security detections mapped to community Sigma rules with status badges (Exact Match, Adapted, Custom/Inspired) and SigmaHQ rule UUIDs
- **Observability Rule Integration** - 16 observability detections with equivalent Prometheus/community alerting rules shown alongside Cribl Search KQL
- **Correlation Stories** - 9 cross-source attack and failure scenarios (Business Email Compromise, Ransomware via Domain Compromise, Insider Exfiltration, Cloud Misconfiguration Exploitation, and more)
- **Jobs to Be Done** - each source maps outcomes to specific Cribl personas (Data Optimizer, Data Onboarder, Team Leader, etc.) so you can speak to customer value in their language
- **Field Matrix Explorer** - interactive table showing exactly which fields route to Security SIEM, Observability, or Full-Fidelity, plus which can be dropped or masked for cost savings
- **Coverage Heatmap and Persona Lens** - visualize detection coverage across sources and filter the view by persona
- **Project Workspace** - group multiple data sources into named projects for aggregate analysis. Includes a field tuning panel with keep/drop toggles per field, real-time detection impact scoring, and combined Stream Pack export scoped to your selected sources. Projects are saved server-side via Cribl KV Store, so they persist across page refreshes and are shared across all users on the instance.
- **Coverage Impact Analysis** - interactive field toggle grid that shows which detections break as you mark fields keep or drop. Work can be saved directly into an existing or new project without re-doing selections.
- **Shareable Report** - print-ready one-pager with configurable source, customer name, and cost projections. Designed for handing to customers or attaching to Success Plans.

## Installation

1. Log into Cribl Cloud
2. Go to **App Platform > Add App > Import from Git**
3. Add the url for this repo: https://github.com/Cribl-Community/DualUseBundles.git and the branch you want to use (main).
4. Click **Install**
5. Find **Dual-Use Resource Bundles** in the Search Apps nav
