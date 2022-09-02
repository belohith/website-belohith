function BlogThumbnail(props) {
    return ( 
        <div className='blogTh'>
            <a href={props.link} className='text-decoration' target='_blank'>
            <div className='blogThTitle'>{props.title}</div>
            <div className='flex-row'>
            <div className='blogThSub'>{props.date}</div>
            <div className='blogThSub'>{props.time}</div>
            <div className='blogThSub'>{props.theme}</div>
            </div>
            </a>
        </div>
     );
}

export default BlogThumbnail;