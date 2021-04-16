import React, {useState, useEffect} from 'react'
import {FaBars, Fatimes} from "react-icons/fa"
import { IconContext } from "react-icon/lib"

const index = () => {
    const[click, setClick] = useState(false)
    const[scroll, setScroll] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScroll(true)
        }else{
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
            <IconContext.Provider value={{ color:"#141414"}}>
                <Nav active={scroll} click={click}>
                    <NavBarContainer>
                        <NavLogo to="/">
                            <NavIcon/>
                                EXPLOR
                        </NavLogo>
                    </NavBarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default index
