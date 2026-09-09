import PomoTimer from '@/components/PomoTimer/PomoTimer'

const page = () => {
  return (
    <div 
      className='w-full h-full min-h-screen  flex flex-col justify-center items-center'
      style={{
        backgroundImage: 'url(bg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-white font-bold text-5xl'>Pomodoro Timer</h1>
        <PomoTimer />
      </div>
    </div>
  )
}

export default page