import React, {useState, useEffect} from "react";
import CardMeme from "../components/CardMeme";
import PagesBtn from "../components/PagesBtn";
import "./css/home.css";

const Home = () => {

    const [memeList, setMemeList] = useState<[]>([])
    const [memePages, setMemePages] = useState<[]>([]);
    const [pagesNum, setPagesNum] = useState({
        num1: 0,
        num2: 15
    });

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const data = res.data.memes;
                const meme_2 = data.filter((meme: any) => meme.box_count === 2)
                const meme_2Length = meme_2.slice(0, 15).length
                setMemeList(meme_2)
                setMemePages(meme_2.slice(0, 15))
                setPagesNum((prevNum: any) => (
                    {...prevNum, num1: 0, num2: meme_2Length}
                ))
            })
    }, [])

    const btnPagesEvent = (e: any) => {
        const pagesNum_1 = pagesNum.num1;
        const pagesNum_2 = pagesNum.num2

        if (e.target.classList.contains("pagesBtn-prev")) {
            if (pagesNum.num1 > 1) {
                setPagesNum((prevNum: any) => (
                    {...prevNum, num1: pagesNum_1 - 15, num2: pagesNum_2 - 15}
                ))
    
                const newPageNum_1 = pagesNum.num1 - 15
                const newPageNum_2 = pagesNum.num2 - 15
                
                const newArrayMemePages: any = memeList.slice(newPageNum_1, newPageNum_2);
    
                setMemePages(newArrayMemePages)
            }
        }

        else if (e.target.classList.contains("pagesBtn-next")) {
            if (memeList.length > pagesNum.num2) {
                setPagesNum((prevNum: any) => (
                    {...prevNum, num1: pagesNum_1 + 15, num2: pagesNum_2 + 15}
                ))
    
                const newPageNum_1 = pagesNum.num1 + 15
                const newPageNum_2 = pagesNum.num2 + 15
    
                const newArrayMemePages: any = memeList.slice(newPageNum_1, newPageNum_2)
                setMemePages(newArrayMemePages)
            }
        }
    }

    return (
        <>
        <PagesBtn num1={pagesNum.num1 + 1} num2={pagesNum.num2} onClick={btnPagesEvent} />
        <div className="content">
            {
                memePages.map((meme: any) => (
                    <CardMeme id={meme.id} name={meme.name} img={meme.url}/>
                ))
            }
        </div>
        <PagesBtn num1={pagesNum.num1 + 1} num2={pagesNum.num2} onClick={btnPagesEvent} />
        </>
    )
}

export default Home;