// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
const Frames = (pro) => {
    console.log(pro);
    return (

        <div className="frames-container">
            {pro.pro.map((frame, index) => (
                <div key={index} className={frame.className}>
                </div>
            ))}
        </div>

    );
};

export default Frames;
