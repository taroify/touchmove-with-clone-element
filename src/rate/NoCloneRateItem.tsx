import classNames from "classnames"
import * as React from "react"
import {RateStatus} from "./Rate.shared"

interface IconProps {
    className?: string
}

function Star(props: IconProps) {
    const {className, ...restProps} = props
    return <div className={classNames("van-icon", className)}{...restProps} />
}

interface RateItemProps {
    status: RateStatus
}

function NoCloneRateItem(props: RateItemProps) {
    const {status} = props
    const full = status === RateStatus.Full
    return (
        <div className={"rate__item"}>
            <Star className={classNames({
                "rate__icon--full": full,
            })}/>
        </div>
    )
}

export default NoCloneRateItem
