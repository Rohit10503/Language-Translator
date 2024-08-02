import React from "react";
import "./home.css"
import VoiceInput from "../../component/voiceInput";
const Home=()=>{
    return (
        <>
        <div className="main_body">
        <h1 className="title is-3">Language Translator</h1>


        <VoiceInput/>
        </div>


        <div className="footer_me"><h1 className="title is-6">Maintain & Developed By Rohitkumar</h1></div>
        </>
    )
}
export default Home;