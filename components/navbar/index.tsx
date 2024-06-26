/* eslint-disable @next/next/no-img-element */
'use client';

import { DEFAULT_USER_IMAGE } from '@/constants';
import { useNavbarVisibility } from '@/hooks/use-navbar-visibility';
import { useUser } from '@/hooks/use-user';
import { BellIcon, ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { FC, memo, useMemo } from 'react';
import { AccountMenu } from './account-menu';
import { MobileMenu } from './mobile-menu';
import { NavbarItem } from './navbar-item';

export const Navbar: FC = memo(() => {

    const { data: user } = useUser();
    const imageUrl = useMemo(() => user?.image ?? DEFAULT_USER_IMAGE, [user?.image]);

    const { showAccountMenu, showBackground, showMobileMenu, toggleAccountMenu, toggleMobileMenu } = useNavbarVisibility();

    return (
        <nav className="w-full fixed z-40">
            <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
                <img src="/images/logo.png" className="h-4 lg:h-7" alt="Logo" />
                <div className="flex-row ml-8 gap-7 hidden lg:flex">
                    <NavbarItem label="Home" active />
                    <NavbarItem label="Series" />
                    <NavbarItem label="Films" />
                    <NavbarItem label="New & Popular" />
                    <NavbarItem label="My List" />
                    <NavbarItem label="Browse by Languages" />
                </div>
                <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
                    <p className="text-white text-sm">Browse</p>
                    <ChevronDownIcon className={`w-4 text-white fill-white transition ${showMobileMenu ? 'rotate-180' : 'rotate-0'}`} />
                    <MobileMenu visible={showMobileMenu} />
                </div>
                <div className="flex flex-row ml-auto gap-7 items-center">
                    <div className="text-gray-200 hover:text-gray-300 cursor-not-allowed transition">
                        <MagnifyingGlassIcon className="w-6" />
                    </div>
                    <div className="text-gray-200 hover:text-gray-300 cursor-not-allowed transition">
                        <BellIcon className="w-6" />
                    </div>
                    <div onClick={toggleAccountMenu} className="flex flex-row items-center gap-2 cursor-pointer relative">
                        <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
                            <img src={imageUrl} alt="" />
                        </div>
                        <ChevronDownIcon className={`w-4 text-white fill-white transition ${showAccountMenu ? 'rotate-180' : 'rotate-0'}`} />
                        <AccountMenu
                            visible={showAccountMenu}
                            imageUrl={imageUrl}
                            userName={user?.name ?? 'Guest'} />
                    </div>
                </div>
            </div>
        </nav>
    );
});

