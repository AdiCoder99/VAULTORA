import React from 'react'

const Loading = () => {
  return (
    <div className='fixed inset-0 flex items-center justify-center bg-white z-50'>
      <div className="flex flex-col items-center gap-3">
        <div className="w-14 h-14 border-4 border-green-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-white text-sm">Loading...</p>
      </div>
    </div>
  )
}

export default Loading
