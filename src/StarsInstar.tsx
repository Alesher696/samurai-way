import React from "react";

function StarsInStar() {
    console.log('starsInStars rendering')
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}

function Star() {

    console.log('star rendering')
    return (
        <div>Star</div>
    )
}


export default StarsInStar;