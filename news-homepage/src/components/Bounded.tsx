import { BoundedType } from "@/app/_lib/definitions"
import clsx from "clsx"

const Bounded = ({
    children,
    as: Comp = "section",
    className,
}: BoundedType) => {
    return (
        <Comp
            className={clsx(`custom-container `, className)}>
            {children}
        </Comp>
    )
}

export default Bounded