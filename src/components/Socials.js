import classes from './UIBasics.css';
import Behance from './social-icons/behance.png';
import Dribbble from './social-icons/dribbble.png';
import Facebook from './social-icons/facebook.png';
import Instagram from './social-icons/instagram.png';
import LinkedIn from './social-icons/linkedin.png';
import Medium from './social-icons/medium.png';
import Pinterest from './social-icons/pinterest.png';
import Twitter from './social-icons/twitter.png';
import Youtube from './social-icons/youtube.png';
import Snapchat from './social-icons/snapchat.png';
import Spotify from './social-icons/spotify.png';
import Github from './social-icons/github.png';

function Socials() {
    return ( 
        <div>
            <a href='https://www.behance.net/belohith' target='_blank'><img src={Behance} alt='behance' className='social-icon'/></a>
            <a href='https://dribbble.com/lohith36' target='_blank'><img src={Dribbble} alt='dribbble' className='social-icon'/></a>
            <a href='https://www.facebook.com/lohith.urfrnd' target='_blank'><img src={Facebook} alt='facebook' className='social-icon'/> </a>
            <a href='https://www.instagram.com/belohith/' target='_blank'><img src={Instagram} alt='instagram' className='social-icon' /> </a>
            <a href='https://in.linkedin.com/in/lohith-bollineni-aa095a147' target='_blank'><img src={LinkedIn} alt='linkedin' className='social-icon' /> </a>
            <a href='https://medium.com/@belohith' target='_blank'><img src={Medium} alt='medium' className='social-icon ' /> </a>
            <a href='https://in.pinterest.com/bollinenilohith/' target='_blank'><img src={Pinterest} alt='pinterest' className='social-icon'/> </a>
            <a href='https://twitter.com/lohithurfrnd?lang=en' target='_blank'><img src={Twitter} alt='twitter' className='social-icon '/> </a>
            <a href='https://www.youtube.com/user/Lohithurfrnd' target='_blank'><img src={Youtube} alt='youtube' className='social-icon ' /> </a>
            <a href='https://www.snapchat.com/add/belohith?share_id=xOzbqB8DEMY&locale=en-US' target='_blank'><img src={Snapchat} alt='snapchat' className='social-icon'/> </a>
            <a href='https://open.spotify.com/show/77tgTTXihCsRqLSlFmyovx?si=fc3add6974564975' target='_blank'><img src={Spotify} alt='spotify' className='social-icon ' /> </a>
            <a href='https://github.com/belohith' target='_blank'><img src={Github} alt='github' className='social-icon '/> </a>
        </div>
     );
}

export default Socials;