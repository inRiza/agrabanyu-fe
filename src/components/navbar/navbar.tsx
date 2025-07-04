import React from 'react'

export function Navbar() {
  return (
    <div className="fixed top-4 left-6 right-6 px-10 py-4 flex bg-transparent backdrop-blur-2xl border-1 border-grey-main rounded-full">
        <div className="flex-1 gap-2 items-center">

        </div>
        <div className="flex gap-4 items-center">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <button className="button-main px-4 py-2">Login</button>
        </div>
    </div>
  )
}
