import { useState, useEffect, useRef } from 'react';

function randomColor(currentColor) {
    const COLOR_LIST = ['red', 'green', 'yellow'];
    const currentIndex = COLOR_LIST.indexOf(currentColor)
    let newIndex = currentIndex;

    while (currentIndex === newIndex) {
        newIndex = Math.trunc(Math.random() * COLOR_LIST.length);
    }

    return COLOR_LIST[newIndex];
}

function useMagicColor() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('transparent')

    useEffect(() => {
        const colorInterval = setInterval(() => {
            console.log(colorRef.current);
            const newColor = randomColor(colorRef.current);
            setColor(colorRef.current);

            colorRef.current = newColor;
        }, 1000);

        return () => {
            clearInterval(colorInterval);
        }
    }, []);


    return color;
}

export default useMagicColor;