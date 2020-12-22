import React from 'react';

import './collection-preview.style.scss';

const CollectionPreview = ({ title, items }) => {
    return(
        <div className="collection-preview" >
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview">
                {items
                    .filter((item, index) => index < 4) // for showing maximum 4 items
                    .map(item => (
                    <div key={item.id}> {item.name} </div>
                ))}
            </div>
        </div>
    )
}

export default CollectionPreview;