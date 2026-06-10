# Photorealism Asset Pipeline

## Standard

The visual target is first-glance realism. Assets should be rejected when they read as stylised, simplified, toy-like, or generic.

## Capture Sources

- LiDAR scans for road geometry, kerbs, intersections, pavements, drainage, border-post lanes, and building facades.
- Photogrammetry for potholes, cracked tarmac, murram, gravel, road shoulders, signage, roadblocks, market edges, and bus/kombi pickup areas.
- HDRI sky and lighting captures from Zimbabwean latitude and season-specific conditions.
- Reference video for traffic behaviour, pedestrian behaviour, kombi stopping patterns, police roadblock interactions, rain visibility, dust plumes, and night lighting.
- Audio field recordings for engines, horns, road surfaces, CBD ambience, rural ambience, rain, police radios, and station/intersection environments.

## Asset Classes

### Roads

Road materials must support layered wear:

- tarmac aggregate variation
- crack networks
- pothole depth and rim breakup
- patched asphalt
- gravel shoulder spillover
- puddles and mud after rain
- murram dust and tyre ruts

### Vehicles

Each vehicle requires:

- right-hand-drive cockpit
- functional gauges
- working mirrors
- indicator and light states
- physically based paint, rubber, glass, dust, and rain materials
- drivetrain-specific audio
- tyre and suspension tuning per load state

### Humans

Human characters should use high-fidelity meshes, natural animation, gaze behaviour, and culturally plausible clothing and props. Avoid generic idle loops that break immersion.

### Signs And Markings

Signs and markings must be traceable to the selected road-sign standard. Temporary signs should use the correct colour treatment. Text variants should be reviewed for Zimbabwean usage before production.

## Quality Gates

1. Reference match: asset has named real-world references.
2. Scale match: verified against metric capture or survey data.
3. Material match: PBR values checked under daylight, overcast, night, and rain.
4. VR comfort: no shimmering, texture crawl, stereo mismatch, or aggressive specular flicker.
5. Performance: asset meets LOD, Nanite, material instruction, and draw-call budgets.
6. Realism review: blind reviewers should not reliably identify the VR frame as synthetic against equivalent reference imagery.

## Optimization Rules

- Preserve silhouette and surface truth on roads, vehicles, signs, and nearby humans.
- Reduce distant building interiors, far traffic detail, and hidden underside geometry first.
- Use impostors only outside learner attention zones.
- Maintain deterministic collision geometry for training-relevant hazards such as potholes, kerbs, animals, barriers, and roadblock equipment.

## Environment Profiles

- Harare CBD: dense traffic, pedestrians, informal crossings, inconsistent signals, commercial frontage, reflective wet tarmac.
- Bulawayo: wider streets, different building character, commuter and goods traffic.
- Mutare: elevation changes, freight movement, mountain-route visibility variation.
- Rural murram: dust, livestock, shoulder degradation, low signage density.
- Border route: queues, freight vehicles, customs lanes, fatigue, police and compliance checks.
