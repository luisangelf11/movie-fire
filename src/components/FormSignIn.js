import React, {useState, useEffect} from 'react';
import { helpHttp } from '../helpers/helpHttp';
import './FormSignIn.css';
import Loader from './Loader';

const initialForm = {
    id: null,
    name: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
}

export default function FormSignIn(){

    const [db, setBd] = useState(null);
    const [form, setForm] = useState(initialForm);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let http = helpHttp();
    let url = "http://localhost:5000/users";

    useEffect(()=>{
        http.get(url)
        .then((res)=>{
            if(!res.err){
                setBd(res);
                setError(null);
            }else{
                setBd(null);
                setError(res);
            }
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    const createUser =(data)=>{
        
        let options = {
            body:data, 
            headers:{"Content-type": "application/json"}
        };

       let searchUser = db.filter((el)=> el.email === form.email || el.username === form.username);

       if(!searchUser.length){
            http.post(url, options)
            .then((res)=>{
                if(!res.err){
                    setBd([...db, res]);
                    setLoading(true);
                    setTimeout(()=>{
                        setLoading(false);
                        alert("Registered user!"); 
                    },5000);
                     //Clear form
                    setForm(initialForm);
                }else{
                    setError(res);
                }
            });
       }else{
            alert("The user is already registered");
            return;
       }
    }

    const handelChange=(e)=>{
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    const handelSubmit =(e)=>{
        e.preventDefault();
        if(!form.name && !form.lastname && !form.email && !form.username && !form.password){
            //..
            alert("Incomplete data");
            return;
        }

        //Primary function
        createUser(form);
    }

    return(
        <>
            <form className='form-sign-in' onSubmit={handelSubmit}>
                <i className="fa-solid fa-users"></i>
                <input type="text" placeholder='Name' name='name' value={form.name} onChange={handelChange} required/>
                <input type="text" placeholder='Last Name' name='lastname' value={form.lastname} onChange={handelChange} required/>
                <input type="email" placeholder='E-mail' name='email' value={form.email} onChange={handelChange} required/>
                <input type="text" placeholder='Username' name='username' value={form.username} onChange={handelChange} required/>
                <input type="password" placeholder='Password' name='password' value={form.password} onChange={handelChange} required/>
                <input className='btn-send' type="submit" value={"Submit"} />
            </form>
            {error && <p className='errorText'>{error.status} || {error.statusText}</p>}
            {loading && <Loader />}
        </>
    );
}