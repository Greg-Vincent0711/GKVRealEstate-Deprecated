/**
 * @author Greg Vincent
 * Template for each individual listing on the listings page
 * @date 6/28/22
 */

function Listing(props){
    const {image,building, aptNumber, cost} = [...props];
    return(
        <div className="listing-container"
        image = {props[0]}> 
            <h1>{building}</h1>
            <h1>{aptNumber}</h1>
            <h1>{cost}</h1>
        </div>
    )
}


export default Listing;