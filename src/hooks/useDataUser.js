import {useState} from 'react';

const dataDefault ={
    id: null,
    name: "",
    lastname: "",
    email: "",
    username: "",
    password: ""
}

const useDataUser =()=>{
    const[data, setData] = useState(dataDefault);
    return{
        data,
        setData
    }
}

export default useDataUser;