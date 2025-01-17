import { useAppSelector } from '../../../../store/hooks';
import { selectSources } from '../../../../store/slices/modulationSlice';
import MixerSend from '../../../ui/MixerSend/MixerSend';

const RND: React.FC = () => {
  const sources = useAppSelector(selectSources);
  const freq = sources.RND.freq;
  return (
    <div className="flex h-[134px] w-[134px] flex-col items-center justify-end gap-y-2 rounded-3xl border border-slate-600">
      RND wave
      <div className="flex w-full justify-center p-[16px]">
        <MixerSend
          type="modulator"
          fxName="RND"
          paramName="freq"
          paramValue={freq}
        />
      </div>
    </div>
  );
};

export default RND;
