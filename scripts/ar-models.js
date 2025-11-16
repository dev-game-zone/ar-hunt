// AR 3D Models Configuration
// This file manages 3D model URLs and configurations for AR display

const AR_CONFIG = {
    // Color scheme for each letter
    letterColors: {
        'A': '#FF6B6B', 'B': '#4ECDC4', 'C': '#45B7D1', 'D': '#FFA07A',
        'E': '#98D8C8', 'F': '#F7DC6F', 'G': '#BB8FCE', 'H': '#85C1E2',
        'I': '#F8B739', 'J': '#52B788', 'K': '#E76F51', 'L': '#2A9D8F',
        'M': '#E63946', 'N': '#F77F00', 'O': '#06FFA5', 'P': '#7209B7',
        'Q': '#F72585', 'R': '#4361EE', 'S': '#3A86FF', 'T': '#8338EC',
        'U': '#FB5607', 'V': '#FFBE0B', 'W': '#06D6A0', 'X': '#EF476F',
        'Y': '#FFD60A', 'Z': '#073B4C'
    },

    // Free 3D models you can use (replace with your own hosted models)
    modelLibrary: {
        // Google's free sample models
        'default': 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
        'letter_basic': 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf',
        'trophy': 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Avocado/glTF/Avocado.gltf',
    },

    // Model customization per letter
    getModelForLetter(letter) {
        // For now, using a simple approach
        // You can upload custom GLB files for each letter to your repo
        // and reference them here like: `../../models/letter_${letter}.glb`

        return {
            src: this.modelLibrary.default,
            color: this.letterColors[letter] || '#007bff',
            scale: '1 1 1',
            rotation: '0 0 0',
            animation: 'auto-rotate'
        };
    },

    // Instructions for creating custom 3D letter models
    helpText: `
    To add custom 3D letter models:
    
    1. Create 3D letter models using:
       - Blender (free): Export as .glb
       - Tinkercad (easy, web-based)
       - Spline (modern, web-based)
    
    2. Save models in /models/ folder:
       models/letter_A.glb
       models/letter_B.glb
       etc.
    
    3. Update getModelForLetter() to return:
       src: '../../models/letter_' + letter + '.glb'
  `
};

// Generate dynamic 3D text using procedural approach
// This creates a data URL for simple 3D text
function generateTextModel(letter, color) {
    // This is a placeholder - in production, you'd want actual GLB files
    // For now, we'll return a model URL
    return AR_CONFIG.getModelForLetter(letter);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AR_CONFIG, generateTextModel };
}
