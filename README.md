# Spoonless

A low-commitment, browser-based mood tracking app designed for people who don't have the mental energy
for complex self-monitoring tools.

Combination of previous builds:
[Mental Health Tracker](https://github.com/missfionajean/mental-health-tracker)
[KeepUp Social Tracker](https://github.com/missfionajean/keepup-social-tracker)

The name comes from [Spoon Theory](https://en.wikipedia.org/wiki/Spoon_theory) — a framework commonly
used in chronic illness and neurodivergent communities to describe limited daily energy. Spoonless is
built around the idea that tracking your mental health shouldn't cost you the energy you're trying
to conserve.

## What It Does

Spoonless gives you a calendar dashboard where each day is color-coded to represent the emotions you
felt that day. At a glance, you can see patterns in your mood over time without reading through
journals or interpreting charts.

**Current features:**
- Color-coded calendar view showing mood history at a glance
- Save color gradients to individual days to represent mixed or layered emotions
- Attach personal notes to specific days
- Minimal, low-friction UI designed to reduce interaction cost

**In active development:**
- Full database integration (SQL backend in testing phase)
- Persistent user data across sessions
- Live deployment via server hosting (AWS or equivalent)

## Tech Stack

| Layer | Technology |
|-------|------------|
| Front end | React, TypeScript |
| Back end | Node.js, Express |
| Database | SQL (in development) |
| Styling | CSS |

## Architecture Overview

Spoonless is a full-stack web application with a separated front end and back end. When deployed,
both services run simultaneously on a server. Users interact only with the front end via a designated
URL — the back end handles data storage and retrieval behind the scenes.
