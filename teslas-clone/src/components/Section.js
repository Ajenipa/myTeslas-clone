import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';
function Section({text,description,leftBtnText,rightBtnText,backgroundImage}) {
    return (
        
        <Wrap bgImage={backgroundImage}>
            <Fade bottom>
            <ItemText>
                <h1>{text} </h1>
                <p>{description}</p>

            </ItemText>
            </Fade>
            <Button>
                <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                   {leftBtnText}
                </LeftButton>
               { rightBtnText && <RightButton>
                    {rightBtnText}
                </RightButton> }

            </ButtonGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg"/>
            </Button>

        </Wrap>
        
    )
}

export default Section
const Wrap = styled.div`
   width:100vw;
   height:100vh;
   background-size:cover;
   background:orange;
   background-position:center;
   background-repeat:no-repeat;
   display:flex;
   flex-direction:column;
   background-image-position:center;
   justify-content:space-between;
   align-items:center;
   background-image: ${props=>`url("/images/${props.bgImage}")`}; 
`
const ItemText = styled.div`
  padding-top:15vh;
  text-align:center;

`
const ButtonGroup =  styled.div`
     display:flex;
     margin-buttom: 30px;
     @media(max-width:768px){
         flex-direction:column;
     }
`
const LeftButton = styled.div`
background-color:rgba(23,26,32,0.8);
color:white;
height:40px;
width:256px;
display:flex;
justify-content:center;
align-items:center;
opacity:0.85;
border-radius:100px;
text-transform:uppercase;
cursor:pointer;
margin:30px;
`
const RightButton = styled(LeftButton)`
background:white;
color:black;
opacity:0.65;

`
const DownArrow = styled.img`
margin-top:40px;
height:40px;
animation:animateDown infinite 1.5s;
`
const Button = styled.div`

`