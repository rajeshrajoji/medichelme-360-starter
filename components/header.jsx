import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import medi from 'public/images/medi.png';
import githubLogo from 'public/images/github-mark-white.svg';

const navItems = [
    { linkText: 'Home', href: '/' },
    { linkText: 'About us', href: '/' },
    { linkText: 'Our Services', href: '/' },
    { linkText: 'Portfolio', href: '/' },
    { linkText: 'Clients', href: '/' },
    { linkText: 'Contact', href: 'https://forms.gle/eqkBK9p4fLfkcrsw8'}
    // { linkText: 'Home', href: '/' },
    // { linkText: 'About us', href: '/revalidation' },
    // { linkText: 'Our Services', href: '/image-cdn' },
    // { linkText: 'Portfolio', href: '/edge' },
    // { linkText: 'Clients', href: '/blobs' },
    // { linkText: 'Contact', href: '/classics' }
];

export function Header() {
    return (
        <nav className="flex flex-wrap items-center gap-4 pt-6 pb-6 sm:pt-6 md:pb-6">
            <Link href="/">
                <Image src={medi} alt="Medichelme Consulting" style={{ width: '100%', height: 'auto' }} />
            </Link>
            {!!navItems?.length && (
                <ul className="flex flex-wrap gap-x-4 gap-y-1">
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
            {/* <div className="flex-grow justify-end hidden lg:flex lg:mr-1">
                <Link
                    href="https://github.com/netlify-templates/next-platform-starter"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Image src={githubLogo} alt="GitHub logo" className="w-7" />
                </Link>
            </div> */}
        </nav>
    );
}
