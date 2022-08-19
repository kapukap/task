import {useLayoutEffect, useState} from "react";

export const useOverflow = (ref, callback) => {
    const [isOverflow, setIsOverflow] = useState(false);

    useLayoutEffect(() => {
        const {current} = ref;

        const trigger = () => {
            const hasOverflow = current.scrollWidth > current.clientWidth;
            setIsOverflow(hasOverflow);
            if (callback) callback(hasOverflow);
        };

        if (current) {
            trigger();
        }
    }, [callback, ref]);

    return isOverflow;
}
