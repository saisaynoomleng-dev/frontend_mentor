import { ButtonType } from "@/app/_lib/definitions"
import clsx from "clsx"

const Button = ({
    children,
    as: Comp = "button",
    className,
    size,
    variant
}: ButtonType) => {
    return (
        <Comp
            className={clsx(` tracking-[.3rem] rounded-none px-5 py-2 font-bold uppercase hover:bg-black hover:text-white cursor-pointer`,
                variant === 'cta' && 'bg-amber-100 hover:bg-red-500',
                variant === 'default' && 'bg-brand-red text-black hover:',
                size === 'lg' && '', className
            )}>
            {children}
        </Comp>
    )
}

export default Button