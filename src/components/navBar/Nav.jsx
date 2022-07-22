import React from "react";
import { useState } from "react";
import './Nav.css'
import Hero from '../hero/Hero'
import logo from "./img/logo.svg"
import iconDown from "./img/icon-arrow-down.svg"
import iconUp from "./img/icon-arrow-up.svg"
import iconCalendar from "./img/icon-calendar.svg"
import iconPlanning from './img/icon-planning.svg'
import iconReminders from "./img/icon-reminders.svg"
import iconTodo from "./img/icon-todo.svg"
import iconMenu from "./img/icon-menu.svg"
import iconCloseMenu from "./img/icon-close-menu.svg";


const Nav = ()=>{
    const [isMainMenuOpen,setMainMenuOpen]= useState(false)
    const [isSubMenuFeatureOpen,setSubMenuFeatureOpen] = useState(false)
    const [isSubMenuCompanyOpen,setSubMenuCompanyOpen] = useState(false)
    const handleOpenSubMenuFeature = (e)=>{
        e.preventDefault()
        setSubMenuFeatureOpen(!isSubMenuFeatureOpen)

    }
    const handleOpenSubMenuCompany = (e)=>{
        e.preventDefault()
        setSubMenuCompanyOpen(!isSubMenuCompanyOpen)
        // console.log("btn cliked!")
    }
    const handleOpenMainMenu = (e)=>{
        e.preventDefault()
        setMainMenuOpen(!isMainMenuOpen)
    }
      const handleCloseMainMenu = ()=>{
        setMainMenuOpen(false)
    }

    return(
        <div className={`relative-pos ${isMainMenuOpen?"bg-blur":""}`}>
                <nav>
                    <a href="/"><img src={logo} alt="Logo" /></a>
                    <div id="main-menu" className={`${isMainMenuOpen?"main-menu-open":"main-menu-close"}`}>
                        <img src={iconCloseMenu} className="icon-close" alt="close" onClick={handleCloseMainMenu} />
                        <ul className="main-menu" >
                            <li>
                                <a href="/" onClick={handleOpenSubMenuFeature}>Feature {isSubMenuFeatureOpen?<img src={iconUp} alt="up" />:<img src={iconDown} alt="down" />}</a>
                                <ul className={`sub-menu ${isSubMenuFeatureOpen?"open-sub-menu-feature":"close-sub-menu-feature"}`}>
                                    <li><a href="/"><img src={iconTodo} alt="to do" /> Todo List </a></li>
                                    <li><a href="/"><img src={iconCalendar} alt="calendar" />Calendar</a></li>
                                    <li><a href="/"><img src={iconReminders} alt="reminders" />Reminders</a></li>
                                    <li><a href="/"><img src={iconPlanning} alt="plannig" />Planning</a></li>
                                </ul>
                            </li>
                            <li>
                                <a href="/"  onClick={handleOpenSubMenuCompany}>Company {isSubMenuCompanyOpen?<img src={iconUp} alt="up" />:<img src={iconDown} alt="down" />}</a>
                                <ul className={`sub-menu ${isSubMenuCompanyOpen?"open-sub-menu-company":"close-sub-menu-company"}`}>
                                    <li><a href="/"> History</a></li>
                                    <li><a href="/">Our Team</a></li>
                                    <li><a href="/">Blog</a></li>
                                </ul>
                            </li>
                            <li><a href="/">Careers</a></li>
                            <li><a href="/">About</a></li>
                        </ul>
                        <div className="nav-btn">
                            <button className="btn">Login</button>
                            <button className="btn">Register</button>
                        </div>
                    </div> 
                    <img src={iconMenu} alt="menu" className="icon-menu" onClick={handleOpenMainMenu} />
                </nav>
                <Hero MenuSate= {isMainMenuOpen}/>
        </div>
    )
}
export default Nav;