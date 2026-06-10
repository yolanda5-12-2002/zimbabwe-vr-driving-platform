# Vertical Slice Specification

## Purpose

The first vertical slice proves that the platform can deliver a realistic Zimbabwean driving lesson in VR with instructor supervision, telemetry, scoring, and replay.

## Route

Location profile:

- Harare CBD-style urban corridor.
- Right-hand traffic environment with Zimbabwean road context.
- Intersections, pavements, parking edges, informal crossing points, kombi pickup behaviour, worn lane markings, potholes, and mixed traffic.

Minimum route features:

- One controlled intersection with traffic-light failure mode.
- One uncontrolled-intersection branch.
- One informal kombi stop.
- One pothole or degraded-road segment.
- One pedestrian crossing hazard.
- One ZRP Traffic roadblock stop.

## Vehicle

Initial learner vehicle:

- Honda Fit, right-hand-drive.
- Manual and automatic transmission variants if budget allows; automatic first is acceptable for the earliest build.
- Functional steering, accelerator, brake, handbrake, indicators, lights, horn, wipers, mirrors, dashboard speedometer, and tachometer.

Vehicle acceptance:

- Cockpit scale feels correct in VR.
- Mirrors are usable.
- Steering and braking are smooth and predictable.
- Road-surface changes affect sound and handling.
- Dashboard telemetry matches actual simulation state.

## Scenarios

### Scenario Chain

1. Depart from starting point.
2. Approach urban traffic with pedestrians and kombis.
3. Encounter traffic-light failure.
4. Negotiate uncontrolled intersection.
5. Respond to informal pedestrian crossing.
6. Handle kombi stopping outside designated area.
7. Avoid pothole safely.
8. Stop at police roadblock.
9. Complete route and receive score report.

### Instructor Controls

Instructor can:

- Start, pause, resume, and reset a session.
- Inject pedestrian crossing.
- Inject kombi stop.
- Toggle traffic-light failure.
- Toggle rain or reduced visibility in later iterations.
- Flag an event for debrief.
- End session and generate report.

## Telemetry

Capture at runtime:

- timestamp
- route position
- vehicle speed
- steering angle
- throttle
- brake pressure
- gear
- indicator state
- headlight state
- wiper state
- horn state
- lane offset
- following distance
- time-to-collision to relevant actors
- hazard trigger state
- score deductions
- instructor interventions

## Scoring

Initial categories:

- Hazard perception
- Road-rule compliance
- Vehicle control smoothness
- Emergency response
- Fuel efficiency and mechanical sympathy

Critical failures:

- Collision.
- Failure to stop for police roadblock.
- Unsafe overtaking into oncoming traffic.
- Pedestrian conflict below safety threshold.
- Loss of vehicle control.
- Major speed violation in a controlled zone.

## Dashboard

Required views:

- Live session monitor.
- Learner vehicle telemetry.
- Scenario injection panel.
- Score panel.
- Event timeline.
- Replay/debrief summary.

Dashboard acceptance:

- Instructor can understand learner behaviour without wearing the headset.
- Every major deduction appears on the timeline.
- Scenario injection has clear state feedback.
- Dashboard remains usable on a laptop screen.

## Visual Standard

The vertical slice must avoid any cartoon or stylised presentation.

Minimum visual expectations:

- Physically based road materials.
- Realistic vehicle paint, glass, rubber, dust, and rain-ready materials.
- Believable street lighting and shadows.
- Realistic signage and markings.
- Human NPCs with natural motion and scale.
- No toon outlines, exaggerated colours, simplified toy-like vehicles, or generic arcade UI inside the VR scene.

## Performance Targets

- Quest 3: target 90 fps using dynamic quality.
- Quest 2: acceptable reduced-quality profile.
- PCVR: target 90-120 fps.

Performance must be tested under:

- dense traffic
- active pedestrians
- roadblock scene
- reflective wet surface prototype
- night lighting prototype

## Done Definition

The vertical slice is complete when:

- A learner can drive the route from start to finish in VR.
- The instructor can monitor and inject scenarios live.
- Telemetry produces a replayable event timeline.
- The score report identifies specific behaviour and location-based feedback.
- The scene passes internal photorealism review.
- The build runs at the target headset frame rate for the selected hardware profile.
