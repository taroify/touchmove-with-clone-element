import classNames from "classnames"
import * as React from "react"
import {cloneElement} from "react"
import {RateStatus} from "./Rate.shared"

interface IconProps {
    className?: string
}

function Star(props: IconProps) {
    const {className, ...restProps} = props
    return <div className={classNames("van-icon", className)}{...restProps} />
}

function StarOutlined(props: IconProps) {
    const {className, ...restProps} = props
    return <div className={classNames("van-icon", className)}{...restProps} />
}

interface RateItemProps {
    status: RateStatus
}

function RateItem(props: RateItemProps) {
    const {status} = props
    const full = status === RateStatus.Full
    const voidIcon = <StarOutlined/>
    const fullIcon = <Star/>
    return (
        <div className={"rate__item"}>
            {
                cloneElement(full ? fullIcon : voidIcon, {
                    className: classNames("rate__icon", {
                        "rate__icon--full": full,
                    }),
                })
            }
        </div>
    )
}

export default RateItem
