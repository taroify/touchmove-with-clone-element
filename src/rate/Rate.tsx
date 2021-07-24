import * as React from "react"
import {MutableRefObject, useCallback, useRef} from "react"
import {getClientCoordinates} from "../utils/event"
import {RateStatus} from "./Rate.shared"
import NoCloneRateItem from "./NoCloneRateItem";
import RateItem from "./RateItem";

export function getItemRects(elementRef: MutableRefObject<HTMLDivElement | null>): DOMRect[] {
    if (elementRef.current) {
        const rects: DOMRect[] = []
        elementRef.current
            .querySelectorAll(".rate__item")
            .forEach((oneElement) =>
                rects.push(oneElement.getBoundingClientRect()),
            )
        return rects
    }
    return []
}

type RateListItem = {
    value: number
    status: RateStatus
}

function getRateStatus(
    value: number,
    index: number
): RateListItem {
    if (value >= index) {
        return {status: RateStatus.Full, value: 1}
    }

    return {status: RateStatus.Void, value: 0}
}

interface RateProps {
    question?: number

    value?: number

    onChange?(value: number): void
}

function Rate(props: RateProps) {
    const {question, value = 0, onChange} = props
    const rootRef = useRef<HTMLDivElement>(null)

    const list = Array(5)
        .fill("")
        .map((__, i) => getRateStatus(value, i + 1))

    const getRanges = useCallback(
        () =>
            getItemRects(rootRef).flatMap((rect, index) =>
                [{score: index + 1, left: rect.left}],
            ),
        [],
    )

    const getScoreByPosition = useCallback(
        (x: number) => {
            const ranges = getRanges()
            for (let i = ranges.length - 1; i > 0; i--) {
                if (x > ranges[i].left) {
                    return ranges[i].score
                }
            }
            return 1
        },
        [getRanges],
    )

    const onTouchMove = (event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
        const {clientX} = getClientCoordinates(event)
        const index = getScoreByPosition(clientX)
        onChange?.(index)
    }

    return (
        <div
            ref={rootRef}
            className="rate"
            onTouchMove={onTouchMove}
        >
            {
                question === 1 && list.map((item, index) => <NoCloneRateItem key={index} status={item.status}/>)
            }
            {
                question === 2 && list.map((item, index) => <RateItem key={index} status={RateStatus.Void}/>)
            }
            {
                question === 3 && list.map((item, index) => <RateItem key={index} status={item.status}/>)
            }
        </div>
    )
}

export default Rate
