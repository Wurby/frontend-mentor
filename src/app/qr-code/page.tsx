import React from 'react';
import Image from 'next/image';
import qrcodeimage from './image-qr-code.png';
import Text from '../components/Text';

export const QrCodeExample = () => {
    return (
        <>
            <section className="w-64 p-3 rounded-xl shadow-lg shadow-slate-300 bg-white border-1 border-slate-100">
                <div>
                    <Image
                        src={qrcodeimage}
                        alt="Frontend Mentor logo"
                        className="rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-4 px-2 py-4">
                    <h1 className="text-center font-bold">
                        Improve your front-end skills by building projects
                    </h1>
                    <h4 className="text-xs text-slate-500 text-center">
                        Scan the QR code to visit Frontend Mentor and take your
                        coding skills to the next level
                    </h4>
                </div>
            </section>
        </>
    );
};

const Page = () => {
    return (
        <>
            <article className="w-full flex flex-wrap justify-center gap-8">
                <section className="max-w-3xl ">
                    <QrCodeExample />
                </section>
                <section className="w-full text-center">
                    <Text>Frontend Mentor initial project.</Text>
                    <Text variant="subtext">
                        Learn more by scanning the qr-code.
                    </Text>
                </section>
            </article>
        </>
    );
};

export default Page;
