import { TimerState } from "@/hooks/useTimer";

type Props = {
    start: () => void;
    toggle: () => void;
    reset: () => void;
    timerState: TimerState
}

const ControlButtons = ({ start, toggle, reset, timerState } : Props) => {
  return (
    <div className='flex justify-center items-center gap-2'>

        <button 
            className='rounded-2xl px-12 py-3 bg-white text-xl font-semibold hover:bg-white/10 hover:text-white border border-white hover:border-white/10 cursor-pointer transition-colors duration-100'
            onClick={() => {
                if (!timerState.started) start();
                else toggle();
            }}
        >
            {
                !timerState.started ? "Start" :
                timerState.active ? "Pause" :
                "Resume"
            }
        </button>

        <button 
            className='rounded-2xl px-8 py-3 bg-gray-500 text-xl text-white font-semibold hover:bg-white/10 hover:text-white border border-gray-500 hover:border-white/10 cursor-pointer transition-colors duration-100'
            onClick={() => reset()}
        >
            Reset
        </button>
    </div>
  )
}

export default ControlButtons