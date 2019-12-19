import React from "react"

export default ({ visable, color, icon, click }) => {
    if( !!visable ) return null;
    else return (
        <button 
            className={`btn btn-${ color || "default" }`}
            onClick={ ev => !!click && click() }
        >
            <i className={`fa fa-${ icon || "plus" }`}></i>
        </button>
    )
}