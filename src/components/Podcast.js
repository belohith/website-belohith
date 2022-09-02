import SpotifyPodcast from "./SpotifyPodcast";

function Podcast() {
    return ( 
        <div className='layout' style={{backgroundColor: '#75c955'}}>
            <p className='layout-title'>Podcast</p>
            <div>
                <SpotifyPodcast/>
            </div>
        </div>
     );
}

export default Podcast;