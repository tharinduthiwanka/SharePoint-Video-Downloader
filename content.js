// Function to report the URL to the extension
function reportManifest(url) {
    if (url.includes("videomanifest")) {
        let cleaned = url.split('&altManifestMetadata')[0].split('&alt=')[0];
        console.log("✅ Manifest Found & Cleaned:", cleaned);
        chrome.runtime.sendMessage({type: "MANIFEST_FOUND", url: cleaned});
    }
}

// 1. Check existing network logs (Plan B)
const checkHistory = () => {
    const resources = performance.getEntriesByType("resource");
    const manifest = resources.find(r => r.name.includes("videomanifest"));
    if (manifest) {
        reportManifest(manifest.name);
    }
};

// 2. Intercept new requests (Plan A)
const originalOpen = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function(method, url) {
    reportManifest(url);
    return originalOpen.apply(this, arguments);
};

// Run the history check every 2 seconds
setInterval(checkHistory, 2000);
console.log("Teams Downloader: Sniffer Active...");