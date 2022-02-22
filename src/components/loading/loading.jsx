import React from "react";
import './loading.css'

export const Loading = () => {

    return <div className="center">
        <div>
            <div className="spinner"></div>
            <h1 className="text">Loading...</h1>
        </div>
    </div>
}