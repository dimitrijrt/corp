import stylepage from './Footer.scss';
import { FiMail } from "react-icons/fi";





export default function Footer() {
	return (
		 <div className='Footer'>
       <span className='cv' id="contact"><FiMail className='icons'/> dev.corp.contact@gmail.com</span>
       <p className='end'>© Dev Corp Agence, Tous droits réservés.</p>
    
    </div>
	);
}
