import {useState, useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useDarkMode = (key, initialValue) => {
    const [value, setValue] = useLocalStorage(key, initialValue);
    useEffect(() => {
        if(value){
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode')
        }
    }, [value, initialValue, setValue])
    // setValue(initialValue);
    console.log(localStorage.getItem(key))
    return[value, setValue]
}