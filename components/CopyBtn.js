import React from 'react'

function CopyBtn() {
  return (
    <button className='flex ms-auto mb-2 gap-1 opacity-0 group-hover:opacity-100 group-active:text-indigo-500 group-active:duration-0 transition-all duration-700 text-gray-300 active:text-indigo-500'>
        <span className='opacity-0 text-indigo-500 transition-all duration-700 group-active:duration-0 group-active:opacity-100'>copied!</span>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9 18q-.825 0-1.413-.588T7 16V4q0-.825.588-1.413T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.588 1.413T18 18H9Zm0-2h9V4H9v12Zm-4 6q-.825 0-1.413-.588T3 20V7q0-.425.288-.713T4 6q.425 0 .713.288T5 7v13h10q.425 0 .713.288T16 21q0 .425-.288.713T15 22H5ZM9 4v12V4Z"/></svg>
    </button>
  )
}

export default CopyBtn