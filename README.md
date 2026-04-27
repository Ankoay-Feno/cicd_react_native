# Android APK GitHub Release

This repository contains a minimal Expo React Native app configured for free Android APK distribution through GitHub Releases.

It currently includes:

- `Phone_App/`: the Expo React Native application.
- `.github/workflows/android-github-release.yml`: builds an Android APK and publishes it to GitHub Releases.
- `docs/android-github-release.md`: the Android release guide.

## Contents

- `Phone_App/`: Expo app.
- `.github/workflows/android-github-release.yml`: builds an Android APK and publishes it to a GitHub Release.
- `docs/android-github-release.md`: guide for distributing Android builds for free through GitHub Releases.

## Quick Start

```bash
cd Phone_App
npm install
npm run start
```

To publish a free Android APK through GitHub Releases:

```bash
git tag v1.0.0
git push origin v1.0.0
```

Then follow the guide: [docs/android-github-release.md](docs/android-github-release.md).

## Recommended Strategy

- Develop and test the app locally with Expo.
- Push a Git tag such as `v1.0.0`.
- Download the generated APK from the GitHub Release.

Main guide: [docs/android-github-release.md](docs/android-github-release.md).
