# Phone App

Minimal Expo React Native app focused on Android APK and signed iOS IPA distribution through GitHub Releases.

## Run Locally

```bash
npm install
npm run android
npm run ios
```

## Publish an Android APK

From the repository root:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The `Android APK GitHub Release` workflow builds the debug APK and attaches it to a GitHub Release.

See `../docs/android-github-release.md` for the full release guide.

## Publish an iOS IPA

Configure the Apple signing secrets, then push a normal version tag such as `v1.0.0` to build Android and iOS together. For an iOS-only release, use:

```bash
git tag ios-v1.0.0
git push origin ios-v1.0.0
```

The `iOS IPA GitHub Release` workflow builds the signed IPA and attaches it to a GitHub Release.

See `../docs/ios-github-release.md` for the full release guide.
