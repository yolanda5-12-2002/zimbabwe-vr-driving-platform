# Unreal Project Setup

## Purpose

This file describes the first Unreal Engine project shell for ZimDriveVR. The current repository contains a source-control-ready Unreal project descriptor and configuration files, but the real maps, Blueprints, C++ modules, and assets still need to be created inside Unreal Editor.

## Required Tools

- Unreal Engine 5.4 or newer.
- Visual Studio 2022 with C++ game development workload if C++ modules are added.
- Meta Quest Link or SteamVR depending on target headset.
- Git for Windows.

## Open The Project

1. Install Unreal Engine 5.4 or newer.
2. Open `ZimDriveVR.uproject` from the repository root.
3. Enable missing plugins if Unreal prompts for them.
4. Create the first map at `/Game/Maps/Harare_CBD_VerticalSlice`.
5. Save all created assets under Unreal's `Content/` folder.

## Initial Unreal Folders

Create these folders in the Content Browser:

```text
Content/Maps
Content/Vehicles/HondaFit
Content/Vehicles/HiaceKombi
Content/Scenarios/HarareCBD
Content/Roads/Materials
Content/Roads/Meshes
Content/NPC/Pedestrians
Content/NPC/Traffic
Content/UI/VR
Content/Audio/Engines
Content/Audio/Ambience
Content/Telemetry
```

## First Map Checklist

- Create `Harare_CBD_VerticalSlice`.
- Add VR pawn using OpenXR.
- Add basic road corridor mesh or blockout.
- Add daylight setup with Lumen-compatible lighting.
- Add placeholder Honda Fit learner vehicle.
- Add route start and finish triggers.
- Add scenario trigger volumes for intersection, pedestrian crossing, kombi stop, pothole, and police roadblock.
- Expose telemetry events for dashboard integration.

## Notes

The project descriptor currently uses a Blueprint-first setup. Add C++ modules only when simulation logic, telemetry transport, or vehicle physics tuning needs stronger compile-time structure.
