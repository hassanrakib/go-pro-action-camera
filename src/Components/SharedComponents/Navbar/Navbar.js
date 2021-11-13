import React from 'react';
import { Disclosure} from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import logo from '../../../logo.jpg';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { useHistory } from "react-router-dom";

const Navbar = () => {
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const navigation = [
        { name: 'Dashboard', href: '/dashboard', current: false },
        { name: 'Explore', href: '/explore', current: false },
    ]

    const { user, signOutUser } = useAuth();
    const history = useHistory();


    return (
        <Disclosure as="nav" className='shadow-lg bg-white h-16'>
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex-shrink-0 flex items-center">
                                    <Link to='/'>
                                        <img
                                            className="block lg:hidden h-6 w-auto"
                                            src={logo}
                                            alt="GoPro"
                                        />
                                    </Link>
                                    <Link to='/'>
                                        <img
                                            className="hidden lg:block h-8 w-auto"
                                            src={logo}
                                            alt="GoPro"
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'hover:bg-gray-700 hover:text-white',
                                                    'px-3 py-2 rounded-md text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    onClick={
                                        user?.email ?
                                        signOutUser
                                        :
                                        () => history.push('/signin')
                                    }
                                    type="button"
                                    className="bg-gray-800 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white block p-2"
                                >
                                    {
                                        user?.email ?
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                </svg>
                                                <span>Log out</span>
                                            </div>
                                            :
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                                                </svg>
                                                <span>Sign in</span>
                                            </div>
                                    }
                                </button>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden absolute bg-white w-full z-50">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as={Link}
                                    to={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;