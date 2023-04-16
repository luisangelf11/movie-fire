import React, {useState} from 'react';
import './BtnUp.css';

export default function BtnUp(){
    const [visible, setVisible]=useState(false);

    window.addEventListener("scroll", (e)=>{
        let y = window.pageYOffset || document.documentElement.scrollTop;
        if(y === 0){
            setVisible(false);
        }else if(y > 300){
            setVisible(true);
        }
    });

    const handelTop=()=>{
        window.scrollTo({
            behavior: "smooth",
            top: 0
        });
    }
    
    return(
        <button className={`btn-up ${visible === false? "none": "active"}`} onClick={handelTop}>
            <i className="fa-solid fa-angle-up"></i>
        </button>
    );
}