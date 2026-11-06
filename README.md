# DyadDrive: Controllable Generation of Paired RGB–Thermal Driving Videos under Asymmetric Observability

## Abstract

Paired RGB–Thermal driving video generation can provide controllable synthetic data for training and evaluating multimodal perception systems in autonomous driving. However, illumination and weather conditions affect RGB and thermal observations to different degrees, resulting in asymmetric observability of scene content. In addition, residual pixel-level misalignment may persist even after registration, making it difficult to learn cross-modal scene correspondence. We propose DyadDrive, a controllable diffusion framework that combines initial shared processing with independently parameterized RGB and thermal branches. Shared processing supports joint modeling, while the branches provide dedicated paths for distinct imaging responses. To coordinate scene content across branches, we introduce Moment-preserving Spatial Alignment (MoSA). Within each window, MoSA selects a guidance response according to its agreement with a shared-layer reference. This response guides a phase transformation of the receiving branch's own features, preserving their channel means and full channel covariance within each local update. We evaluate paired generation quality, scene correspondence, and visibility on DSERT-RoLL, supplemented by nuScenes experiments on RGB outputs from joint generation.

## Method Overview

![DyadDrive method overview](assets/figure-2.png)

## Paired Driving Videos

Each row compares the original paired video, its 3D bounding-box condition, and the generated paired video. RGB is on the left and thermal is on the right. Each sequence contains 9 frames at 10 FPS, with outputs generated at a resolution of 424 × 800.

| **Original RGB–Thermal** | **3D BBox Condition** | **Generated RGB–Thermal** |
| :---: | :---: | :---: |
| ![Original RGB–Thermal](assets/00/original.gif) | ![3D BBox Condition](assets/00/condition.gif) | ![Generated RGB–Thermal](assets/00/generated.gif) |
| ![Original RGB–Thermal](assets/01/original.gif) | ![3D BBox Condition](assets/01/condition.gif) | ![Generated RGB–Thermal](assets/01/generated.gif) |
| ![Original RGB–Thermal](assets/02/original.gif) | ![3D BBox Condition](assets/02/condition.gif) | ![Generated RGB–Thermal](assets/02/generated.gif) |
| ![Original RGB–Thermal](assets/03/original.gif) | ![3D BBox Condition](assets/03/condition.gif) | ![Generated RGB–Thermal](assets/03/generated.gif) |
| ![Original RGB–Thermal](assets/04/original.gif) | ![3D BBox Condition](assets/04/condition.gif) | ![Generated RGB–Thermal](assets/04/generated.gif) |
| ![Original RGB–Thermal](assets/05/original.gif) | ![3D BBox Condition](assets/05/condition.gif) | ![Generated RGB–Thermal](assets/05/generated.gif) |
| ![Original RGB–Thermal](assets/06/original.gif) | ![3D BBox Condition](assets/06/condition.gif) | ![Generated RGB–Thermal](assets/06/generated.gif) |
| ![Original RGB–Thermal](assets/07/original.gif) | ![3D BBox Condition](assets/07/condition.gif) | ![Generated RGB–Thermal](assets/07/generated.gif) |
| ![Original RGB–Thermal](assets/08/original.gif) | ![3D BBox Condition](assets/08/condition.gif) | ![Generated RGB–Thermal](assets/08/generated.gif) |
| ![Original RGB–Thermal](assets/09/original.gif) | ![3D BBox Condition](assets/09/condition.gif) | ![Generated RGB–Thermal](assets/09/generated.gif) |
| ![Original RGB–Thermal](assets/10/original.gif) | ![3D BBox Condition](assets/10/condition.gif) | ![Generated RGB–Thermal](assets/10/generated.gif) |
| ![Original RGB–Thermal](assets/11/original.gif) | ![3D BBox Condition](assets/11/condition.gif) | ![Generated RGB–Thermal](assets/11/generated.gif) |
| ![Original RGB–Thermal](assets/12/original.gif) | ![3D BBox Condition](assets/12/condition.gif) | ![Generated RGB–Thermal](assets/12/generated.gif) |
| ![Original RGB–Thermal](assets/13/original.gif) | ![3D BBox Condition](assets/13/condition.gif) | ![Generated RGB–Thermal](assets/13/generated.gif) |
| ![Original RGB–Thermal](assets/14/original.gif) | ![3D BBox Condition](assets/14/condition.gif) | ![Generated RGB–Thermal](assets/14/generated.gif) |
| ![Original RGB–Thermal](assets/15/original.gif) | ![3D BBox Condition](assets/15/condition.gif) | ![Generated RGB–Thermal](assets/15/generated.gif) |
| ![Original RGB–Thermal](assets/16/original.gif) | ![3D BBox Condition](assets/16/condition.gif) | ![Generated RGB–Thermal](assets/16/generated.gif) |
| ![Original RGB–Thermal](assets/17/original.gif) | ![3D BBox Condition](assets/17/condition.gif) | ![Generated RGB–Thermal](assets/17/generated.gif) |
| ![Original RGB–Thermal](assets/18/original.gif) | ![3D BBox Condition](assets/18/condition.gif) | ![Generated RGB–Thermal](assets/18/generated.gif) |
| ![Original RGB–Thermal](assets/19/original.gif) | ![3D BBox Condition](assets/19/condition.gif) | ![Generated RGB–Thermal](assets/19/generated.gif) |
| ![Original RGB–Thermal](assets/20/original.gif) | ![3D BBox Condition](assets/20/condition.gif) | ![Generated RGB–Thermal](assets/20/generated.gif) |
| ![Original RGB–Thermal](assets/21/original.gif) | ![3D BBox Condition](assets/21/condition.gif) | ![Generated RGB–Thermal](assets/21/generated.gif) |
| ![Original RGB–Thermal](assets/22/original.gif) | ![3D BBox Condition](assets/22/condition.gif) | ![Generated RGB–Thermal](assets/22/generated.gif) |
| ![Original RGB–Thermal](assets/23/original.gif) | ![3D BBox Condition](assets/23/condition.gif) | ![Generated RGB–Thermal](assets/23/generated.gif) |
| ![Original RGB–Thermal](assets/24/original.gif) | ![3D BBox Condition](assets/24/condition.gif) | ![Generated RGB–Thermal](assets/24/generated.gif) |
| ![Original RGB–Thermal](assets/25/original.gif) | ![3D BBox Condition](assets/25/condition.gif) | ![Generated RGB–Thermal](assets/25/generated.gif) |
| ![Original RGB–Thermal](assets/26/original.gif) | ![3D BBox Condition](assets/26/condition.gif) | ![Generated RGB–Thermal](assets/26/generated.gif) |
| ![Original RGB–Thermal](assets/27/original.gif) | ![3D BBox Condition](assets/27/condition.gif) | ![Generated RGB–Thermal](assets/27/generated.gif) |
| ![Original RGB–Thermal](assets/28/original.gif) | ![3D BBox Condition](assets/28/condition.gif) | ![Generated RGB–Thermal](assets/28/generated.gif) |
| ![Original RGB–Thermal](assets/29/original.gif) | ![3D BBox Condition](assets/29/condition.gif) | ![Generated RGB–Thermal](assets/29/generated.gif) |

