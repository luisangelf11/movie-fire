import React, {useState, useEffect} from 'react';
import useModal from '../hooks/useModal';
import './BoxMovies.css';
import Modal from './Modal';

export default function BoxMovies({titleBox, url}){
    const [data, setData] = useState([]);
    const [openId, OpenModalId, CloseModal] = useModal();

    useEffect(()=>{
        const getData =()=>{
            fetch(url)
            .then((res)=> res.ok? res.json(): Promise.reject(res))
            .then((json)=>{
                //console.log(json);
                setData(json);
            }).catch((err)=>{
                console.log(err);
            });
        }
        getData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const handelUrlNotActive =(name)=> {
      return alert(`The URL is not available for ${name}`);
    }

    return(
        <section className='box-father'>
            <h2>{titleBox}</h2>
            <section className="box-children">
                {
                data.map((el)=>
                <div key={el.id} className ="box-movie">
                    <img src={el.image} alt={el.name}/>
                    <h3>{el.name}</h3>
                    <div className='buttons-box'>
                        <button className='btn-see' onClick={()=>handelUrlNotActive(el.name)}>See</button>
                        <button className='btn-info' onClick={()=>OpenModalId(el.id)}>Info</button>
                    </div>
                    <Modal CloseModal={CloseModal} openId={openId} elementId={el.id}>
                        <h3>{el.name}</h3>
                        <p>{el.description}</p>
                    </Modal>
                </div>
                )}
            </section>
        </section>
    );
}