// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import "./Node.scss";
const Node = () => {
    const frames = Array(15).fill({});
    return (
        <div className="Container-node">
            <div className="content-active">
                <div className="active">
                    <span className="title">ACTIVE</span>
                    <div className="active-money">
                    <div className="amount">
                        <span>Amount:</span>
                        <span>0 $</span>
                    </div>
                    <div className="profit">
                        <span>Profit:</span>
                        <span>0</span>
                    </div>
                    <div className="claimed">
                        <span>Claimed:</span>
                        <span>1</span>
                    </div>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default Node;
