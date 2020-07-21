import React from 'react'
import './scenery.css';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Scenery = (prop) => {
    const { ref} = useWebAnimations({
        keyframes: [
            { right: "0%" },
            { right: "100%" }
        ],
        timing: {
            duration: prop.Speed,
            iterations: Infinity,
            easing: "linear"
        },
        // onReady: ({ playState, animate, animation }) => {
        //   // Triggered when the animation is ready to play (Google Chrome: available in v84+)
        // },
        // onUpdate: ({ playState, animate, animation }) => {
        //   // Triggered when the animation enters the running state or changes state
        // },
        // onFinish: ({ playState, animate, animation }) => {
        //   // Triggered when the animation enters the finished state (Google Chrome: available in v84+)
        // },
        // // More useful options...
      });
    return(
        <div ref={ref} className="background-clip">
            <div className="background-image-1">1</div>
            <div className="background-image-2">2</div>
        </div>
    )
}