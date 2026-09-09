"use client"

import PomoTimer from '@/components/PomoTimer/PomoTimer'
import Silk from '@/components/bg/Silk'

const page = () => {
  return (
    <div className='relative w-full h-full min-h-screen overflow-hidden flex flex-col justify-center items-center'>
      <div className='absolute inset-0 -z-10'>
        <Silk
          speed={5}
          scale={1}
          color="#5227FF"
          noiseIntensity={1.5}
          rotation={0}
        />
      </div>
      <div className='relative flex flex-col justify-center items-center gap-2'>
        <h1 className='text-white text-6xl font-black'>Pomodoro Timer</h1>
        <PomoTimer />
      </div>
    </div>
  )
}

export default page