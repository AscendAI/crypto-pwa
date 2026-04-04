# Cryptofolio — Crypto Portfolio Tracker PWA

A mobile-first Progressive Web App for tracking crypto investments with live prices, PnL calendar, and analytics.

## Features
- **Full CRUD** — Create, Read, Edit, Delete trades with notes
- **Live Prices** — CoinGecko + CoinCap fallback, manual entry as backup
- **PnL Calendar** — Binance-style monthly calendar showing daily profit/loss
- **Analytics Dashboard** — Portfolio allocation, best/worst performers, win rate, performance ranking, PnL snapshots
- **20 Coins** — BTC, ETH, SOL, XRP, ADA, DOGE, DOT, AVAX, LINK, POL, LTC, TRX, SHIB, PEPE, SUI, BNB, NEAR, APT, RENDER, INJ
- **PWA** — Install to home screen, works offline, data saved locally

## Deploy Free (2 minutes)

### Vercel (Recommended)
1. Go to [vercel.com](https://vercel.com) → Sign up
2. **Add New → Project → Upload** → drag this folder
3. Click Deploy → open URL on phone → "Add to Home Screen"

### Netlify
1. Go to [netlify.com](https://netlify.com) → drag this folder onto deploy area
2. Open URL on phone → "Add to Home Screen"

### GitHub Pages
1. Push all 3 files to a repo → Settings → Pages → main branch
2. Live at `https://username.github.io/repo-name`

## Files
- `index.html` — Complete app (no build step needed)
- `manifest.json` — PWA manifest
- `sw.js` — Service worker for offline support
