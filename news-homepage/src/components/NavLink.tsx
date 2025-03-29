'use client';

import { MainNavLinkProps } from "@/app/_lib/definitions";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link
}: MainNavLinkProps) => {
    const pathname = usePathname();
    const { linkName, url } = link;

    if (!url || !linkName) return null;
    return (
        <Link
            href={url}
            className={clsx('font-normal',
                pathname === url && 'text-brand-orange underline underline-offset-3 font-semibold'
            )}>
            {linkName}
        </Link>
    )
}

export default NavLink