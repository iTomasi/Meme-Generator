import React, {useState, useEffect} from "react";
import CardMeme from "../components/CardMeme";
import "./css/home.css";

const Home = () => {

    const [memeList, setMemeList] = useState<[]>([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const data = res.data.memes;
                const meme_2 = data.filter((meme: any) => meme.box_count === 2)
                setMemeList(meme_2)
            })
    }, [])

    return (
        <>
        <div className="content">
            {
                memeList.map((meme: any) => (
                    <CardMeme id={meme.id} name={meme.name} img={meme.url}/>
                ))
            }
        </div>
        </>
    )
}

export default Home;