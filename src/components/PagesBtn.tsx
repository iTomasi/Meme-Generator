import React from "react";
import "./css/pagesBtn.css"

interface IPagesBtn {
    num1: number,
    num2: number,
    onClick: any
}

const PagesBtn = ({num1, num2, onClick}: IPagesBtn) => {
    return (
        <div className="pagesBtn">
            <button type="button" className="pagesBtn-prev" onClick={onClick}>Prev</button>
            <h3>{num1} - {num2}</h3>
            <button type="button" className="pagesBtn-next" onClick={onClick}>Next</button>
        </div>
    )
}

export default PagesBtn