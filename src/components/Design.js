import DigitalPortraits from './DigitalPortaits';
import Logos from './Logos';
import Posters from './Posters';
import Typography from './Typography';
import UIUX from './UIUX';

function Design() {
    return ( 
        <div className='layout' style={{backgroundColor: '#efbebd'}}>
            <p className='layout-title'>Design</p>
            <div>
                <DigitalPortraits/>
                
            </div>
        </div>
     );
}

export default Design;