import { useEffect, useState } from 'react';
import { TrackParams, TrackState } from '../../../store/slices/tracksSlice';
import { cn } from '../../../utils/cn';
import Knob from '../../ui/Knob/Knob';
import TrackDisplay from './TrackDisplay';
import useTrackParams from '../../../hooks/useDrag/useTrackParam';

type TrackProps = {
  trackData: [keyof TrackState, TrackParams];
  className?: string;
};

export type setActiveType = {
  paramName: keyof TrackState;
  value: number;
};

const Track: React.FC<TrackProps> = ({ trackData, className }) => {
  const [trackId, trackParams]: [keyof TrackState, TrackParams] = trackData;
  const [activeParam, setActiveParam] = useState<setActiveType>({
    paramName: 'inactive',
    value: 0,
  });
  const updateParam = useTrackParams(trackId);

  useEffect(() => {
    if (activeParam.paramName !== 'inactive') {
      updateParam(activeParam.paramName, activeParam.value);
    }
  }, [activeParam, updateParam]);

  return (
    <div className="flex flex-col items-center justify-between">
      <TrackDisplay activeParam={activeParam} />
      <div
        className={cn(
          'flex h-[154px] w-[154px] flex-wrap items-center justify-between gap-[20px] rounded-3xl border-2 p-[20px]',
          className,
        )}
      >
        {(Object.entries(trackParams) as [keyof TrackParams, number][]).map(
          ([paramName, value]) => (
            <Knob
              trackId={trackId}
              paramName={paramName}
              paramValue={value}
              key={paramName}
              onActiveParam={setActiveParam}
            />
          ),
        )}
      </div>
    </div>
  );
};

export default Track;
