'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../components/ui/3d-card';
import Link from 'next/link';

export default function ThreeDCard() {
    return (
        <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600"
                >
                    The Invasive Fish Tracker!
                </CardItem>
                <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                >
                    <p>
                        The map will tell you where the invasive species are so
                        you can fish them! Data sourced from the US government.
                    </p>
                </CardItem>
                <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                        src="/images/map_picture.png"
                        height={1000}
                        width={1000}
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt="thumbnail"
                    />
                </CardItem>
                <div className="flex justify-center items-center mt-5">
                    <CardItem
                        translateZ="20"
                        as={Link}
                        href="/map"
                        className="px-6 py-2 rounded-xl text-lg font-semibold dark:text-white bg-blue-500 hover:bg-blue-700 text-white transition-transform duration-200 transform hover:scale-105"
                    >
                        <div className="duration-300 transition-transform hover:scale-110">
                            <p className="">Try now!</p>
                        </div>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
