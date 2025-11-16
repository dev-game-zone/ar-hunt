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
        // Animated models (have built-in animations)
        'astronaut': {
            url: 'https://modelviewer.dev/shared-assets/models/Astronaut.glb',
            animated: true,
            description: '🚀 Astronaut waving'
        },
        'parrot': {
            url: 'https://modelviewer.dev/shared-assets/models/Parrot.glb',
            animated: true,
            description: '🦜 Flying parrot'
        },
        'horse': {
            url: 'https://modelviewer.dev/shared-assets/models/Horse.glb',
            animated: true,
            description: '🐴 Galloping horse'
        },
        'robot': {
            url: 'https://modelviewer.dev/shared-assets/models/RobotExpressive/RobotExpressive.glb',
            animated: true,
            description: '🤖 Dancing robot'
        },
        'stork': {
            url: 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Stork/glTF/Stork.gltf',
            animated: true,
            description: '🦩 Flying stork'
        },

        // Static models (no animation, but still cool)
        'helmet': {
            url: 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/DamagedHelmet/glTF/DamagedHelmet.gltf',
            animated: false,
            description: '🪖 Damaged helmet'
        },
        'avocado': {
            url: 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Avocado/glTF/Avocado.gltf',
            animated: false,
            description: '🥑 Avocado'
        },
        'duck': {
            url: 'https://modelviewer.dev/shared-assets/models/glTF-Sample-Models/2.0/Duck/glTF/Duck.gltf',
            animated: false,
            description: '🦆 Rubber duck'
        },
        'sphere': {
            url: 'https://modelviewer.dev/shared-assets/models/reflective-sphere.gltf',
            animated: false,
            description: '⚪ Reflective sphere'
        },
        'mixer': {
            url: 'https://modelviewer.dev/shared-assets/models/Mixer.glb',
            animated: false,
            description: '🎛️ Audio mixer'
        },
        'chair': {
            url: 'https://modelviewer.dev/shared-assets/models/Chair.glb',
            animated: false,
            description: '🪑 Modern chair'
        },
    },

    // Assignment mode: 'random', 'sequential', or 'letter-specific'
    assignmentMode: 'sequential', // Change to 'random' for random models each time

    // Prefer animated models?
    preferAnimated: true, // Set to true to favor animated models

    // Auto-activate AR mode?
    autoActivateAR: true, // Set to true to automatically trigger AR on mobile devices

    // Model customization per letter
    getModelForLetter(letter) {
        // Get all available models
        const modelEntries = Object.entries(this.modelLibrary);
        let selectedModel;

        // Filter for animated if preferred
        const availableModels = this.preferAnimated
            ? modelEntries.filter(([key, model]) => model.animated)
            : modelEntries;

        // Fall back to all models if no animated ones available
        const modelsToUse = availableModels.length > 0 ? availableModels : modelEntries;

        if (this.assignmentMode === 'random') {
            // Pick a random model each time (different every scan)
            const randomIndex = Math.floor(Math.random() * modelsToUse.length);
            selectedModel = modelsToUse[randomIndex][1];
        } else if (this.assignmentMode === 'sequential') {
            // Assign models based on letter position (consistent per letter)
            const letterIndex = letter.charCodeAt(0) - 65; // A=0, B=1, etc.
            selectedModel = modelsToUse[letterIndex % modelsToUse.length][1];
        } else {
            // letter-specific: you can map specific letters to specific models
            const letterModelMap = {
                'A': 'astronaut',
                'D': 'parrot',
                'N': 'horse',
                'E': 'robot',
                'L': 'stork',
                'I': 'mixer',
                'O': 'avocado',
                // Add more mappings as needed
            };
            const modelKey = letterModelMap[letter] || 'astronaut';
            selectedModel = this.modelLibrary[modelKey];
        }

        // You can upload custom GLB files for each letter to your repo
        // and reference them here like: `../../models/letter_${letter}.glb`

        return {
            src: selectedModel.url,
            color: this.letterColors[letter] || '#007bff',
            scale: '1 1 1',
            rotation: '0 0 0',
            animation: 'auto-rotate',
            animated: selectedModel.animated,
            description: selectedModel.description
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
