import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import {useState} from "react"
import {selectCars} from "../features/car/carSlice"
import {useSelector} from "react-redux"
function Header() {
    const cars = useSelector(selectCars)
    const [burgerStatus, setBurgerStatus]=useState(false)
    console.log(cars)
    return (
        <Container>
            <a>
                <img src="images/logo.svg"/>
            </a>
            <Menu>
                {cars && cars.map((car,index)=>{
                  return  <a key={index} href="#">{car}</a>
                })}
            </Menu>
            <RightMenu>
                <a href="#"> Shop</a>
                <a href="#"> Tesla Account</a>
               <CustomMenu  onClick={()=>setBurgerStatus(true)}/>
            </RightMenu>   
            <BurgerNav show={burgerStatus} >  
                <CloseWrapper>
                <CustomClose  onClick={()=>setBurgerStatus(false)}/>
                </CloseWrapper>
                {cars && cars.map((car,index)=>(
                    <li><a href="#">{car}</a></li>
                ))}
                <li><a href="#">Existing Inventories</a></li>
                <li><a href="#">Existing Inventories</a></li>
                <li><a href="#">Existing Inventories</a></li>
                <li><a href="#">Existing Inventories</a></li>
                <li><a href="#">Existing Inventories</a></li>
                <li><a href="#">Existing Inventories</a></li>
            </BurgerNav>      
        </Container>
         
    )
}

export default Header

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 20px;
top:0;
left:0;
right:0;

z-index:19;


`
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
@media(max-width:768px){
    display:none;
}
a{
    font-weight:600;
    padding:0 10px;
    text-transform:uppercase;   
    flex-wrap: nowrap;
}
`
const RightMenu = styled.div`

align-items:center;
display:flex;

a{
    font-weight:600;
    padding:0 10px;
    text-transform:uppercase;   
    margin-right:10px;
   
}

`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;

`
const BurgerNav = styled.div`
 background-color:white;
 width:300px;
 top:0;
 bottom:0;
 right:0%;
 position:fixed;
 z-index:16;
 padding:20px;
 list-style:none;
 text-align:start;
 display:flex;
 flex-direction:column;
 transform: ${props=>props.show ?'translateX(0)':'translateX(100%)'};
 transition: transform 0.2s;
 li{
    padding: 15px 0;
    border-bottom:1px solid rgba(0,0,0,2);
    a{
        font-weight:600;
    }
 
}


`
const CustomClose = styled(CloseIcon)`
cursor:pointer;
`
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`