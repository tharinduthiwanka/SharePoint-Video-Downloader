chrome.storage.local.get("lastManifest", (data) => {
    const status = document.getElementById('status');
    const btn = document.getElementById('copyBtn');

    if (data.lastManifest) {
        status.innerText = "✅ Video Ready!";
        status.style.color = "green";
        
        btn.onclick = () => {
            const cmd = `yt-dlp -N 16 --concurrent-fragments 16 "${data.lastManifest}" -o "Azure_Meeting.mp4"`;
            navigator.clipboard.writeText(cmd).then(() => {
                btn.innerText = "COPIED!";
                setTimeout(() => btn.innerText = "Copy yt-dlp Command", 2000);
            });
        };
    }
});