import Image from 'next/image';
import { Markdown } from 'components/markdown';
import { getNetlifyContext } from 'utils';
import { ImageWithSizeOverlay } from './image-cdn/image-with-size-overlay';
import { ContextAlert } from 'components/context-alert';

export const metadata = {
    title: 'Image CDN'
};

const sampleImage = '/images/house.png';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';
export default function Page() {
    return (
        <div className="flex flex-col">
        <section>
            <div
                className="overflow-hidden border-0 border-white rounded-lg relative max-w-screen-lg"
                style={{ aspectRatio: '3/2' }}
            >
                <Image
                    src="/images/id.jpeg"
                    priority
                    fill={true}
                    style={{ objectFit: 'contain' }}
                    alt="Corgi"
                />
            </div>
        </section>
    </div>
    
    );
}