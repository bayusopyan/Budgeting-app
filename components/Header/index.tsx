import React from 'react'


export default function Header() {
    return (
        <nav className='bg-white border-gary-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900'>
            <div className='container flex flex-wrap items-center justify-between mx-auto'>
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Budgeting App</span>
                </a>
            </div>
        </nav >
    )
}