'use client';

import { useInfoModal } from '@/context/info-modal-context';
import { useBillboard } from '@/hooks/use-billboard';
import { InformationCircleIcon } from '@heroicons/react/24/outline';
import { FC, memo, useCallback } from 'react';
import { Error } from '../common/error';
import { Loader } from '../common/loader';
import { PlayButton } from './play-button';

export const BillBoard: FC = memo(() => {

    const { data, error, isLoading } = useBillboard();
    const { openModal } = useInfoModal();

    const onClick = useCallback(() => {
        openModal(data?.id);
    }, [data?.id, openModal]);

    if (error) return <Error />;

    return isLoading
        ? <Loader />
        : (
            <div className="relative h-[56.25vw]">
                <video poster={data?.thumbnailUrl} className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500" autoPlay muted loop src={data?.videoUrl}></video>
                <div className="absolute top-[30%] md:top-[40%] ml-4 md:ml-16">
                    <p className="text-white text-1xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
                        {data?.title}
                    </p>
                    <p className="text-white text-[8px] md:text-lg mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
                        {data?.description}
                    </p>
                    <div className="flex flex-row items-center mt-3 md:mt-4 gap-3">
                        <PlayButton movieId={data?.id} />
                        <button
                            onClick={onClick}
                            className="bg-white text-white bg-opacity-30 rounded-md py-1 md:py-2 px-2 md:px-4 w-auto text-xs lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-20 transition"
                        >
                            <InformationCircleIcon className="w-4 md:w-7 mr-1" />
                            More Info
                        </button>
                    </div>
                </div>
            </div >
        );
});
