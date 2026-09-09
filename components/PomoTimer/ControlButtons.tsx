import { TimerState } from "@/hooks/useTimer";
import { FaAngleRight, FaPlay } from "react-icons/fa";
import { FaArrowRotateRight } from "react-icons/fa6";
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
    <div className='flex justify-center items-center gap-2'>

        <button 
            className='rounded-2xl px-12 py-3 bg-white text-xl font-semibold hover:bg-white/10 hover:text-white border border-white hover:border-white/10 cursor-pointer transition-colors duration-100 flex justify-center items-center gap-2'
            onClick={() => {
                if (!timerState.started) start();
                else toggle();
            }}
        >
            <FaPlay size={15} />
            <span>
                {
                    !timerState.started ? "Start" :
                    timerState.active ? "Pause" :
                    "Resume"
                } 
            </span>
        </button>

        <button 
            className='rounded-2xl px-8 py-3 bg-gray-500 text-xl text-white font-semibold hover:bg-white/10 hover:text-white border border-gray-500 hover:border-white/10 cursor-pointer transition-colors duration-100 flex justify-center items-center gap-2'
            onClick={() => reset()}
        >
            <FaArrowRotateRight  size={15} />
            <span>Reset</span>
        </button>

        <button 
            className='rounded-2xl px-8 py-3 bg-gray-700 text-xl text-white font-semibold hover:bg-white/10 hover:text-white border border-gray-700 hover:border-white/10 cursor-pointer transition-colors duration-100 flex justify-center items-center gap-2'
            onClick={() => skip()}
        >
            <span>Skip</span>
            <FaAngleRight size={15} />
        </button>
    </div>
  )
}

export default ControlButtons