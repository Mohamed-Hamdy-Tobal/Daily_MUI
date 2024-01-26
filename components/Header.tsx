import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-500 p-4 text-white">
            <div className="container mx-auto">
                <div className="hold flex justify-between items-center">
                    <Link href='/' className="text-2xl font-semibold">My React App</Link>
                    <nav className="mt-2">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href='/' className="hover:text-gray-300">Home</Link>
                            </li>
                            <li>
                                <Link href='/todos' className="hover:text-gray-300">Todos</Link>
                            </li>
                            <li>
                                <Link href='/contact' className="hover:text-gray-300">Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
