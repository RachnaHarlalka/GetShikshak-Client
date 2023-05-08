import SearchBox from "../SearchBox";
import './style.css'

function SearchPage(){
    return(
        <div className="container mx-auto" id="main-div">
            <div className="search-page-sub-div" id="search-box-div">
                <SearchBox/>
            </div>
            <div className="search-page-sub-div" id="filters-div">
                Here We have to add all the Filter Option
            </div>
            <div className="search-page-sub-div" id="search-page-tutor-card">
                Tutor Card
                
            </div>
        </div>
    )
}

export default SearchPage;