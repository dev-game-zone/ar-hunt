// Visual and Audio Effects for AR Hunt

const Effects = {
    // Particle burst effect
    createParticleBurst(x, y, color = '#28a745') {
        const particleCount = 20;
        const container = document.body;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.borderRadius = '50%';
            particle.style.backgroundColor = color;
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '9999';
            container.appendChild(particle);

            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 2 + Math.random() * 3;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            let px = x;
            let py = y;
            let opacity = 1;
            let life = 60;

            const animate = () => {
                if (life <= 0) {
                    particle.remove();
                    return;
                }

                px += vx;
                py += vy + (60 - life) * 0.1; // gravity
                opacity -= 0.016;
                life--;

                particle.style.left = px + 'px';
                particle.style.top = py + 'px';
                particle.style.opacity = opacity;

                requestAnimationFrame(animate);
            };

            requestAnimationFrame(animate);
        }
    },

    // Flash effect
    screenFlash(color = 'rgba(40, 167, 69, 0.3)', duration = 300) {
        const flash = document.createElement('div');
        flash.style.position = 'fixed';
        flash.style.top = '0';
        flash.style.left = '0';
        flash.style.width = '100%';
        flash.style.height = '100%';
        flash.style.backgroundColor = color;
        flash.style.pointerEvents = 'none';
        flash.style.zIndex = '9998';
        flash.style.opacity = '1';
        flash.style.transition = `opacity ${duration}ms ease-out`;
        document.body.appendChild(flash);

        setTimeout(() => {
            flash.style.opacity = '0';
            setTimeout(() => flash.remove(), duration);
        }, 50);
    },

    // Pulse animation on element
    pulseElement(element, scale = 1.2, duration = 300) {
        if (!element) return;

        const originalTransform = element.style.transform || '';
        element.style.transition = `transform ${duration / 2}ms ease-out`;
        element.style.transform = `scale(${scale})`;

        setTimeout(() => {
            element.style.transform = originalTransform;
            setTimeout(() => {
                element.style.transition = '';
            }, duration / 2);
        }, duration / 2);
    },

    // Simple sound effect using Web Audio API
    playSound(type = 'success') {
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);

            if (type === 'success') {
                // Happy success sound
                oscillator.frequency.value = 523.25; // C5
                gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

                oscillator.start(audioContext.currentTime);
                oscillator.stop(audioContext.currentTime + 0.3);

                // Add second tone for harmony
                setTimeout(() => {
                    const osc2 = audioContext.createOscillator();
                    const gain2 = audioContext.createGain();
                    osc2.connect(gain2);
                    gain2.connect(audioContext.destination);
                    osc2.frequency.value = 659.25; // E5
                    gain2.gain.setValueAtTime(0.2, audioContext.currentTime);
                    gain2.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
                    osc2.start(audioContext.currentTime);
                    osc2.stop(audioContext.currentTime + 0.2);
                }, 100);
            } else if (type === 'complete') {
                // Victory fanfare
                const notes = [523.25, 587.33, 659.25, 783.99]; // C-D-E-G
                notes.forEach((freq, i) => {
                    setTimeout(() => {
                        const osc = audioContext.createOscillator();
                        const gain = audioContext.createGain();
                        osc.connect(gain);
                        gain.connect(audioContext.destination);
                        osc.frequency.value = freq;
                        gain.gain.setValueAtTime(0.3, audioContext.currentTime);
                        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.4);
                        osc.start(audioContext.currentTime);
                        osc.stop(audioContext.currentTime + 0.4);
                    }, i * 100);
                });
            }
        } catch (e) {
            console.log('Audio not supported:', e);
        }
    },

    // Sparkle effect
    createSparkle(x, y) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'fixed';
        sparkle.style.left = x + 'px';
        sparkle.style.top = y + 'px';
        sparkle.style.fontSize = '24px';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9999';
        sparkle.style.opacity = '1';
        sparkle.style.transition = 'all 1s ease-out';
        document.body.appendChild(sparkle);

        setTimeout(() => {
            sparkle.style.top = (y - 50) + 'px';
            sparkle.style.opacity = '0';
            sparkle.style.transform = 'scale(2)';
            setTimeout(() => sparkle.remove(), 1000);
        }, 50);
    },

    // Floating text animation
    floatingText(text, x, y, color = '#28a745') {
        const textEl = document.createElement('div');
        textEl.textContent = text;
        textEl.style.position = 'fixed';
        textEl.style.left = x + 'px';
        textEl.style.top = y + 'px';
        textEl.style.color = color;
        textEl.style.fontWeight = 'bold';
        textEl.style.fontSize = '24px';
        textEl.style.pointerEvents = 'none';
        textEl.style.zIndex = '9999';
        textEl.style.opacity = '1';
        textEl.style.transition = 'all 1.5s ease-out';
        textEl.style.textShadow = '2px 2px 4px rgba(0,0,0,0.3)';
        document.body.appendChild(textEl);

        setTimeout(() => {
            textEl.style.top = (y - 100) + 'px';
            textEl.style.opacity = '0';
            textEl.style.transform = 'scale(1.5)';
            setTimeout(() => textEl.remove(), 1500);
        }, 50);
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { Effects };
}
