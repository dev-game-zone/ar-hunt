# 🚀 Quick Start - AR Hunt

## What Changed?

Your QR hunt is now an **AR Hunt**! Players can view collected letters in 3D and place them in augmented reality using their phone cameras.

## ✅ Ready to Use

The AR features work immediately with the same QR codes! No changes needed to your existing setup.

## 🎮 Player Experience

1. **Scan QR code** → Screen flashes with sparkle effects
2. **3D letter appears** → Rotate and zoom with touch
3. **Tap "View in AR"** → See letter in real space (mobile only)
4. **Collect all letters** → Complete the hunt as before
5. **Click collected letters** → Preview any found letter in 3D

## 📱 Device Compatibility

| Device | 3D Viewer | AR Mode |
|--------|-----------|---------|
| iPhone/iPad (Safari) | ✅ Yes | ✅ Yes (AR Quick Look) |
| Android (Chrome) | ✅ Yes | ✅ Yes (Scene Viewer) |
| Desktop | ✅ Yes | ❌ No AR |

## 🎨 Customization Options

### 1. **Use Your Own 3D Models** (Optional)
- Create letter models in Blender/Tinkercad
- Save as `.glb` files in `/models/` folder
- Name them: `letter_A.glb`, `letter_B.glb`, etc.
- Update `scripts/ar-models.js` (see AR_GUIDE.md)

### 2. **Customize Effects** (Optional)
- Edit `scripts/effects.js` to change:
  - Colors and particle counts
  - Sound effects
  - Animation durations
  - Flash intensities

### 3. **Adjust AR Settings** (Optional)
- Edit `pages/scan/scan.html` and `pages/game/game.html`
- Change `<model-viewer>` attributes:
  - `auto-rotate` - Enable/disable rotation
  - `shadow-intensity` - Shadow darkness
  - `camera-orbit` - Default camera position

## 🌐 Deployment

### GitHub Pages (Recommended)
1. Push your code to GitHub
2. Go to Settings → Pages
3. Select branch: `main`, folder: `/ (root)`
4. Your AR hunt will be live at: `https://[username].github.io/ar-hunt/`

### Local Testing
```bash
# Simple HTTP server (Python 3)
python -m http.server 8000

# Or using Node.js
npx http-server

# Then visit: http://localhost:8000
```

### Important for AR:
- **HTTPS required** for AR features on mobile
- GitHub Pages provides HTTPS automatically
- Local testing works but AR may be limited

## 🔧 Configuration

### Update BASE_PATH (If needed)
In `scripts/config.js`:
```javascript
BASE_PATH: window.location.hostname === "127.0.0.1" || 
           window.location.hostname === "localhost"
           ? "/"
           : "/ar-hunt/",  // ← Your GitHub repo name
```

### Current Models
Currently using free placeholder models from Google. They work great for testing!

To use custom models:
1. Add `.glb` files to `/models/` folder
2. Update `scripts/ar-models.js` line 31:
   ```javascript
   src: '../../models/letter_' + letter + '.glb'
   ```

## 📊 What's Included

### New Files:
- `scripts/ar-models.js` - 3D model configuration
- `scripts/effects.js` - Visual/audio effects
- `models/` - Directory for custom 3D models
- `AR_GUIDE.md` - Comprehensive AR documentation

### Modified Files:
- `pages/scan/scan.html` - Added AR viewer modal
- `pages/game/game.html` - Added 3D preview for collected letters
- `styles/styles.css` - Enhanced hover effects

### Unchanged (Still works!):
- All existing game logic
- QR code scanning
- Progress tracking
- Admin panel
- Access codes

## 🎯 Testing Checklist

- [ ] Test on iPhone Safari
- [ ] Test on Android Chrome
- [ ] Test QR code scanning
- [ ] Test AR viewer appears
- [ ] Test "View in AR" button
- [ ] Test letter click preview on game page
- [ ] Verify visual effects (flash, sparkles)
- [ ] Check sound effects work
- [ ] Test with/without custom models

## 🐛 Common Issues

### "View in AR" doesn't work
- ✅ Use Safari on iOS, Chrome on Android
- ✅ Ensure HTTPS (required for AR)
- ✅ Check device supports AR (iPhone 6S+, ARCore Android)

### Models don't load
- ✅ Check browser console (F12)
- ✅ Verify `.glb` file paths are correct
- ✅ Test model at https://gltf-viewer.donmccurdy.com/

### Effects don't show
- ✅ Check `scripts/effects.js` is loaded
- ✅ Look for JavaScript errors in console

## 📚 Documentation

- **Full AR Guide**: See `AR_GUIDE.md`
- **Model Creation**: See `models/README.md`
- **Original Game**: See main `README.md` (if exists)

## 🎉 Next Steps

1. **Test it out** - Try scanning a QR code!
2. **Create custom models** - Make it uniquely yours
3. **Share with players** - Deploy and enjoy!
4. **Explore enhancements** - See AR_GUIDE.md for ideas

## 💡 Pro Tips

- **Better AR tracking**: Use textured surfaces (tables, floors)
- **Lighting matters**: AR works best in well-lit environments
- **Model optimization**: Smaller files = faster loading
- **Test early**: Try AR on real devices before the event

---

**Questions or issues?** Check the code comments or `AR_GUIDE.md` for detailed explanations.

**Have fun with your AR Hunt! 🎮✨**
