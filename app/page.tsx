"use client"

import PomoTimer from '@/components/PomoTimer/PomoTimer'
import Silk from '@/components/bg/Silk'

const page = () => {
  return (
    <div className='relative w-full min-h-[100dvh] overflow-x-hidden flex flex-col justify-center items-center px-4 py-[min(2.5rem,5vh)]'>
      <div className='absolute inset-0 -z-10'>
        <Silk
          speed={5}
          scale={1}
          color="#5227FF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className='relative w-full max-w-lg flex flex-col justify-center items-center gap-2'>
        <h1 className='text-white text-[min(8vw,9vh,3.75rem)] leading-tight font-semibold tracking-[0.03em] text-center'>Pomodoro Timer</h1>
        <p className='text-white/60 text-[min(4vw,4.5vh,1.125rem)] text-center [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]'>Work in focused sprints, rest with intention.</p>
        <PomoTimer />
      </div>
    </div>
  )
}

export default page