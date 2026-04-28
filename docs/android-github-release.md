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

The `Android APK GitHub Release` workflow builds a standalone release APK and creates a GitHub Release with `Phone_App-v1.0.0-android-release.apk`.

By default, the workflow creates a temporary Android signing key. This is enough to install the APK, but Android may reject updates from a later build because the signature can change.

For smoother updates, add these optional GitHub secrets:

- `ANDROID_KEYSTORE_BASE64`: base64 content of your Android `.keystore` file.
- `ANDROID_KEYSTORE_PASSWORD`: keystore password.
- `ANDROID_KEY_ALIAS`: key alias.
- `ANDROID_KEY_PASSWORD`: key password.

Generate a local test keystore if needed:

```bash
keytool -genkeypair -v -storetype JKS -keystore phone-app-release.keystore -storepass your-password -alias phone-app-release -keypass your-password -keyalg RSA -keysize 2048 -validity 10000
base64 -w 0 phone-app-release.keystore
```

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

## If the App Stays on the Splash Screen

Install the `android-release.apk` file from the newest GitHub Release. Older `android-debug.apk` files are development builds and can stay blocked on the splash screen because they expect a Metro development server.

If Android refuses to update the app, uninstall the old APK first and then install the new `android-release.apk`. To avoid this on future releases, configure the optional Android keystore secrets above and keep the same keystore.

## Important Limits

- This is a test APK signed for CI distribution, not a Play Store release.
- Android may show a warning because the app does not come from Google Play.
- If an update refuses to install, uninstall the old version and then install the new one.
- For polished public distribution with stable updates, later sign a release APK with a private keystore or use Google Play.
