import React, { useState } from 'react';


function DropdownMenu({ options , nameButton }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="dropdown">
            <p className='text-primary-color text-[40px] mb-1 mt-5'> {nameButton} <button className='text-white text-[25px] mb-1 mt-5' onClick={()=>isOpen ? setIsOpen(false) : setIsOpen(true) }> <i className="fa-solid fa-chevron-down"></i></button></p>
            {isOpen && (
                <ul className="dropdown-menu transition opacity delay-300 ease-in-out">
                    {options.map((option) => (
                        <li className='mb-2 text-[20px]' key={option.value}>
                            {option.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default DropdownMenu;
