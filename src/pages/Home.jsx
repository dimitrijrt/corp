import stylepage from "./Home.scss"
import image from "../assets/ordi.jpg"
import Slide from "../components/Slide/Slide";
import Form from "../components/Form/Form";
import picture from "../assets/ordi.jpg"


export default function Home() {
	return (
        <div className="home">
            <div className="loader">
                <div class="lds-ripple"><div></div><div></div></div>
            </div>
            <div className="section">
                <main class="container">
                    <p className="vitrine">Créez votre site vitrine</p>
                    <section class="animation">
                        <div class="first"><div>100% personnalisé</div></div>
                        <div class="second"><div>Référencement SEO</div></div>
                        <div class="third"><div>Design moderne</div></div>
                    </section>
                </main>
                
            
            <div className="formhome">
                <div className="imgtxt">
                    <div className="left">
                        <img className="image" src={picture}/>
                    </div>
                <div className="txt">
                     
                    <h3>Besoin d'un site vitrine ?</h3>
                     <p>Gagnez en visibilité grâce à un sit web personnalisé !</p>
                
                <p> Vous êtes un commerce qui veut attirer plus de clients,Vous êtes un restaurant , un entrepreneur , vous avez un projet , Vous avez besoin d'un site web ? </p>
                <p>Contactez nous ➡️ </p>
                
            </div>
           
             <Form/>  
            </div>
               
                
                
                
            </div>
             
            </div>
            
        </div>
        
       
		
	);
}
