import Cover1 from './images/cover1.jpg';
import Cover2 from './images/cover2.jpg';

function TheBook() {
    return ( 
        <div className='about-book'>
       <p className='about-book-header'>Waiting in Bangalore: Part 1</p>
       <div className='flex-row align-center'> 
      <img src={Cover2} width = '100px' height='auto' style={{margin: 5, cursor: 'pointer'}}/>
      <img src={Cover1}  width = '100px' height='auto'  style={{margin: 5, cursor: 'pointer'}}/>
      </div>
    </div>
     );
}

export default TheBook;