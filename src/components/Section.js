import React from 'react'
import styled from 'styled-components'

function Section({title, description, backgroundImg, leftButtonTxt,rightButtonTxt, downArrow}) {
  return (
    <Wrap bgImage={backgroundImg}>
        <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
        </ItemText>
        <Button>
            <ButtonGroup>
                <LeftButton>
                {leftButtonTxt}
                </LeftButton>
                {rightButtonTxt &&
                    <RightButton>
                    {rightButtonTxt}
                </RightButton>
                }
            </ButtonGroup>
            {downArrow &&
            <DownArrow src="/images/down-arrow.svg"/>   
            }
        </Button>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw ;
    height : 100vh;
    // background-image: url('/images/model-s.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items : center;
    background-image: ${props => `url("/images/${props.bgImage}")`};
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: centre;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px)
    {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23,26,32,0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    font-size: 14px;
    cursor: pointer;
    text-transform: uppercase;
    margin: 8px;
`

const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    animation animateDown infinite 1.5s;
    overflow: hidden;
`
const Button = styled.div``