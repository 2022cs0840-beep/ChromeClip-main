import React, { useEffect, useState } from "react";
import './App.css';

const ClipboardCard = ({ content,setDel,del,copy,setCopy,index,copyClip,delClip,setDelInd,scope,setPush}) => {
    const [clip, setClip] = useState(false);
     const handleCopy=()=>{
             setDel(false); setPush(false);
                copyClip(index);
                setCopy(true);
                setTimeout(() => {
                    setCopy(false);
                }, 1500);
            
     }
     const handleDel=()=>{
            setCopy(false);setPush(false);
            setDelInd(index);
            setDel(true);
            setTimeout(() => {
                setDel(false);
            }, 20000);

            
         
     }

     const pushFn=()=>{
        chrome.runtime.sendMessage({ type: "push", data:content,scope:scope }, (response) => {
          console.log("Response from background:", response);
        });
           setDel(false); setCopy(false);
           setPush(true);
           setTimeout(()=>{
              setPush(false);
           },1500);
      }

       useEffect(()=>{
          setClip(false);
       },[scope]);
     


    return (
        <div
            onClick={() => setClip(true)}
            onMouseLeave={() => setClip(false)}
            className={clip ? "card2" : "card"}
        >
            {clip && 
                <div className="div">
                   
                    {/* Copy SVG */}
                    <abbr title="Copy Clip">
                    <svg onClick={handleCopy} className="svg2" width="50px" height="50px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M17.676 14.248C17.676 15.8651 16.3651 17.176 14.748 17.176H7.428C5.81091 17.176 4.5 15.8651 4.5 14.248V6.928C4.5 5.31091 5.81091 4 7.428 4H14.748C16.3651 4 17.676 5.31091 17.676 6.928V14.248Z" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M10.252 20H17.572C19.1891 20 20.5 18.689 20.5 17.072V9.75195" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </abbr>
                    
                    {/* Delete SVG */}
                    <abbr title="Delete Clip">
                    <svg onClick={handleDel} className="svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 7V18C6 19.1046 6.89543 20 8 20H16C17.1046 20 18 19.1046 18 18V7M6 7H5M6 7H8M18 7H19M18 7H16M10 11V16M14 11V16M8 7V5C8 3.89543 8.89543 3 10 3H14C15.1046 3 16 3.89543 16 5V7M8 7H16" stroke="#000000" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    </abbr>

                     {/* Uploa/Download SVG */}
                     {scope==='local' &&
                     <abbr title="Push to Sync">
                     <svg onClick={pushFn} className="svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17H17.01M15.6 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H8.4M12 15V4M12 4L15 7M12 4L9 7" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    </abbr>
                    }

                    {
                        scope==='sync' &&
                        <abbr title="Push to Local">
                        <svg onClick={pushFn} className="svg" width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#000000" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        </abbr>
                    }

                    
                </div>
            }
            {!clip && 
                <div className="cardcontent">
                <h3 className="contenth2">{content}</h3>
                </div>
            }

           
        </div>
    );
};

export default ClipboardCard;
