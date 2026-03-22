A lightweight Chrome Extension designed for IT professionals to intercept and clean `videomanifest` URLs from Microsoft Teams and SharePoint recordings. It generates ready-to-use **yt-dlp** and **FFmpeg** commands for high-speed, multi-threaded downloads.

## 🚀 Features
- **Real-time Interception:** Overrides `XMLHttpRequest` and `fetch` to catch manifest URLs.
- **Resource Sniffing:** Uses the `Performance Timeline API` as a fallback to find already-loaded streams.
- **Auto-Cleaning:** Automatically strips telemetry and metadata strings (e.g., `&altManifestMetadata`) that cause FFmpeg failures.
- **High-Speed Presets:** Provides a 16-thread `yt-dlp` command optimized for connections (like SLT Fiber).
