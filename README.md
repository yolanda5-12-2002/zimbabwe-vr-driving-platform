# Zimbabwe Photorealistic VR Driving Training Platform

This repository is the starting point for a realism-first VR driving training platform designed for Zimbabwean roads, vehicles, hazards, and licensing workflows.

The product direction is intentionally not cartoon-like. The target experience is real-time, photorealistic, and suitable for practical driver training, instructor supervision, and certification preparation.

## Product Pillars

- Photorealistic Unreal Engine 5 simulation with Lumen, Nanite, Chaos Vehicles, MetaHuman-grade NPCs, and Steam Audio spatialisation.
- Zimbabwe-specific environments including Harare CBD, Bulawayo, Mutare, peri-urban roads, rural gravel and murram roads, Beitbridge, and Forbes Border Post.
- Right-hand-drive vehicle fleet reflecting common local traffic: Toyota Hiace kombi, Honda Fit, Toyota Corolla, Isuzu trucks, emergency vehicles, and agricultural machinery.
- Scenario engine for uncontrolled intersections, informal kombi stops, potholes, police roadblocks, overloaded vehicles, night driving, wet-season flooding, livestock, wildlife, and school zones.
- Instructor dashboard with live telemetry, scenario injection, learner analytics, replay review, and ZRP Traffic compliance audit logs.
- Offline-first operation for rural training centres, with later sync when connectivity returns.

## Repository Layout

```text
ZimDriveVR.uproject
Config/
apps/
  instructor-dashboard/
docs/
  architecture.md
  implementation-roadmap.md
  unreal-project-setup.md
  vertical-slice-spec.md
  photorealism-asset-pipeline.md
  scenario-catalog.md
  scoring-and-compliance.md
data/
  scenarios.json
  scoring_rubric.json
  vehicle_fleet.json
```

## First Build Target

The recommended first working milestone is a vertical slice:

1. Harare CBD daytime route with photogrammetry-based road surface, lane markings, pedestrians, kombis, and traffic-light failure mode.
2. Honda Fit right-hand-drive learner cockpit with manual and automatic gearbox variants.
3. Instructor dashboard showing speed, lane position, hazard events, braking, steering smoothness, mirrors, indicator use, and scoring timeline.
4. One examinable scenario chain: uncontrolled intersection, informal pedestrian crossing, pothole avoidance, and police roadblock compliance.

## Current Build Scaffold

- `ZimDriveVR.uproject` defines the Unreal Engine project shell.
- `Config/` contains initial rendering, input, and project settings.
- `apps/instructor-dashboard/` contains a local static dashboard prototype for telemetry and scenario-injection UX.
- `docs/unreal-project-setup.md` explains how to open the project and create the first Unreal map.

## Compliance Note

Legal and road-standard references must be validated against current Zimbabwean statutory instruments, VID guidance, ZINARA standards, and SADC road traffic sign manuals before production certification use. The files in this repository define the technical architecture and traceability model; they are not legal advice.
