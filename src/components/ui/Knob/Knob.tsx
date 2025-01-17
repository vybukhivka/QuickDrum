import useDrag from '../../../hooks/useDrag/useDrag';
import { KnobProps } from './types';

const Knob: React.FC<Partial<KnobProps>> = ({
  trackId,
  paramName,
  paramValue,
  onActiveParam,
  fxName,
}) => {
  const {
    elementRef: knob,
    angle,
    startDrag,
  } = useDrag({
    initialValue: paramValue,
    trackId,
    paramName,
    setActiveParam: onActiveParam,
    fxName,
  });

  return (
    <>
      <div
        ref={knob}
        onMouseDown={startDrag}
        style={{ transform: `rotate(${angle}deg)`, userSelect: 'none' }}
        className="flex h-[40px] w-[40px] origin-center items-center justify-start rounded-full border border-slate-400 bg-transparent p-[6px]"
      >
        <div className="h-[2px] w-[5px] rounded-lg border bg-white"></div>
      </div>
    </>
  );
};
export default Knob;
