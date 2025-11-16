# 🎮 AR Hunt - Augmented Reality Scavenger Hunt

An interactive scavenger hunt game where players scan QR codes to collect letters and view them in **3D and Augmented Reality**!

## 🌟 Features

### Core Gameplay
- 🔐 **Daily access codes** - Secure game access with rotating codes
- 📱 **QR code scanning** - Collect letters by scanning QR codes
- 🎯 **Progress tracking** - Visual display of collected letters
- 🎉 **Completion system** - Generate unique completion codes
- 👥 **Admin panel** - Manage codes, view stats, run tombola

### 🆕 AR Features (New!)
- 🎪 **3D Letter Viewer** - Interactive 3D models after scanning
- 👁️ **AR Mode** - View letters in real space via phone camera
- ✨ **Visual Effects** - Screen flashes, particles, sparkles
- 🔊 **Sound Effects** - Audio feedback on collection
- 🖱️ **Click to Preview** - View any collected letter in 3D
- 📱 **Cross-Platform AR** - Works on iOS and Android

## 🚀 Quick Start

### 1. Clone & Setup
```bash
git clone https://github.com/dev-game-zone/ar-hunt.git
cd ar-hunt
```

### 2. Configure
Edit `scripts/config.js`:
```javascript
SECRET_SALT: "your-secret-salt"      // Change this!
ADMIN_SALT: "your-admin-salt"        // Change this!
BASE_PATH: "/ar-hunt/"               // Match your deployment path
LETTER_MAP: { ... }                  // Map QR codes to letters
HIDDEN_PHRASE: "YOURSECRETWORD"      // The word to discover
```

### 3. Test Locally
```bash
# Python 3
python -m http.server 8000

# Or Node.js
npx http-server

# Visit: http://localhost:8000
```

### 4. Deploy to GitHub Pages
1. Push to GitHub
2. Settings → Pages
3. Select branch: `main`, folder: `/ (root)`
4. Your hunt will be live at: `https://[username].github.io/ar-hunt/`

## 📱 How to Play

1. **Enter Access Code** - Daily rotating code for access
2. **Scan QR Codes** - Use your camera to scan hidden codes
3. **Collect Letters** - Watch 3D letters appear with effects
4. **View in AR** - Place letters in real space (mobile only)
5. **Complete Hunt** - Find all letters to reveal completion code
6. **Preview Anytime** - Click collected letters to view in 3D

## 🎨 AR Features Demo

### Test Without QR Codes
Open `test-ar.html` in a browser to test the 3D viewer and AR features.

### Scanning Experience
```
Scan QR → Flash & Sparkle → 3D Letter Appears → View in AR → Place in Space
```

### Game Page
```
Click Letter → 3D Preview → Rotate & Zoom → View in AR
```

## 📱 Device Compatibility

| Platform | 3D Viewer | AR Mode | Browser |
|----------|-----------|---------|---------|
| iPhone/iPad | ✅ | ✅ AR Quick Look | Safari |
| Android | ✅ | ✅ Scene Viewer | Chrome |
| Desktop | ✅ | ❌ | Any |

**Requirements:**
- iOS: iPhone 6S+ with iOS 12+
- Android: Device with ARCore support
- HTTPS connection (automatic with GitHub Pages)

## 🎨 Customization

### Add Custom 3D Models
1. Create letter models in Blender/Tinkercad
2. Export as `.glb` format
3. Place in `models/` folder as `letter_A.glb`, etc.
4. Update `scripts/ar-models.js`:
   ```javascript
   src: '../../models/letter_' + letter + '.glb'
   ```

### Customize Colors
Edit `scripts/ar-models.js`:
```javascript
letterColors: {
  'A': '#FF6B6B',  // Change colors here
  'B': '#4ECDC4',
  // ... etc
}
```

### Adjust Effects
Edit `scripts/effects.js` to modify:
- Particle counts and colors
- Animation durations
- Sound frequencies
- Flash intensities

## 📁 Project Structure

