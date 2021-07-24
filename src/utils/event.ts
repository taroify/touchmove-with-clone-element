import * as React from "react";

interface ClientCoordinates {
    clientX: number
    clientY: number
}

export function getClientCoordinates(event: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>): ClientCoordinates {
    // @ts-ignore
    const {clientX, clientY, touches} = event

    if (clientX && clientY) {
        return {
            clientX,
            clientY,
        }
    }
    return touches[0]
}
