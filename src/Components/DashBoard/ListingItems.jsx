import './listingitems.css';

function ListingItems({itemsArr,heading}){
    function mapItemsToLi(){
        const mapedLi=itemsArr.map((item)=>{
                return(
                    <li className='li-items'>{item}</li>
                )
            })
        return mapedLi;
    }
    return (
        <div id='listing-items-root-div'>
            <div id='list-heading'>
                {heading}
            </div>
            <div id='items-list'>
                <ul>
                    {mapItemsToLi()}
                </ul>
            </div>
        </div>
    )
}

export default ListingItems;