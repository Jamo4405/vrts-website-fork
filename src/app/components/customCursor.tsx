"use client";

import React, {useEffect, useState} from "react";

const CustomCursor = () => {
    const [position, setPosition] = useState({x: 0, y: 0});
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const userAgent = typeof navigator === "undefined" ? "" : navigator.userAgent;
        setIsMobile(/iPhone|iPad|iPod|Android/i.test(userAgent));


        const handleMouseMove = (event: MouseEvent) => {
            setPosition({x: event.clientX, y: event.clientY});
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    if (isMobile) {
        return <></>;
    }

    return (
        <div
            id="custom-cursor"
            style={{
                top: position.y,
                left: position.x,
            }}
        >
            <span className="cursor-star">✹</span>
        </div>
    );
};

export default CustomCursor;
