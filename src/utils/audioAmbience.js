// Procedural Web Audio API Rainforest Ambience Generator
// Creates gentle rain whisper, pink-noise forest breeze, and harmonic chimes without any external audio files.

let audioCtx = null;
let masterGain = null;
let isPlaying = false;
let intervalId = null;

export function toggleRainforestAmbience(onStateChange) {
  if (isPlaying) {
    stopRainforestAmbience();
    if (onStateChange) onStateChange(false);
    return false;
  } else {
    startRainforestAmbience();
    if (onStateChange) onStateChange(true);
    return true;
  }
}

export function startRainforestAmbience() {
  try {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.2, audioCtx.currentTime + 2);
    masterGain.connect(audioCtx.destination);

    // 1. Gentle Rain (Filtered White Noise)
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      output[i] = Math.random() * 2 - 1;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter to make it sound like gentle rain in forest leaves
    const rainFilter = audioCtx.createBiquadFilter();
    rainFilter.type = 'lowpass';
    rainFilter.frequency.value = 1000;

    const rainGain = audioCtx.createGain();
    rainGain.gain.value = 0.08;

    whiteNoise.connect(rainFilter);
    rainFilter.connect(rainGain);
    rainGain.connect(masterGain);
    whiteNoise.start();

    // 2. Wind Flutter / Deep Mountain Air
    const windFilter = audioCtx.createBiquadFilter();
    windFilter.type = 'bandpass';
    windFilter.frequency.value = 320;
    windFilter.Q.value = 2.5;

    const windGain = audioCtx.createGain();
    windGain.gain.value = 0.06;

    whiteNoise.connect(windFilter);
    windFilter.connect(windGain);
    windGain.connect(masterGain);

    // 3. Gentle Tibetan meditation chime note every 8 seconds
    const playChime = () => {
      if (!isPlaying || !audioCtx) return;
      try {
        const osc = audioCtx.createOscillator();
        const chimeGain = audioCtx.createGain();
        const frequencies = [528, 660, 792, 1056]; // Solfeggio meditative frequencies
        const freq = frequencies[Math.floor(Math.random() * frequencies.length)];

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

        chimeGain.gain.setValueAtTime(0.001, audioCtx.currentTime);
        chimeGain.gain.exponentialRampToValueAtTime(0.04, audioCtx.currentTime + 0.1);
        chimeGain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + 4.5);

        osc.connect(chimeGain);
        chimeGain.connect(masterGain);

        osc.start();
        osc.stop(audioCtx.currentTime + 5);
      } catch (err) {
        // ignore
      }
    };

    intervalId = setInterval(playChime, 8500);
    playChime();

    isPlaying = true;
    return true;
  } catch (e) {
    console.warn("Audio Context not started yet:", e);
    return false;
  }
}

export function stopRainforestAmbience() {
  if (masterGain && audioCtx) {
    try {
      masterGain.gain.linearRampToValueAtTime(0.001, audioCtx.currentTime + 1);
      setTimeout(() => {
        if (audioCtx && audioCtx.state !== 'closed') {
          audioCtx.suspend();
        }
      }, 1000);
    } catch (e) {
      // ignore
    }
  }
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
  }
  isPlaying = false;
}
