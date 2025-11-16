# AR Hunt - Augmented Reality Guide

## 🎯 What's New?

Your QR hunt has been upgraded with AR (Augmented Reality) features! Now when players scan QR codes, they'll see 3D letters that can be viewed in augmented reality on their phones.

## ✨ Features Added

### 1. **AR Viewer After Scanning**
- When a QR code is scanned, a 3D model appears
- Players can rotate, zoom, and interact with the 3D letter
- "View in AR" button places the letter in real space using their camera

### 2. **3D Preview on Game Page**
- Click any collected letter to see it in 3D
- Hover effects show which letters are clickable (eye icon appears)
- Same AR capabilities as the scan page

### 3. **Visual Effects**
- Screen flash when collecting letters
- Particle burst animations
- Floating text notifications
- Sound effects for feedback
- Sparkle effects

### 4. **Cross-Platform AR Support**
- **iOS**: Uses AR Quick Look (built into Safari)
- **Android**: Uses Scene Viewer (built into Chrome)
- **Desktop**: Shows 3D viewer (no AR, but still interactive)

## 🎨 Adding Custom 3D Letter Models

Right now, the app uses placeholder 3D models. Here's how to add your own custom letter models:

### Option 1: Quick Setup (Free Online Tools)

1. **Create 3D Letters** using one of these free tools:
   - **Tinkercad** (easiest): https://www.tinkercad.com/
     - Use text tool, export as GLB
   - **Blender** (powerful): https://www.blender.org/
     - Create text object, export as GLB format
   - **Spline** (modern): https://spline.design/
     - Create 3D text, export as GLB

2. **Name your files**: `letter_A.glb`, `letter_B.glb`, etc.

3. **Upload to your repo**:
   ```
   ar-hunt/
   ├── models/
   │   ├── letter_A.glb
   │   ├── letter_B.glb
   │   ├── letter_C.glb
   │   └── ...
   ```

4. **Update `scripts/ar-models.js`**:
   ```javascript
   getModelForLetter(letter) {
     return {
       src: `../../models/letter_${letter}.glb`,
       color: this.letterColors[letter] || '#007bff',
       scale: '1 1 1',
       rotation: '0 0 0'
     };
   }
   ```

### Option 2: Use Free 3D Model Libraries

Find pre-made letter models:
- **Sketchfab**: https://sketchfab.com/ (search "alphabet letters 3D")
- **Google Poly Archive**: https://poly.pizza/
- **Turbosquid Free**: https://www.turbosquid.com/Search/3D-Models/free/alphabet

Download as `.glb` format (preferred for AR) or `.gltf`

### Option 3: Procedural Generation

For a more advanced approach, you could generate letters programmatically using Three.js:

```javascript
// This requires additional setup but allows dynamic generation
// See Three.js TextGeometry documentation
```

## 📱 Testing AR Features

### On iPhone/iPad:
1. Open in Safari (required for AR Quick Look)
2. Scan QR code
3. Tap "View in AR" button
4. Grant camera permission
5. Point camera at floor/surface
6. Letter appears in 3D in your space!

### On Android:
1. Open in Chrome
2. Scan QR code  
3. Tap "View in AR" button
4. Grant camera permission
5. Scene Viewer launches automatically
6. Place letter in your environment

### On Desktop:
- 3D viewer shows (no AR)
- Can still rotate and zoom
- Great for testing models

## 🎮 How Players Use It

1. **Enter access code** (same as before)
2. **Tap "Scan QR Code"**
3. **Scan a QR code** → See flash/sparkle effects
4. **3D letter appears** → Can rotate and inspect
5. **Tap "View in AR"** → See it in real space
6. **Close viewer** → Returns to game page
7. **Click collected letters** → Preview them in 3D anytime

## 🔧 Configuration

### Customize Colors
Edit `scripts/ar-models.js` to change letter colors:
```javascript
letterColors: {
  'A': '#FF6B6B',  // Red
  'B': '#4ECDC4',  // Teal
  // ... etc
}
```

### Adjust 3D Model Settings
In `scan.html` and `game.html`, you can modify:
```html
<model-viewer
  auto-rotate              <!-- Enable/disable auto-rotation -->
  auto-rotate-delay="1000" <!-- Delay before auto-rotate -->
  rotation-per-second="30deg" <!-- Rotation speed -->
  camera-orbit="0deg 75deg 2m" <!-- Camera position -->
  shadow-intensity="1"     <!-- Shadow darkness (0-2) -->
>
```

### Disable Effects
In `scan.html`, comment out effect calls:
```javascript
// Effects.screenFlash('rgba(40, 167, 69, 0.3)', 400);
// Effects.playSound('success');
// Effects.createSparkle(window.innerWidth / 2, window.innerHeight / 2);
```

## 🚀 Performance Tips

1. **Optimize 3D Models**:
   - Keep file sizes under 2MB per model
   - Use Draco compression for GLB files
   - Reduce polygon count (< 10k polygons per letter)

2. **Lazy Loading**:
   - Models load only when needed
   - First scan may take slightly longer

3. **Caching**:
   - Browser caches models after first load
   - Subsequent views are instant

## 🐛 Troubleshooting

### "View in AR" button doesn't appear
- Check if device supports AR (iPhone 6S+, Android with ARCore)
- Ensure browser is up to date (Safari on iOS, Chrome on Android)
- Try opening in default browser (not in-app browsers)

### 3D model doesn't load
- Check console for errors (F12 → Console)
- Verify GLB file URL is correct
- Test model at https://gltf-viewer.donmccurdy.com/

### AR placement is weird
- Adjust `ar-scale` attribute: `ar-scale="fixed"` or `ar-scale="auto"`
- Ensure good lighting for AR tracking
- Point at textured surfaces (not blank walls)

## 📚 Next Steps

### Future Enhancements:
1. **Custom animations** for each letter
2. **Particle trails** following letters in AR
3. **Multi-letter AR scenes** showing full word
4. **AR mini-games** (catch letters, word puzzles)
5. **Persistent AR** (letters stay in place when you walk away)
6. **Multiplayer AR** (see other players' letters)

### Advanced Features:
- WebXR for more control
- 8th Wall for marker tracking
- Unity WebGL builds for complex 3D
- AR.js for marker-based AR directly on QR codes

## 📖 Resources

- **Model Viewer Docs**: https://modelviewer.dev/
- **WebXR Guide**: https://immersiveweb.dev/
- **GLB File Specs**: https://www.khronos.org/gltf/
- **AR Quick Look (iOS)**: https://developer.apple.com/augmented-reality/quick-look/
- **Scene Viewer (Android)**: https://developers.google.com/ar/develop/scene-viewer

---

## 🎉 Have Fun!

Your QR hunt is now an AR hunt! Players will love seeing letters come to life in 3D. Customize the models, effects, and colors to make it uniquely yours.

Questions? Check the code comments in:
- `scripts/ar-models.js` - Model configuration
- `scripts/effects.js` - Visual effects
- `pages/scan/scan.html` - AR viewer implementation
