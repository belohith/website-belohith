import YTVideos from "./YTVideos";

function Youtube() {
    return ( 
        <div className='layout' style={{backgroundColor: '#db2626'}}>
            <p className='layout-title'>Youtube</p>
            <div>
                <YTVideos/>
            </div>
        </div>
     );
}

export default Youtube;