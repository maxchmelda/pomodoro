import PomoTimer from '@/components/PomoTimer/PomoTimer'

const page = () => {
  return (
    <div className='w-full h-full min-h-screen bg-radial from-gray-800 to-black flex flex-col justify-center items-center'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-white font-light text-5xl'>Pomodoro Timer</h1>
        <PomoTimer />
      </div>
    </div>
  )
}

export default page