
import { Link } from 'react-router-dom';
import {useState, useEffect} from 'react';
import { FaArrowUp } from 'react-icons/fa';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const BackToTopButton = () => {
    const [backToTopButton,setBackToTopButton] =useState (false)


    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY >100){
                setBackToTopButton(true)

            }else{
                setBackToTopButton(false)
            }
        })
    },[])

const scrollUp = ()=>{
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
}

    return (
        <div>
           { backToTopButton &&(
                <button
               className='text-2xl font-bold'
                style={{
                    backgroundColor: "#e98c5d",
                    position:"fixed",
                    bottom:"50px",
                    right:"50px",
                    height:"50px",
                    width:"50px",
                    fontSize:"30px",
                    borderRadius:"50%",
                    boxShadow:"0 0 10 rgba(0, 0, 0, 0.2)",
                    cursor:"pointer",

                }}
                onClick={scrollUp}
                > ^</button>
            )
           }
        </div>
    );
};

export default BackToTopButton;
