import SearchBox from '../SearchBox'
import HeroPic from '../../assets/HeroPic.png'
import './style.css'


function HeroSection(){
   
    return (
        <div id="hero-section">
            <div className='sub-div bg-primary-color' id="top-div">
                
                <p className='text-xl text-white'>
                    <span className='hero-span'>SHIKSHAK</span> ke bina <span className='hero-span'>SHIKSHA</span> Aadhuri<br/> 
                    <span className='hero-span'>GETSHIKSHAK</span> ke bina woh Rista Aadhuri<br/><br/>
                    Use <span className='hero-span'>GETSHIKSHAK</span> and Learn More from the Knowledge Experts
                </p>
            </div> 

            <div className='sub-div bg-primary-color' id='bottom-div'>
                <SearchBox/>
            </div>

        </div>
    )
}

export default HeroSection