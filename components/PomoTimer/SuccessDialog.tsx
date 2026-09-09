import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { FaPlay } from 'react-icons/fa6';

type Props = {
    show: boolean;
    close: () => void;
    start: () => void;
}

const SuccessDialog = ({ show, close, start} : Props) => {
  return (
    <Dialog open={show} onOpenChange={close}>
            <DialogContent
                className='bg-black/70 backdrop-blur-xl border border-white/10 ring-0 rounded-2xl text-white p-8 sm:max-w-sm shadow-lg shadow-black/50'
            >
                <DialogHeader className='items-center text-center gap-2'>
                    <DialogTitle className='text-4xl font-semibold text-white'>Nice work! 💯</DialogTitle>
                    <DialogDescription className='text-white/70 text-lg'>You completed all sessions.</DialogDescription>
                </DialogHeader>
                <DialogFooter className='bg-transparent border-0 items-center justify-center sm:justify-center text-center'>
                    <button
                        className='rounded-2xl px-10 py-3 bg-white text-sm font-semibold text-gray-900 shadow-sm shadow-black/30 hover:bg-white/90 active:scale-[0.97] border border-white cursor-pointer transition-all duration-150 flex justify-center items-center gap-2'
                        onClick={() => {
                            start();
                            close();
                        }}
                    >
                        <FaPlay size={13} />
                        <span className='text-md'>Start another timer</span>
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
  )
}

export default SuccessDialog