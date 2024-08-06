import stylepage from './Footer.scss';
import { FiMail } from "react-icons/fi";





export default function Footer() {
	return (
		 <div className='Footer'>
       <a href="mailto:dimitrijacquart@gmail.com"><span className='cv' id="contact"><FiMail className='icons'/> dimitrijacquart@gmail.com</span></a>
       <p className='end'>© 2023 Dimitri JACQUART, Tous droits réservés.
						</p>
    
    </div>
	);
}
