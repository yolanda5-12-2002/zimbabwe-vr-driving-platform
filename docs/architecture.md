# Platform Architecture

## Goal

Build a photorealistic, real-time VR driving training system for Zimbabwe that can run as a learner simulator, instructor-led training environment, and certification preparation tool.

## Runtime Stack

- Engine: Unreal Engine 5.
- Rendering: Lumen global illumination, Nanite virtualised geometry, hardware ray-traced reflections where available, temporal super resolution, fixed foveated rendering on standalone VR.
- Physics: Chaos Vehicles for drivetrain, tyres, suspension, surface friction, pothole impulses, trailer dynamics, and hydroplaning response.
- XR: OpenXR-first integration targeting Meta Quest 2/3, HTC Vive, and SteamVR PCVR.
- Audio: Steam Audio or equivalent HRTF spatialisation, convolution zones, surface-specific tyre audio, vehicle-specific engine loops, and weather layers.
- Networking: Local instructor console over LAN, optional cloud sync, store-and-forward offline queue.
- Data: Event-sourced telemetry stream with scenario state, learner inputs, vehicle state, and compliance events.

## Major Modules

### Simulation Core

Owns the world clock, deterministic scenario state, traffic actor orchestration, vehicle physics, weather, road surfaces, and hazard triggers.

### Vehicle System

Provides reusable right-hand-drive vehicle definitions, cockpit telemetry, mirrors, controls, sound profiles, damage states, fuel/energy model, and maintenance parameters.

### Scenario Director

Controls incident injection, route progression, adaptive difficulty, NPC behaviour envelopes, weather transitions, and examiner-style assessment moments.

### NPC And Traffic AI

Manages pedestrians, kombi drivers, passengers, cyclists, livestock, police officers, emergency vehicles, overloaded freight, and agricultural machinery. AI must be contextual and probabilistic rather than scripted-only.

### Instructor Dashboard

Displays live telemetry, learner score, replay timeline, injected hazards, route state, road-rule events, and audit logs. The dashboard should run on a tablet, laptop, or desktop browser connected over LAN.

### Assessment Engine

Scores hazard perception, road-rule compliance, vehicle control, fuel efficiency, and emergency response. It produces learner feedback, instructor notes, and VID-aligned preparation records.

### Offline Sync

Stores learners, sessions, assessments, media thumbnails, and audit logs locally. Syncs encrypted deltas when an internet connection becomes available.

## Data Flow

```text
VR headset input
  -> Vehicle System
  -> Simulation Core
  -> Scenario Director
  -> Assessment Engine
  -> Telemetry Event Store
  -> Instructor Dashboard
  -> Local/Cloud Sync
```

## Performance Targets

- Quest 3 standalone: stable 90 fps target with dynamic resolution and fixed foveated rendering.
- Quest 2 standalone: reduced scene density profile with stable 72-90 fps depending on content.
- PCVR: 90-120 fps on RTX 4070-class hardware.
- Worst-case frame spikes must be tested during rain, night driving, dense Harare CBD traffic, and police roadblock scenarios.

## Security And Audit

- Immutable session event log with learner, instructor, route, scenario pack, vehicle, score, and intervention records.
- Role-based access for learners, instructors, administrators, and auditors.
- Local encrypted storage for offline deployments.
- Signed scenario packs so training centres cannot silently alter assessment conditions.

## First Vertical Slice

Build one route and make it excellent before expanding:

- Location: Harare CBD corridor with one uncontrolled intersection and one traffic-light failure branch.
- Vehicle: Honda Fit right-hand-drive learner vehicle.
- Hazards: informal pedestrian crossing, kombi stopping outside designated area, pothole avoidance, police roadblock.
- Dashboard: telemetry stream, event timeline, scoring panel, scenario injection controls.
- Acceptance: stable VR frame rate, no cartoon materials, believable human behaviour, and replayable assessment log.
