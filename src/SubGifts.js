import React from "react";
import "./SubGifts.css";


function SubGifts({image, description, price,title , url, id}) {
    return (
        <div>
            <div className="subgifts">
                <h2>{title}</h2>
                <img src={image} alt={description}/>
                <p>{description}</p>
                <p><a href={url}>{price}</a></p>
            </div>
        </div>
    )
};

export default SubGifts;