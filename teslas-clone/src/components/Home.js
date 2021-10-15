import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
    return (
        <Container>
          
             <Section 
             text="Model S" 
             backgroundImage='model-s.jpg'
             description="Order Online For Touchless Delivery"
             leftBtnText=" Custom Order"
             rightBtnText="Existing Inventories"
              />
            
             <Section 
             text="Model X" 
             backgroundImage='model-x.jpg'
             description="Order Online For Touchless Delivery"
             leftBtnText=" Custom Order"
             rightBtnText="Existing Inventories"/>
             <Section
             text="Model Y" 
             backgroundImage='model-y.jpg'
             description="Order Online For Touchless Delivery"
             leftBtnText=" Custom Order"
             rightBtnText="Existing Inventories"/>
             
             <Section
             text="Model III" 
             backgroundImage='model-3.jpg'
             description="Order Online For Touchless Delivery"
             leftBtnText=" Custom Order"
             rightBtnText="Existing Inventories"
             
             />
              <Section
             text="Solar Panels" 
             backgroundImage='solar-panel.jpg'
             description="Lowest Cost Solar Panels in America"
             leftBtnText=" Custom Order"
             rightBtnText="Existing Inventories"
             
             />
              <Section
             text="Solar Roof" 
             backgroundImage='solar-roof.jpg'
             description="Produce Clean Energy From Your Room"
             leftBtnText=" Custom Order"
             rightBtnText="Existing Inventories"
             
             
             />
               <Section
             text="Accessories" 
             backgroundImage='accessories.jpg'
             
             leftBtnText=" Shop Now"
             
             
             
             />
        </Container>
           
       
    )
}

export default Home
const Container = styled.div`
heigh:100vh

`