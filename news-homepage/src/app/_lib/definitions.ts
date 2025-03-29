import { MAIN_NAV_QUERYResult } from "@/sanity/types"

// bounded type
export type BoundedType = {
    as?: React.ElementType
    className?: string
    children: React.ReactNode
}

// Button Type
export type ButtonType = {
    as?: React.ElementType
    className?: string
    children: React.ReactNode
    size?: 'lg' | 'md' | 'xl'
    variant?: 'default' | 'cta'
}

// main nav links
export type MainNavLinkProps = {
    link: NonNullable<NonNullable<MAIN_NAV_QUERYResult>['link']>[number]
}