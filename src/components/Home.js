import React from 'react'
import styled from "styled-components"
import Section from './Section'


function Home() {
  return (
    <Container>
        <Section
            title="Model S"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-s.jpg"
            leftButtonTxt = "Custom Order"
            rightButtonTxt = "Existing Inventory"
            downArrow = "Yes"
        />
        <Section
           title="Model Y"
           description= "Order Online for Touchless Delivery"
           backgroundImg="model-y.jpg"
           leftButtonTxt = "Custom Order"
           rightButtonTxt = "Existing Inventory"
        />
        <Section
            title="Model 3"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-3.jpg"
            leftButtonTxt = "Custom Order"
            rightButtonTxt = "Existing Inventory"
        />
        <Section
            title="Model X"
            description= "Order Online for Touchless Delivery"
            backgroundImg="model-x.jpg"
            leftButtonTxt = "Custom Order"
            rightButtonTxt = "Existing Inventory"
        />
        <Section
            title="Solar Panels"
            description= "Lowest Cost Solar Panels in America"
            backgroundImg="solar-panel.jpg"
            leftButtonTxt = "Order Now"
            rightButtonTxt = "Learn More"
        />
        <Section
            title="Solar Roof"
            description= "Produce Clean Energy From Your Roof"
            backgroundImg="solar-roof.jpg"
            leftButtonTxt = "Order Now"
            rightButtonTxt = "Learn More"
        />
        <Section
            title="Accessories"
            description= ""
            backgroundImg="accessories.jpg"
            leftButtonTxt = "Shop Now"
           
        />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;


`