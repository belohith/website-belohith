import DesignItem from "./DesignItem";
import Photo1 from './images/photo1.jpg';
import Photo2 from './images/photo2.jpg';
import Photo3 from './images/photo3.jpg';
import Photo4 from './images/photo4.jpg';
import Photo5 from './images/photo5.jpg';
import Photo6 from './images/photo6.jpg';
import Photo7 from './images/photo7.jpg';
import Photo8 from './images/photo8.jpg';
import Photo9 from './images/photo9.jpg';
import Photo10 from './images/photo10.jpg';

function Photography() {
    return (
      <div className='margin-2'>
        <div>
        <p className="items-title width-100">A few photos I clicked</p>
        <div className='items-bg flex-container'>
          <div className='flex-row'>
          <DesignItem name='' image={Photo1}/>
          <DesignItem name='' image={Photo2}/>
          </div>
          <div className='flex-row'>
          <DesignItem name='' image={Photo3}/>
          <DesignItem name='' image={Photo4}/>
          </div>
          <div className='flex-row'>
          <DesignItem name='' image={Photo5}/>
          <DesignItem name='' image={Photo6}/>
          </div>
          <div className='flex-row'>
          <DesignItem name='' image={Photo7}/>
          <DesignItem name='' image={Photo8}/>
          </div>
          <div className='flex-row'>
          <DesignItem name='' image={Photo9}/>
          <DesignItem name='' image={Photo10}/>
          </div>
        </div>
        </div>
      </div>
    );
  }
  
  export default Photography;
  