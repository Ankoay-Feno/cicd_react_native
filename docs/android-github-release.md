# Publish Android for Free with GitHub Releases

This guide publishes a test Android APK for `Phone_App/` to GitHub Releases. It does not replace Google Play, but it is useful for a student project, demo, or private testing.

## 1. Check the Android Configuration

In `Phone_App/app.json`, keep a unique Android package name:

```json
"android": {
  "package": "com.yourcompany.phoneapp",
  "versionCode": 1
}
```

Increase `versionCode` for each new version.

## 2. Publish with a Tag

From the repository root:

```bash
git add .
git commit -m "Add Android GitHub Release workflow"
git push
git tag v1.0.0
git push origin v1.0.0
```

The `Android APK GitHub Release` workflow builds the APK and creates a GitHub Release with `Phone_App-v1.0.0-android-debug.apk`.

## 3. Publish Manually

In GitHub:

1. Go to `Actions`.
2. Open `Android APK GitHub Release`.
3. Click `Run workflow`.
4. Set `release_tag`, for example `v1.0.1`.
5. Run the workflow.

## 4. Install on Android

1. Go to the repository `Releases` tab.
2. Download the `.apk` file.
3. On Android, allow installation from the browser or file manager.
4. Open the APK to install the app.

## Important Limits

- This is a debug-signed test APK, not a Play Store release.
- Android may show a warning because the app does not come from Google Play.
- If an update refuses to install, uninstall the old version and then install the new one.
- For polished public distribution with stable updates, later sign a release APK with a private keystore or use Google Play.