```
ar-hunt/
├── index.html              # Access code entry
├── pages/
│   ├── game/
│   │   └── game.html      # Main game page with letter collection
│   ├── scan/
│   │   └── scan.html      # QR scanner with AR viewer
│   ├── admin/
│   │   └── admin.html     # Admin panel
│   └── generator/
│       └── generator.html # QR code generator
├── scripts/
│   ├── app.js             # Core game logic
│   ├── config.js          # Configuration settings
│   ├── ar-models.js       # 3D model management (NEW!)
│   └── effects.js         # Visual & audio effects (NEW!)
├── styles/
│   └── styles.css         # Styling
├── models/                # 3D model files (NEW!)
│   └── README.md
├── test-ar.html           # AR testing page (NEW!)
├── AR_GUIDE.md            # Comprehensive AR documentation (NEW!)
├── QUICKSTART_AR.md       # Quick AR setup guide (NEW!)
└── IMPLEMENTATION_SUMMARY.md  # Technical details (NEW!)
```

## 🔒 Security Features

- **Salted hashing** - SHA-256 with daily rotating salts
- **Client-side only** - No server required, no data stored remotely
- **Secure codes** - Unique daily access and completion codes
- **Admin protection** - Separate admin PIN system

## 🛠️ Admin Panel

Access at: `/pages/admin/admin.html`

Features:
- 📊 **Dashboard** - View game stats
- 🎟️ **Tombola** - Random winner selection with AR visualization
- 🔑 **Code Generator** - Create today's access code
- 📋 **Player Codes** - View completion codes

## 📚 Documentation

- **[QUICKSTART_AR.md](QUICKSTART_AR.md)** - Quick start guide for AR features
- **[AR_GUIDE.md](AR_GUIDE.md)** - Comprehensive AR documentation
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Technical implementation details
- **[models/README.md](models/README.md)** - 3D model creation guide

## 🎯 Use Cases

- **Educational Events** - Classroom scavenger hunts
- **Corporate Events** - Team building activities
- **Conferences** - Interactive booth experiences
- **Museums** - Self-guided tours with AR
- **Parties** - Fun group activities
- **Marketing** - Promotional campaigns

## 🔧 Technical Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (ES6+)
- **QR Scanner**: html5-qrcode 2.3.8
- **AR Viewer**: Google Model Viewer 3.4.0
- **3D Format**: GLB/GLTF
- **AR Platforms**: ARKit (iOS), ARCore (Android)
- **Storage**: localStorage (client-side)
- **Security**: Web Crypto API (SHA-256)

## 🚀 Performance

- ✅ **No backend** - Pure client-side application
- ✅ **Fast loading** - Minimal dependencies
- ✅ **Lazy loading** - 3D models load on-demand
- ✅ **Browser caching** - Fast subsequent loads
- ✅ **Mobile optimized** - Responsive design
- ✅ **Offline capable** - Works without internet after initial load

## 🐛 Troubleshooting

### AR not working?
- ✅ Use Safari on iOS, Chrome on Android
- ✅ Ensure HTTPS (required for AR)
- ✅ Check device supports AR (iPhone 6S+, ARCore Android)
- ✅ Grant camera permissions

### 3D models not loading?
- ✅ Check browser console (F12) for errors
- ✅ Verify GLB file paths in `ar-models.js`
- ✅ Test models at https://gltf-viewer.donmccurdy.com/

### Effects not showing?
- ✅ Check `scripts/effects.js` is loaded
- ✅ Look for JavaScript errors in console
- ✅ Try different browser

See [AR_GUIDE.md](AR_GUIDE.md) for more troubleshooting tips.

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add new 3D models
- Create new visual effects
- Improve AR experience
- Enhance documentation
- Report bugs or issues

## 📄 License

This project is open source. Feel free to use and modify for your own scavenger hunts!

## 🙏 Credits

- **Model Viewer** by Google - https://modelviewer.dev/
- **html5-qrcode** by mebjas - https://github.com/mebjas/html5-qrcode
- **3D Models** - Placeholder models from Google's Model Viewer examples

## 🎉 Have Fun!

Transform your scavenger hunt into an AR adventure! Watch as players discover letters in 3D and place them in their real environment. 

**Questions?** Check the documentation or open an issue.

---

**Built with ❤️ for immersive experiences**

**Version:** 2.0.0 (AR Edition)  
**Last Updated:** 2025
