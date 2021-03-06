import React from 'react'
import './running.css';
import useWebAnimations from "@wellyshen/use-web-animations";

export const Runner = () => {
    const { ref } = useWebAnimations({
        keyframes: [
            { left: "180px" },
            { left: "248px" },
            { left: "548px" },
            { left: "248px" },
            { left: "180px" },
        ],
        timing: {
            duration: 20000,
            iterations: Infinity,
            easing: "ease-in-out"
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
    return (
        <div>
            {/* <img ref={ref} className="running1" src="https://media1.giphy.com/media/3b8HhOe2LhftPxEdPq/source.gif" height="250px" /> */}
            <img ref={ref} className="running2" src="https://media3.giphy.com/media/9GJcLOV16IsScnqgYO/source.gif" height="250px" alt="runner2"/>
        </div>
    )
}