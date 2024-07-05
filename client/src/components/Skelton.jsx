import React from 'react'

const Skelton = () => {
  return (
    <div className="flex w-72 ml-7 flex-col gap-4">
      <div className="skeleton h-52 w-full"></div>
      <div className="skeleton h-4 w-28"></div>
      <div className="skeleton h-4 w-full"></div>
      <div className="skeleton h-4 w-full"></div>
    </div>
  );
}

export default Skelton