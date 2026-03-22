chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "MANIFEST_FOUND") {
        chrome.storage.local.set({ lastManifest: message.url });
        // Flash the icon badge to show success
        chrome.action.setBadgeText({ text: "!", tabId: sender.tab.id });
        chrome.action.setBadgeBackgroundColor({ color: "#00FF00" });
    }
});