import { useState, useEffect } from "react";

export const CursorStars = () => {
    const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
    const [isMoving, setIsMoving] = useState(false);
    const [clickPos, setClickPos] = useState(null);
    const hasCursor = window.matchMedia("(pointer: fine)").matches;

    useEffect(() => {
        if (!hasCursor) return;

        let timeout;
        let orbitTimeout;

        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
            setIsMoving(true);
            clearTimeout(timeout);
            timeout = setTimeout(() => setIsMoving(false), 150);
        };

        const handleClick = (e) => {
            const target = e.target;
            const clickable = 
                target.tagName === "BUTTON" ||
                target.tagName === "A" ||
                target.closest("button") ||
                target.closest("a");

            if (!clickable) return;

            const el = target.closest("button, a") || target;
            const rect = el.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;
            const radius = Math.max(rect.width, rect.height) / 2 + 10;

            setClickPos({ x: centerX, y: centerY, radius });
            clearTimeout(orbitTimeout);
            orbitTimeout = setTimeout(() => setClickPos(null), 1500);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("click", handleClick);
            clearTimeout(timeout);
            clearTimeout(orbitTimeout);
        };
    }, []);

    if (!hasCursor) return null;

    const stars = [
        { delay: 0.08, offset: { x: 0,   y: 0   }, opacity: 1,    size: 3,   orbit: 0   },
        { delay: 0.18, offset: { x: 8,   y: -6  }, opacity: 0.75, size: 2.5, orbit: 90  },
        { delay: 0.30, offset: { x: -10, y: 8   }, opacity: 0.5,  size: 2,   orbit: 180 },
        { delay: 0.45, offset: { x: 6,   y: 12  }, opacity: 0.3,  size: 1.5, orbit: 270 },
    ];

    const radius = clickPos?.radius ?? 20;

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[100]">

            <style>{`
                ${stars.map((star, i) => `
                    @keyframes orbit-${i} {
                        from { transform: translate(-50%, -50%) rotate(${star.orbit}deg) translateX(${radius}px) rotate(-${star.orbit}deg); }
                        to   { transform: translate(-50%, -50%) rotate(${star.orbit + 360}deg) translateX(${radius}px) rotate(-${star.orbit + 360}deg); }
                    }
                `).join("")}
            `}</style>

            {stars.map((star, i) => {
                const angle = (star.orbit * Math.PI) / 180;
                const orbitX = clickPos ? clickPos.x + Math.cos(angle) * radius : null;
                const orbitY = clickPos ? clickPos.y + Math.sin(angle) * radius : null;

                return (
                    <div
                        key={i}
                        className="absolute rounded-full"
                        style={{
                            width: star.size,
                            height: star.size,
                            backgroundColor: "#ffffff",
                            opacity: clickPos ? star.opacity : isMoving ? star.opacity : i === 0 ? 1 : 0,
                            boxShadow: `0 0 6px 3px rgba(209, 228, 240, 0.9), 0 0 12px 6px rgba(180, 210, 240, 0.4)`,
                            left: clickPos ? orbitX : mousePos.x + (isMoving ? star.offset.x : 0),
                            top: clickPos ? orbitY : mousePos.y + (isMoving ? star.offset.y : 0),
                            transition: clickPos ? "none" : `left ${star.delay}s ease-out, top ${star.delay}s ease-out, opacity 0.3s ease-out`,
                            animation: clickPos ? `orbit-${i} 1s linear infinite` : "none",
                            transform: "translate(-50%, -50%)",
                        }}
                    />
                );
            })}
        </div>
    );
};
// import { useState, useEffect } from "react";

// export const CursorStars = () => {
//     const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
//     const [isMoving, setIsMoving] = useState(false);
//     const hasCursor = window.matchMedia("(pointer: fine)").matches;

//     useEffect(() => {
//         if (!hasCursor) return;

//         let timeout;

//         const handleMouseMove = (e) => {
//             setMousePos({ x: e.clientX, y: e.clientY });
//             setIsMoving(true);
//             clearTimeout(timeout);
//             timeout = setTimeout(() => setIsMoving(false), 150);
//         };

//         window.addEventListener("mousemove", handleMouseMove);

//         return () => {
//             window.removeEventListener("mousemove", handleMouseMove);
//             clearTimeout(timeout);
//         };
//     }, []);

//     if (!hasCursor) return null;

//     const stars = [
//         { delay: 0.08, offset: { x: 0,   y: 0   }, opacity: 1,    size: 3   },
//         { delay: 0.18, offset: { x: 8,   y: -6  }, opacity: 0.75, size: 2.5 },
//         { delay: 0.30, offset: { x: -10, y: 8   }, opacity: 0.5,  size: 2   },
//         { delay: 0.45, offset: { x: 6,   y: 12  }, opacity: 0.3,  size: 1.5 },
//     ];

//     return (
//         <div className="fixed inset-0 overflow-hidden pointer-events-none z-50">
//             {stars.map((star, i) => (
//                 <div
//                     key={i}
//                     className="absolute rounded-full"
//                     style={{
//                         width: star.size,
//                         height: star.size,
//                         backgroundColor: "#ffffff",
//                         opacity: isMoving ? star.opacity : i === 0 ? 1 : 0,
//                         boxShadow: `0 0 6px 3px rgba(209, 228, 240, 0.9), 0 0 12px 6px rgba(180, 210, 240, 0.4)`,
//                         left: mousePos.x + (isMoving ? star.offset.x : 0),
//                         top: mousePos.y + (isMoving ? star.offset.y : 0),
//                         transition: `left ${star.delay}s ease-out, top ${star.delay}s ease-out, opacity 0.3s ease-out`,
//                         transform: "translate(-50%, -50%)",
//                     }}
//                 />
//             ))}
//         </div>
//     );
// };