import React from 'react';
import './search.styles.scss';
const pic = 'img/Header_logo.png';
const alt = 'picture'


interface Props {

}
export const Search = (props: Props) => {
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <img src={pic} alt={alt} />
                </div>
                <div className="title">React Weather F1</div>
            </div>
            <div className="search">
                <div className="search_form">
                    <form className="form">
                        <input type="text" placeholder="Choose the country" className="search_input" />
                    </form>
                </div>
                <button className="button">Поиск</button>
            </div>
        </header>
    )
}