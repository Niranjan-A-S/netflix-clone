/* eslint-disable @next/next/no-img-element */
'use client';

import { signOutAction } from '@/actions/sign-out';
import { IAccountMenuProps } from '@/types/component-props';
import { FC, memo, useCallback } from 'react';

export const AccountMenu: FC<IAccountMenuProps> = memo(({ visible, imageUrl, userName }) => {

    const onClick = useCallback(async () => {
        await signOutAction();
    }, []);

    return (
        !visible
            ? null
            : (
                <div className="bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex">
                    <div className="flex flex-col gap-3">
                        <div className="px-3 group/item flex flex-row gap-3 items-center w-full">
                            <img className="w-8 rounded-md" src={imageUrl} alt="" />
                            <p className="text-white text-sm group-hover/item:underline cursor-not-allowed">{userName}</p>
                        </div>
                    </div>
                    <hr className="bg-gray-600 border-0 h-px my-4" />
                    <div onClick={onClick} className="px-3 text-center text-white text-sm hover:underline">
                        Sign out of Netflix
                    </div>
                </div>
            ));
});
