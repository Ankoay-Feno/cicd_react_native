# Publish iOS with GitHub Releases

This guide builds a signed `.ipa` for `Phone_App/` and uploads it to GitHub Releases. iOS does not install unsigned app files, so this workflow requires an Apple Developer account, a signing certificate, and a provisioning profile.

## 1. Check the iOS Configuration

In `Phone_App/app.json`, keep a unique bundle identifier:

```json
"ios": {
  "bundleIdentifier": "com.tonentreprise.phoneapp",
  "buildNumber": "1.0.0",
  "supportsTablet": true
}
```

Increase `buildNumber` for each new iOS build.

## 2. Create Apple Signing Files

In Apple Developer:

1. Create an App ID matching `com.tonentreprise.phoneapp`.
2. Create an Apple Distribution certificate and export it as a `.p12` file.
3. Create an Ad Hoc provisioning profile that includes the test iPhones.
4. Download the `.mobileprovision` profile.

An Ad Hoc profile installs only on devices registered in that profile. For public distribution, use TestFlight or the App Store instead.

## 3. Add GitHub Secrets

Add these repository secrets in GitHub `Settings` -> `Secrets and variables` -> `Actions`:

- `APPLE_TEAM_ID`: your Apple Developer Team ID.
- `APPLE_CERTIFICATE_BASE64`: base64 content of the exported `.p12`.
- `APPLE_CERTIFICATE_PASSWORD`: password used when exporting the `.p12`.
- `IOS_PROVISIONING_PROFILE_BASE64`: base64 content of the `.mobileprovision`.
- `IOS_PROVISIONING_PROFILE_NAME`: optional profile name. If omitted, the workflow reads it from the profile.
- `IOS_KEYCHAIN_PASSWORD`: optional temporary CI keychain password.

Generate the base64 values from macOS:

```bash
base64 -i Certificate.p12 | pbcopy
base64 -i Profile.mobileprovision | pbcopy
```

## 4. Publish with a Tag

After the GitHub secrets are configured, use an `ios-v*` tag from the repository root:

```bash
git add .
git commit -m "Add iOS GitHub Release workflow"
git push
git tag ios-v1.0.0
git push origin ios-v1.0.0
```

The `iOS IPA GitHub Release` workflow builds the app on macOS and creates a GitHub Release with:

- `Phone_App-ios-v1.0.0-ios.ipa`
- `Phone_App-ios-v1.0.0-ios-manifest.plist`
- `Phone_App-ios-v1.0.0-ios-icon.png`

If the workflow says `Missing GitHub secret`, one or more values from step 3 have not been added to GitHub yet.

## 5. Publish Manually

In GitHub:

1. Go to `Actions`.
2. Open `iOS IPA GitHub Release`.
3. Click `Run workflow`.
4. Set `release_tag`, for example `ios-v1.0.1`.
5. Keep `export_method` as `ad-hoc` for registered device testing.
6. Run the workflow.

## 6. Install on iOS

Open the GitHub Release and use the `itms-services://` OTA install link from the release notes, or install the `.ipa` with Apple Configurator/Finder on a Mac.

The iPhone must be included in the provisioning profile, and the release assets must be reachable over HTTPS.
