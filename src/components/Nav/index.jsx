import React from 'react'
import Filter from "../../assets/icon/filter.svg"
import Search from "../../assets/icon/search-normal.svg"
import Like from "../../assets/icon/like.svg"
import Nofication from "../../assets/icon/notification.svg"
import Settings from "../../assets/icon/settings.svg"
import "./nav.scss"
const Nav = () => {
    return (
        <nav>
            <div className="container">

                <div className="nav-left">

                    <h1>MORENT</h1>
                    <div className="inpt-c">
                        <img src={Search} alt="logo" />
                        <input type="text" placeholder='Search something here ' />
                        <img src={Filter} alt="logo" />
                    </div>
                </div>
                <div className="nav-right">
                    <span><img src={Like} alt="logo" /></span>
                    <span><img src={Nofication} alt="logo" /></span>
                    <span><img src={Settings} alt="logo" /></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Nav