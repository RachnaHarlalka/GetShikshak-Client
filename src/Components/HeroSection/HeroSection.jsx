import SearchBox from '../SearchBox'
import HeroPic from '../../assets/heropic.svg'
import './style.css'


function HeroSection(){
   
    return (
        <div id="hero-section">
            <div className='sub-div' id="top-div">
                
                <p className='text-xl'>
                    <span className='hero-span'>SHIKSHAK</span> ke bina <span className='hero-span'>SHIKSHA</span> Aadhura<br/> 
                    <span className='hero-span'>GETSHIKSHAK</span> ke bina woh Rista Aadhura<br/><br/>
                    Use <span className='hero-span'>GETSHIKSHAK</span> and get your <span className='hero-span'>SHIKSHAK</span>
                </p>
                <div id="hero-section-image-div">
                    {/* <img alt="image" src={HeroPic} id="hero-section-image"/> */}
                </div>
            </div> 

            <div className='sub-div' id='bottom-div'>
                <SearchBox/>
            </div>

        </div>
    )
}

export default HeroSection