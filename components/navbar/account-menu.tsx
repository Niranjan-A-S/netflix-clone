import { FC, memo } from "react";
import { signOut } from "next-auth/react";
import { IAccountMenuProps } from "@/types/component-props";

export const AccountMenu: FC<IAccountMenuProps> = memo(({ isVisible, avatar, name }) => isVisible
    ? (
        <div className="bg-black w-56 absolute top-14  right-0 py-5 flex-col border-2 border-gray-800 flex">
            <div className="flex flex-col gap-3">
                <div className="px-3 group/item flex flex-row items-center gap-3 w-full">
                    <img className="w-8 rounded-md" src={avatar || "/images/default-blue.png"} alt="ProfilePic" />
                    <p className="text-white text-sm group-hover/item:underline">{name}</p>
                </div>
                <hr className="bg-gray-600 border-0 h-px my-4" />
                <div onClick={() => signOut()} className="text-center text-white text-sm px-3 hover:underline">Sign Out of Netflix</div>
            </div>
        </div>
    )
    : null
);