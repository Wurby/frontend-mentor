import Link from './components/Link';
import Text from './components/Text';
import { QrCodeExample } from './qr-code/page';

export default function Home() {
    return (
        <>
            <Text variant="subtitle">
                This is where you can play with the projects I build on my
                channel.
            </Text>

            <section className="w-full pt-12 flex md:grid md:grid-cols-3 md:gap-4 place-content-center">
                <a
                    href="/qr-code"
                    className="flex flex-wrap place-content-center"
                >
                    <QrCodeExample />
                    <Text variant="subtext" className="text-center pt-4 w-full">
                        Click to learn more
                    </Text>
                </a>
            </section>
        </>
    );
}
