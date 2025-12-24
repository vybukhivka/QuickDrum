import * as Tone from 'tone';
import store from '../store/store';

export const createKickSynth = () => {
	const baseFreq = 400;

  const oscillator1 = new Tone.Oscillator({
    type: 'sine',
    frequency: baseFreq,
    volume: -14,
  });

  const noise = new Tone.Noise({ type: 'pink', volume: -48 });

  const amplitudeEnvelope = new Tone.AmplitudeEnvelope({
    attack: 0.005,
    decay: 0.1,
    sustain: 0,
    release: 0.1,
  });

  const pitchEnvelope = new Tone.FrequencyEnvelope({
    attack: 0.005,
    decay: 0.01,
    sustain: 0,
    release: 0.01,
    baseFrequency: baseFreq,
    octaves: 3.5,
  });

  const filter = new Tone.Filter({
    type: 'lowpass',
    frequency: 1450,
    rolloff: -24,
  });

  pitchEnvelope.connect(oscillator1.frequency);
  oscillator1.connect(filter);
  noise.connect(filter);
  filter.connect(amplitudeEnvelope);
  amplitudeEnvelope.toDestination();

  oscillator1.start();
  noise.start();

  const trigger = (time = Tone.now()) => {
    const attack = amplitudeEnvelope.attack;
    const release = amplitudeEnvelope.release;
    const timing = time + attack + release;
    amplitudeEnvelope.triggerAttack(time);
    amplitudeEnvelope.triggerRelease(timing);
    pitchEnvelope.triggerAttackRelease(attack + release, time);
  };

  const setFrequencer = (frequency: number) => {
    pitchEnvelope.baseFrequency = frequency;
    oscillator1.frequency.value = frequency;
  };

  const setDecay = (time: number) => {
    amplitudeEnvelope.decay = time;
    amplitudeEnvelope.release = time;
  };

  const setPitchEnv = (time: number) => {
    pitchEnvelope.decay = time;
    pitchEnvelope.release = time;
  };

  const setPitchEnvDepth = (depth: number) => {
    pitchEnvelope.octaves = depth;
  };

  const dispose = () => {
    oscillator1.stop();
    noise.stop();
    oscillator1.dispose();
    noise.dispose();
    amplitudeEnvelope.dispose();
    pitchEnvelope.dispose();
    filter.dispose();
  };

  return {
    trigger,
    setPitchEnv,
    setDecay,
    setFrequencer,
    setPitchEnvDepth,
    dispose,
  };
};
