import { sanityFetch } from "@/sanity/lib/live"
import { MAIN_NAV_QUERY } from "@/sanity/lib/queries"
import Image from "next/image"
import NavLink from "./NavLink";

const Header = async () => {
    const { data: navmenu } = await sanityFetch({ query: MAIN_NAV_QUERY });

    const navlinks = navmenu?.link;

    if (!navlinks) {
        return null
    }

    return (
        <header className="custom-container flex justify-between md:items-center flex-col md:flex-row relative ">
            <Image
                src='/logo.svg'
                width={50}
                height={50}
                alt="Main Logo"
                className="w-[50]"
                priority />

            {/* <button className="absolute right-0 top-[1.3rem]">
                <span>Nav Menu</span>
            </button> */}

            <nav
                role="navigation"
                aria-label="main nav menu"
                className="flex items-center gap-5 flex-col md:flex-row ">
                {navlinks.map(link => (
                    <NavLink key={link.linkName} link={link} />
                ))}

            </nav>

        </header>
    )
}

export default Header