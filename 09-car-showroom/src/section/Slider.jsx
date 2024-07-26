import React, { useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import { SlideImages } from "../static/data";

const Slider = () => {
    const [currentCaption, setCurrentCaption] = useState("");

    const handleCaptionChange = (caption) => {
        setCurrentCaption(caption);
    };

    return (
        <div className="h-[32rem] md:w-1/2 lg:w-2/3">
            <Fade duration={2000} transitionDuration={500} onChange={(current, next) => handleCaptionChange(SlideImages[next].caption)}>
                {SlideImages.map((image, index) => (
                    <div key={index}>
                        <div
                            style={{ backgroundImage: `url(${image.url})` }}
                            className="flex justify-center items-center h-[32rem] w-full bg-cover relative"
                        >
                            <span className="text-5xl text-cyan-400 absolute bottom-0 mb-4 mx-auto bg-white p-2 rounded-lg">
                                {currentCaption || image.caption}
                            </span>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    );
};

export default Slider;
