import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./css/memeForm.css";

const MemeForm = () => {
    const { id }: any = useParams()
    
    const [imgMeme, setImgMeme] = useState<string>()

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(res => {
                const gettingMeme = res.data.memes.filter((meme: any) => meme.id === id)

                if (gettingMeme[0] === undefined) return
                setImgMeme(gettingMeme[0].url);
            })

    }, [])

    const sendingText = (e: any) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const imgFlipParams = {
            template_id: id,
            text0: formData.get("text1"),
            text1: formData.get("text2"),
            username: "memeprojecttypescript",
            password: "memeprojectxD"
        }

        fetch(`https://api.imgflip.com/caption_image?template_id=${imgFlipParams.template_id}&text0=${imgFlipParams.text0}&text1=${imgFlipParams.text1}&username=${imgFlipParams.username}&password=${imgFlipParams.password}`)
            .then(res => res.json())
            .then(res => {
                setImgMeme(res.data.url)
            })
            .catch(e => console.log("ERROR PAPU" + e))
    }

    return (
        <div className="memeForm">
            <img src={imgMeme} alt="memesito"/>

            <form className="iw_form" onSubmit={sendingText}>
                <div className="formSection">
                    <label>Text 1</label>
                    <input type="text" placeholder="Text 1..." name="text1"/>
                </div>

                <div className="formSection">
                    <label>Text 2</label>
                    <input type="text" placeholder="Text 2..." name="text2"/>
                </div>

                <button type="submit">Generate Meme</button>
            </form>
        </div>
    )
}

export default MemeForm