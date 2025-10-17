import { audioEngine } from '../../audio/audioEngine';
import { TrackParams, TrackState } from '../../store/slices/tracksSlice';

const useTrackParams = (trackId: keyof TrackState) => {
  if (!trackId) throw new Error(`No such track with: ${trackId}`);

  const updateParam = (paramName: keyof TrackParams, value: number) => {
    if (trackId === 'track1') {
      switch (paramName) {
        case 'param1':
          audioEngine.kickSynth.setFrequencer(Math.round(value * 0.5) + 20);
          break;

        case 'param2':
          audioEngine.kickSynth.setDecay(value * 0.05 + 0.01);
          break;

        case 'param3':
          audioEngine.kickSynth.setPitchEnvDepth(value * 0.07);
          break;

        case 'param4':
          audioEngine.kickSynth.setPitchEnv(value * 0.005 + 0.001);
          break;

        default:
          break;
      }
    }

    if (trackId === 'track2') {
      switch (paramName) {
        case 'param1':
          audioEngine.hitSynth.setFrequency(value * 4);
          break;

        case 'param2':
          audioEngine.hitSynth.setDecay(value * 0.06);
          break;

        case 'param3':
          audioEngine.hitSynth.setPitchEnv(value * 0.03);
          break;

        case 'param4':
          // audioEngine.hitSynth.setBitReduction(value * 0.16);
          break;

        default:
          break;
      }
    }

    if (trackId === 'track3') {
      switch (paramName) {
        case 'param1':
          audioEngine.hatSynth.setFrequency(value * 100);
          break;

        case 'param2':
          audioEngine.hatSynth.setDecay(value * 0.01);
          break;

        case 'param3':
          // audioEngine.hitSynth.setPitchEnv(value * 0.03);
          break;

        case 'param4':
          // audioEngine.hitSynth.setBitReduction(value * 0.16);
          break;

        default:
          break;
      }
    }
  };
  return updateParam;
};

export default useTrackParams;
