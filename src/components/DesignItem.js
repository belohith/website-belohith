function DesignItem(props) {
    return ( 
        <div>
            <div className='design-item-image-bg'>
            <img className='design-item-image' src={props.image}/>
            </div>
            <p className='design-item-name'>{props.name}</p>
        </div>
     );
}

export default DesignItem;