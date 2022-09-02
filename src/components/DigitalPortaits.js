import DesignItem from "./DesignItem";
import Oxapps from './images/oxapps.png';
import Proton from './images/proton.jpg';
import Rashmika from './images/rashmika.jpg';
import Renai from './images/renai.png';
import Sapota from './images/sapota.jpg';

function DigitalPortraits() {
  return (
    <div className="margin-2">
      <div>
        <p className="items-title width-100">I work on various desing stuff! Click one from below list to see more.</p>
        <div className="items-bg">
        <div className='flex-container'>
          <div className='flex-row'>
          <DesignItem name='Digital Portaits' image={Rashmika}/>
          <DesignItem name='Posters' image={Renai}/>
          </div>
          <div className='flex-row'>
          <DesignItem name='Logos' image={Proton}/>
          <DesignItem name='Typography' image={Sapota}/>
          </div>
          <div className='flex-row'>
          <DesignItem name='UI UX' image={Oxapps}/>
          </div>  
        </div>
        </div>
      </div>
    </div>
  );
}

export default DigitalPortraits;
