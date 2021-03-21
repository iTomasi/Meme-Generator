import React from "react";
import "./css/cardMeme.css";

interface ICardMemeProps {
    img: string,
    id: string,
    name: string
}

const CardMeme = ({img, id, name}: ICardMemeProps) => {

    const reDirectingMemeForm = (e: any) => {
        return window.location.href = `/creating-meme/${e.target.dataset.id}`
    }

    return (
        <div className="card">
            <img src={img} alt={name}/>
            <h3 className="card__name">{name}</h3>
            <button type="button" data-id={id} onClick={reDirectingMemeForm}>Create Meme</button>
        </div>
    )

}

export default CardMeme