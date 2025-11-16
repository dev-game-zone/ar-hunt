# 3D Models Directory

Place your custom 3D letter models here.

## File Naming Convention

- `letter_A.glb`
- `letter_B.glb`
- `letter_C.glb`
- etc.

## Recommended Specifications

- **Format**: `.glb` (preferred) or `.gltf`
- **File Size**: < 2MB per model
- **Polygons**: < 10,000 per model
- **Compression**: Use Draco compression for smaller files

## How to Create Models

### Free Online Tools:
1. **Tinkercad** - https://www.tinkercad.com/
   - Easiest for beginners
   - Use text tool, customize, export as GLB

2. **Blender** - https://www.blender.org/
   - Professional tool, free
   - Add text object, extrude, export GLB

3. **Spline** - https://spline.design/
   - Modern, web-based
   - Great UI, easy exports

### Free Model Libraries:
- Sketchfab: https://sketchfab.com/
- Poly Pizza: https://poly.pizza/
- Free3D: https://free3d.com/

## Example: Creating a Letter in Tinkercad

1. Go to https://www.tinkercad.com/
2. Create new design
3. Add Text shape from right panel
4. Type your letter (e.g., "A")
5. Adjust size (recommended: 50mm height)
6. Export → Download for 3D Printing → .GLB format
7. Save as `letter_A.glb` in this folder

## Testing Your Models

Test models before deploying:
- **Online Viewer**: https://gltf-viewer.donmccurdy.com/
- **Model Viewer**: https://modelviewer.dev/editor/

## Current Status

⚠️ **No custom models yet** - Currently using placeholder models from Google's Model Viewer examples.

To activate your custom models, update `scripts/ar-models.js`:
```javascript
getModelForLetter(letter) {
  return {
    src: `../../models/letter_${letter}.glb`,
    // ... rest of config
  };
}
```
