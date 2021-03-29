# Dando nome aos bois

## Overview

It does exactly what you expect. It changes the brazilian president's name with adjectives.

## Getting Started

### Download Google Chrome
Download Google Chrome if you haven't already! You can download the latest version [here](https://www.google.com/chrome/browser/desktop/). For this hackpack, you'll need Chrome Version 40 or newer. In order to figure out which version you have, go to [chrome://version/](chrome://version/) in the Omnibar, and look at the top line. You should see something like

```
Google Chrome	48.0.2564.109 (Official Build) (64-bit)
```

Don't worry if it's not exactly the same. As long as the major number (before the decimal point) is greater than 40, you're set!

### Load Starter Code
Chrome usually ships extensions as `.crx` files (similar to `.zip` files), which is great for distribution, but not so great for developing. Instead, we'll tell Chrome to treat the starter code folder as an extension.

We need to enable Chrome Developer Settings in order to build our chrome extension.

In order to do this:

1. Navigate to [chrome://extensions](chrome://extensions) in your browser.
2. Ensure that the **Developer mode** checkbox in the top right-hand corner is checked.
3. Click **Load unpacked extension...** to pop up a file-selection dialog.
4. Navigate to the directory in which your extension files live, and select it.

You should now see a screen that looks like the below:

<a href="Loading Starter Code"><img src="https://i.imgur.com/qPhFaI0.png" height="500" ></a>


Note that the **Developer mode** checkbox is checked, and the extension is enabled.

Additionally, pay close attention to the **Reload** link.

**By default, Chrome will _not_ reload your extension automatically if you update your code. Thus, if you want to test your extension, you _must_ reload the extension before testing. Otherwise, your changes will _not_ be present in the active extension.** Basically, every time you make a change to your code that you want to test live in Chrome, make sure to reload the extension using that **Reload** button.
