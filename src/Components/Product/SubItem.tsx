import React from "react";
import {getClassName} from '../../functions/functions'

const SubItem = ({setState, state, subItem}:any) => {

    const changeSubItem = () => {
        if(subItem.enabled) {
            setState(subItem)
        }
    }
    let isEnabled = subItem.enabled
        ? `${state && getClassName(state.title, subItem.title, 'configuration__item')}`
        : 'configuration__item configuration__item_disabled'
    return(
        <span className={isEnabled}
              onClick={changeSubItem}>{subItem.title}</span>
    )
}

export default SubItem