import React, {useState, useEffect} from "react";
import CardMeme from "../components/CardMeme";
import PagesBtn from "../components/PagesBtn";
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

    const btnPagesEvent = () => {
        console.log("Works")
    }

    return (
        <>
        <PagesBtn num1="1" num2="20" onClick={btnPagesEvent} />
        <div className="content">
            {
                memeList.map((meme: any) => (
                    <CardMeme id={meme.id} name={meme.name} img={meme.url}/>
                ))
            }
        </div>
        <PagesBtn num1="1" num2="20" onClick={btnPagesEvent} />
        </>
    )
}

export default Home;