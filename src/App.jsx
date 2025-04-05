import React, { useState } from 'react'
import "./App.css"
import Navbar from './components/Navbar'
import { Search } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";
import FadeLoader from "react-spinners/FadeLoader";
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const App = () => {

  const [word, setWord] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const changeBgColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#9333ea";
  };

  const resetColor = () => {
    let inputBox = document.querySelector(".inputBox");
    inputBox.style.borderColor = "#374151";
  };

  const ai = new GoogleGenAI({ apiKey: "YOUR_API_KEY" }); // Replace YOUR_API_KEY with your actual API key

  async function getResult() {
    setLoading(true);
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: `Considered you are a dictionary AI. we will give to a word and you need to Give all the dictionary details in good form 
      including examples also, Meanings, Definitions, Synonyms , Phonetics etc The Word is ${word}`,
    });
    setResult(response.text);
    setLoading(false);
  };


  return (
    <>
      <Navbar />
      <div className="searchContainer mt-5 px-[250px]">

        <div className="inputBox">
          <Search color='gray' className='ml-3 cursor-pointer' />
          <input onKeyUp={(e)=>{
            if(e.key === "Enter"){
              getResult();
            }
          }} onChange={(e) => { setWord(e.target.value) }} value={word} type="text" onBlur={resetColor} onFocus={changeBgColor} placeholder='Search a word...' />
        </div>

      </div>

      <div className="resultContainer py-[20px] mt-5 min-h-[40vh] mx-[250px]" style={{ borderTop: "1px solid #374151", borderBottom: "1px solid #374151" }}>
        <Markdown remarkPlugins={[remarkGfm]}>{result}</Markdown>
        {loading && <FadeLoader color="#9333ea" className='mt-5' />}
      </div>

      <div className="fotter flex items-center justify-center h-[80px] bg-[#1F2937]">
        <p className='text-white'>Made with ❤️ by <span className='text-purple-600 cursor-pointer'>Code With Mahdi</span> all rights reserved.</p>
      </div>
    </>
  )
}

export default App