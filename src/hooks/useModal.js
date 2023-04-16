import {useState} from 'react';

const useModal =()=>{
    const [openId, setOpen] = useState(null);
    const OpenModalId =(id)=> setOpen(id);
    const CloseModal =()=> setOpen(null);

    return[
        openId,
        OpenModalId,
        CloseModal
    ];
}

export default useModal;
