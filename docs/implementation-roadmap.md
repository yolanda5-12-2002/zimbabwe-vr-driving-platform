# Implementation Roadmap

## Objective

Turn the Zimbabwe VR driving training concept into a working photorealistic vertical slice, then expand it into a full training and assessment platform.

## Phase 0: Project Setup

Deliverables:

- Unreal Engine 5 project created with OpenXR support.
- Source-control rules confirmed for Unreal-generated files.
- Basic folder structure for maps, vehicles, scenarios, materials, UI, audio, and telemetry.
- Instructor dashboard technology selected.
- Data contracts defined for scenarios, vehicle profiles, scoring, and telemetry events.

Acceptance:

- Project opens cleanly in Unreal Engine.
- Empty VR test map runs in headset.
- Repository excludes generated build/cache folders.
- Team can build locally from documented setup steps.

## Phase 1: Photorealistic Vertical Slice

Deliverables:

- Harare CBD prototype route.
- Honda Fit right-hand-drive learner cockpit.
- Basic learner controls for steering, pedals, gears, indicators, mirrors, lights, horn, and wipers.
- Traffic-light failure/uncontrolled-intersection scenario.
- Informal pedestrian crossing.
- Kombi stopping at a non-designated pickup point.
- Pothole avoidance segment.
- Police roadblock compliance stop.
- Instructor dashboard with live telemetry and scenario injection.
- First scoring timeline with hazard perception, compliance, control, emergency response, and efficiency categories.

Acceptance:

- The learner can complete a full training run in VR.
- Instructor can observe speed, braking, steering, scenario events, and score changes in real time.
- The route does not feel cartoon-like: lighting, road materials, vehicles, and NPCs must pass an internal realism review.
- Scenario events are replayable from telemetry logs.

## Phase 2: Training Centre Pilot

Deliverables:

- Learner profiles.
- Instructor accounts.
- Session history.
- Offline-first local database.
- Exportable assessment reports.
- Additional route variants for day, night, rain, and traffic density.
- Improved NPC traffic and pedestrian behaviour.
- Expanded vehicle fleet with Toyota Hiace kombi and Isuzu truck.

Acceptance:

- A training centre can run repeated sessions without internet.
- Sessions sync when connectivity returns.
- Instructors can compare learners across route attempts.
- Reports are clear enough for learner feedback and internal audit.

## Phase 3: Certification Alignment

Deliverables:

- VID preparation modules.
- Parking, reversing, hill-start, and controlled-manoeuvre scenarios.
- Road-sign recognition and compliance checks.
- Compliance traceability matrix for road markings, signs, and scenario rules.
- ZRP Traffic audit log format.
- Scenario-pack versioning and signing.

Acceptance:

- Every assessed event maps to a documented skill or rule category.
- Instructors can explain every score deduction from replay evidence.
- Scenario packs cannot be silently modified without version changes.

## Phase 4: National Expansion

Deliverables:

- Bulawayo route pack.
- Mutare route pack.
- Rural murram and gravel route pack.
- Border-post route pack for Beitbridge and Forbes.
- Heavy rain, flooding, night driving, livestock, and overloaded-vehicle scenario packs.
- Multilingual UI and feedback in English, Shona, and Ndebele.

Acceptance:

- Platform supports urban, peri-urban, rural, and cross-border training.
- Learners can train in multiple environmental conditions.
- Training centres can choose route packs based on local needs.

## Engineering Priorities

1. Stable VR frame rate.
2. Realistic road surfaces and vehicle behaviour.
3. Clear telemetry and replayable assessment.
4. Instructor control and observability.
5. Offline reliability.
6. Compliance traceability.
7. Expansion through scenario packs, not one-off hardcoded scenes.

## Early Technical Decisions

- Use Unreal Engine 5 as the simulation runtime.
- Use OpenXR for headset compatibility.
- Use Chaos Vehicles for physics baseline.
- Use event-sourced telemetry for scoring and replay.
- Keep scenario definitions data-driven.
- Keep dashboard separate from the VR runtime, connected over local network.

## Risks

- Photorealistic content capture can become the schedule bottleneck.
- Standalone headset performance may require separate quality profiles.
- Legal and certification language must be validated with current authorities.
- NPC realism will require iteration; poor human animation can break immersion quickly.
- Offline sync must be designed early to avoid unreliable training-centre deployments.
