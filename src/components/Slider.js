import React, {useState, useEffect} from 'react';
import dataSlider from '../helpers/dataSlider';
import BtnSlider from './BtnSlider';
import './Slider.css';

export default function Slider(){
    const [selectIndex, setSelectIndex] = useState(1);

    useEffect(()=>{
        setTimeout(()=>{
            if(selectIndex !== dataSlider.length){
                setSelectIndex(selectIndex + 1);
            }else if(selectIndex ===dataSlider.length){
                setSelectIndex(1);
            }
        },10000);
    }, [selectIndex]);

    const nextSlide =()=>{
        if(selectIndex !== dataSlider.length){
            setSelectIndex(selectIndex + 1);
        }else if(selectIndex === dataSlider.length){
            setSelectIndex(1);
        }
    }

    const backSlide=()=>{
        if(selectIndex !== 1){
            setSelectIndex(selectIndex - 1);
        }else if(selectIndex === 1){
            setSelectIndex(dataSlider.length);
        }
    }

    const movDot=(index)=>{
        setSelectIndex(index);
    }

    return(
        <div className='container-slider'>
            {
                dataSlider.map((obj, index)=>{
                    return(
                        <div 
                        key={obj.id}
                        className={selectIndex === index + 1 ? "slide active-anim":"slide"}
                        style={{backgroundImage: `url(${obj.url})`}}
                        >
                            <p className='title'>{obj.text}</p>
                        </div>
                    )
                })
            }
            <BtnSlider moveSlide={nextSlide} direction={"next"}/>
            <BtnSlider moveSlide={backSlide} direction={"back"}/>
            <div className="container-dots">
                {
                    Array.from({length: 3}).map((item, index)=>(
                        <div
                        key={index}
                        className={selectIndex === index + 1? "dot active": "dot"}
                        onClick={()=> movDot(index + 1)}>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}