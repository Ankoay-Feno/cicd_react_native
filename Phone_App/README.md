# Phone App

Minimal Expo React Native app focused on Android APK distribution through GitHub Releases.

## Run Locally

```bash
npm install
npm run android
```

## Publish an Android APK

From the repository root:

```bash
git tag v1.0.0
git push origin v1.0.0
```

The `Android APK GitHub Release` workflow builds the debug APK and attaches it to a GitHub Release.

See `../docs/android-github-release.md` for the full release guide.
