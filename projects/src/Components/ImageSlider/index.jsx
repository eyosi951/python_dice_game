import {useState, useEffect} from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'
import './style.css'

export default function ImageSlider({url, limit, page}){

    const [images, setImages]=  useState([]);
    const [loading, setLoading]= useState(false);
    const [currentSlide, setCurrentslide]= useState(0);
    const [errorMsg, setErrorMsg]= useState(null);
    
    async function fetchImages(getUrl) {
        try {
            setLoading(true);
            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
                setLoading(false);
            }
        }
        catch (error) {
            setErrorMsg(error.message !== null)
            if (error.message !== null) <div >error occured {error.message}</div>
        }

    }

    useEffect(() => {
        if (url !== '') fetchImages(url);
        const interval=       setInterval( ()=>{
            setCurrentslide( currentSlide === images.length - 1 ? 0 : currentSlide + 1)
           }, 5000);

        return ()=> clearInterval(interval);

    }, [url, currentSlide]);

    console.log(images);

    if (loading) { return <div >Loading ... </div> }

    function handlePrevios(){
          setCurrentslide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
    }
    function handleNext(){
        setCurrentslide( currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }

 


    return (
        <div  className='container'>
            <BsArrowLeftCircleFill className='left-arrow'  onClick={handlePrevios}/>
            {
                images && images.length ?
                    images.map((imageItems, index) => (
                        <img key={imageItems.id}
                            src={imageItems.download_url}
                            alt={`image at index ${index}`}
                             className= { currentSlide === index ?  "current-image" : "hidden-slide"}
                        />

                    ))

                    : null}

            <BsArrowRightCircleFill className='right-arrow' onClick={handleNext}/>
            <span className="circle-indicator">
                {
                    images && images.length ?
                        images.map((_, index) => (
                            <button className={ index === currentSlide ? "current-indicator": "inactive-indicator"}
                                key={index}
                                
                                onClick={()=>setCurrentslide(index)}>

                            </button>

                        ))
                        : null
                }
            </span>

        </div>
    )
}