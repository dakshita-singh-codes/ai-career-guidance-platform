import { useEffect, useRef, useState } from "react";

type Props = {
    target: number;
};


function AnimatedCounter({ target }: Props) {

    const [count, setCount] = useState(0);

    const [visible, setVisible] = useState(false);

    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {

        const interval = setInterval(() => {

            if (!visible) return;
            const increment = Math.ceil(target / 100);
            setCount((prev) => {

                if (prev+increment>= target) {

                    clearInterval(interval);

                    return target;
                }


return prev + increment;

            });

        }, 20);

        return () => clearInterval(interval);

    }, [visible,target]);

useEffect(() => {

    const observer = new IntersectionObserver((entries) => {

        if (entries[0].isIntersecting) {
            setVisible(true);
        }

    });

    if (ref.current) {
        observer.observe(ref.current);
    }

    return () => observer.disconnect();

}, []);

    return <h2 ref={ref}>
    {count}+
</h2>;
}

export default AnimatedCounter;