# Mobile GitHub Release

This repository contains a minimal Expo React Native app configured for Android APK distribution and signed iOS IPA distribution through GitHub Releases.

It currently includes:

- `Phone_App/`: the Expo React Native application.
- `.github/workflows/android-github-release.yml`: builds an Android APK and publishes it to GitHub Releases.
- `.github/workflows/ios-github-release.yml`: builds a signed iOS IPA and publishes it to GitHub Releases.
- `docs/android-github-release.md`: the Android release guide.
- `docs/ios-github-release.md`: the iOS release guide.

## Contents

- `Phone_App/`: Expo app.
- `.github/workflows/android-github-release.yml`: builds an Android APK and publishes it to a GitHub Release.
- `.github/workflows/ios-github-release.yml`: builds a signed iOS IPA and publishes it to a GitHub Release.
- `docs/android-github-release.md`: guide for distributing Android builds for free through GitHub Releases.
- `docs/ios-github-release.md`: guide for distributing signed iOS builds through GitHub Releases.

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

After configuring Apple signing secrets, the same `v1.0.0` tag also starts the iOS workflow. To publish only an iOS IPA through GitHub Releases:

```bash
git tag ios-v1.0.0
git push origin ios-v1.0.0
```

Then follow the guide: [docs/ios-github-release.md](docs/ios-github-release.md).

## Recommended Strategy

- Develop and test the app locally with Expo.
- Push a Git tag such as `v1.0.0` to build Android and, after Apple signing is configured, iOS.
- Download the generated APK and IPA from the GitHub Release.
- Use platform-specific tags such as `android-v1.0.0` or `ios-v1.0.0` when you only want one platform.

Main guide: [docs/android-github-release.md](docs/android-github-release.md).
iOS guide: [docs/ios-github-release.md](docs/ios-github-release.md).
