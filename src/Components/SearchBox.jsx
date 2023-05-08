import {GoSearch} from 'react-icons/go'
import {Link} from 'react-router-dom'
import SelectInput from './SelectInput'
import '../index.css'
function SearchBox(){
    return(
        <div className='rounded h-fit' id="search-box">
            <SelectInput optionArray={['Select Location','a','b','c']} />
            <input type="text" className="p-2 w-[100%] border-0" id="input-box" placeholder="Type here to Search"/>
            <Link to="/searchPage">
                <button className='flex justify-center items-center rounded-r' id='search-btn'><GoSearch/></button>
            </Link>
        </div>
    )
}

export default SearchBox;