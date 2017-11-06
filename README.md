# Mobile Flashcards

![flash cards](https://media.giphy.com/media/3orifgSN0CT91F3anK/giphy.gif)

## Table of Contents

* [Installation](#installation)
* [Available Scripts](#available-scripts)
  * [yarn start](#yarn-start)
  * [yarn run ios](#yarn-run-ios)
  * [yarn run android](#yarn-run-android)
  * [yarn run eject](#yarn-run-eject)
* [Supported Platforms](#supported-platforms)

## Installation

To install dependencies ready to run the application simply run `yarn`.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs your app in development mode.

Open it in the [Expo app](https://expo.io) on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

Sometimes you may need to reset or clear the React Native packager's cache. To do so, you can pass the `--reset-cache` flag to the start script:

```
yarn start -- --reset-cache
# or
yarn start -- --reset-cache
```

#### `yarn run ios`

Like `yarn start`, but also attempts to open your app in the iOS Simulator if you're on a Mac and have it installed.

#### `yarn run android`

Like `yarn start`, but also attempts to open your app on a connected Android device or emulator. Requires an installation of Android build tools (see [React Native docs](https://facebook.github.io/react-native/docs/getting-started.html) for detailed setup). We also recommend installing Genymotion as your Android emulator. Once you've finished setting up the native build environment, there are two options for making the right copy of `adb` available to Create React Native App:

##### Using Android Studio's `adb`

1. Make sure that you can run adb from your terminal.
2. Open Genymotion and navigate to `Settings -> ADB`. Select “Use custom Android SDK tools” and update with your [Android SDK directory](https://stackoverflow.com/questions/25176594/android-sdk-location).

##### Using Genymotion's `adb`

1. Find Genymotion’s copy of adb. On macOS for example, this is normally `/Applications/Genymotion.app/Contents/MacOS/tools/`.
2. Add the Genymotion tools directory to your path (instructions for [Mac](http://osxdaily.com/2014/08/14/add-new-path-to-path-command-line/), [Linux](http://www.computerhope.com/issues/ch001647.htm), and [Windows](https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/)).
3. Make sure that you can run adb from your terminal.

## Supported Platforms

This project should work on most iOS or Android devices or simulators. It has been specifically tested on:

- iOS 11 on iPhone 6S+
- iOS Simulator (iPhone 7 and iPhone X)
- Genymotion Simulator (Google Nexus 5X - 7.1.0)
