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