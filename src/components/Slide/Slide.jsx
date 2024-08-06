import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import "./Slide.scss";
import React from "react";
import image from "../../assets/ordi.jpg"



function Slide() {

    const datas  = [

        {
            id: 1,
            title: "Titre",
            text: 'fgfdgfdg',
            picture: image,
        },
         {
            id: 2,
            title: "Titre",
            text: 'fgfdgfdg',
            picture: "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
        },
         {
            id: 3,
            title: "Titre",
            text: 'fgfdgfdg',
            picture:"https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg"
        }


    ]


    return (

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

    )
       
       
}


export default Slide