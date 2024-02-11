import React ,{useEffect,useRef } from 'react'
import  { saveAs } from 'file-saver'

export default function SaveImage() {

  
    const download = () =>{
        saveAs('https://raw.githubusercontent.com/techie23456/images/main/ironMan.png','image.png')
    }
  
    
    const wasCalled = useRef(false);

    useEffect(() => {
        if(wasCalled.current) return;
        wasCalled.current = true;
            
        download()
         /* CODE THAT SHOULD RUN ONCE */

    }, []);

    return <div> content </div>;
 
}





