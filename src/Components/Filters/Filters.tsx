import React from "react";
import './style.scss'

const Filters = () => {
    return(
        <div className={'filters-wrapper'}>
            <ul className={'pizza-filter'}>
                <li className={'pizza-filter__item pizza-filter__item_active'}>Все</li>
                <li className={'pizza-filter__item'}>Мясные</li>
                <li className={'pizza-filter__item'}>Вегетарианская</li>
                <li className={'pizza-filter__item'}>Гриль</li>
                <li className={'pizza-filter__item'}>Острые</li>
                <li className={'pizza-filter__item'}>Закрытые</li>
            </ul>
            <div className={'sorting-filter'}>
                    <span className={'sorting-filter__title'}>Сортировка по: <span
                        className={'sorting-filter__value'}>популярности</span></span>
                <div className={'sorting-filter-wrapper'}>
                    <span className={'sorting-filter__item sorting-filter__item_active'}>популярности</span>
                    <span className={'sorting-filter__item'}>по цене</span>
                    <span className={'sorting-filter__item'}>по алфавиту</span>
                </div>
            </div>
        </div>
    )
}

export default Filters