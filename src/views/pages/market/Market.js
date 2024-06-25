// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import "./Market.scss";
import Frames from "../../../components/frames/Frames";
const Market = () => {

    const frames = [
        { id: 1,  className: 'frame top' },
        { id: 2,  className: 'frame bottom-left' },
        { id: 3,  className: 'frame bottom-right' }
      ];
      console.log(frames.className);
    return (
        <div className="Container-market">
            <Frames pro={frames}/>
            <div className="market-gold"></div>
            <div className="market-content">
                <div className="money"><p>4.1k</p></div>
                <div className="market-upgrade"></div>

            </div>
        </div>
    );
};

export default Market;
