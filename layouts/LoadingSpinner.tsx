import React, { memo } from 'react'
import { AiOutlineLoading } from 'react-icons/ai'

const LoadingSpinner = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 h-auto p-6">
      <AiOutlineLoading className="animate-spin text-2xl text-primary" />
      <p className="text-gray-400">Loading...</p>
    </div>
  )
}

export default memo(LoadingSpinner)