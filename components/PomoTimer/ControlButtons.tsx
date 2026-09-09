import { TimerState } from "@/hooks/useTimer";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { FaArrowRotateRight, FaPause } from "react-icons/fa6";
import { RiResetRightLine } from "react-icons/ri";

type Props = {
    start: () => void;
    toggle: () => void;
    reset: () => void;
    timerState: TimerState;
    skip: () => void;
}

const ControlButtons = ({ start, toggle, reset, skip, timerState } : Props) => {
  return (
    <div className='flex justify-center items-center gap-3'>

        <button
            className='rounded-2xl px-10 py-3 bg-white text-sm font-semibold text-gray-900 shadow-sm shadow-black/30 hover:bg-white/90 active:scale-[0.97] border border-white cursor-pointer transition-all duration-150 flex justify-center items-center gap-2'
            onClick={() => {
                if (!timerState.started) start();
                else toggle();
            }}
        >
            {
                timerState.active ? (
                    <FaPause />
                ) : (
                    <FaPlay size={13} />
                )
            }
            <span>
                {
                    !timerState.started ? "Start" :
                    timerState.active ? "Pause" :
                    "Resume"
                }
            </span>
        </button>

        <button
            className={`${!timerState.started && "hidden"} rounded-2xl px-6 py-3 bg-white/10 backdrop-blur-md text-sm font-semibold text-white/90 shadow-sm hover:bg-white/20 hover:text-white active:scale-[0.97] border border-white/20 cursor-pointer transition-all duration-150 flex justify-center items-center gap-2`}
            onClick={() => reset()}
        >
            <FaArrowRotateRight size={13} />
            <span>Reset</span>
        </button>

        <button
            className={`${!timerState.started && "hidden"} rounded-2xl px-6 py-3 bg-white/5 backdrop-blur-md text-sm font-semibold text-white/70 shadow-sm hover:bg-white/15 hover:text-white active:scale-[0.97] border border-white/15 cursor-pointer transition-all duration-150 flex justify-center items-center gap-2`}
            onClick={() => skip()}
        >
            <span>Skip</span>
            <FaAngleRight size={13} />
        </button>
    </div>
  )
}

export default ControlButtons