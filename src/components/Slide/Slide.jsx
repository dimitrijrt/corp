import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slide.scss";
import React from "react";
import image from "../../assets/ordi.jpg"
import imgex from "../../assets/ex.png"
import imgkas from "../../assets/kas.png"
import imgport from "../../assets/port.png"
import imgarg from "../../assets/arg.png"



function Slide() {

    const datas  = [

        {
            id: 1,
           
            picture: imgkas,
        },
         {
            id: 2,
           
            picture: imgex
        },
         {
            id: 3,
            
            picture:imgarg
        },
        {
            id: 3,
            title: "Titre",
            text: 'fgfdgfdg',
            picture:imgport
        }


    ]


    return (
        <main className="slide">
        <h4 className="real">Réalisations</h4>
        <Carousel autoPlay infiniteLoop showThumbs={false} dynamicHeight={false}>
            {datas.map((slider, index) => (
                <div className='projetTile'> 
                    <h2 className='titre'>{slider.title}</h2>
                      <img className='images' src={slider.picture} alt="projets images"></img>
                        <div className='description'>
                            <p>{slider.text}</p>                                                                    
                        </div> 
                </div>
            
                    
                    

            ))}
            

             
        </Carousel>
        </main>

    )
       
       
}


export default Slide