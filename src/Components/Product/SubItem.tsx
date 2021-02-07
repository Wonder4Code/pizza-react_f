import React from "react";

const SubItem = ({setState, state, subItem}:any) => {

    return(
        <span className={`configuration__dough-item configuration__item 
                        ${state && subItem.title === state.title ? 'configuration__item_active' : ''}`}
              onClick={() =>{setState(subItem)}}>{subItem.title}</span>
    )
}

export default SubItem