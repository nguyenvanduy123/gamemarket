// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import Frames from "../../../components/frames/Frames";
import "./Bag.scss";

const Bag = () => {
    const frames = Array(15).fill({className:'frame'});
    return (
        <div className="Container-bag">
            <div class="watermark">
                <h2>BAG</h2>
                <Frames pro={frames}/>
            </div>
        </div>
    );
};

export default Bag;
