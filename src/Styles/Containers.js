import styled from 'styled-components';

export const MainContainerBlue = styled.body`
width: 100vw;
height: 100%;
background-color: #dfeaf2;
display: flex;

`

export const ContentContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

export const CategoryContainer = styled.div`
width: 25%;
height: 100%;
background-color: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 10px 10px 10px 10px;
transition: transform 1s;
&:hover{
    transform: scale(1.05);
}
`

export const CategorySection = styled.div`
width: 98%;
height: 100%;
margin-top: -2%;
display: flex;
justify-content: space-around;
align-items: left;
`

export const CategoryContent = styled.a`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-decoration: none;
color: black;
border: 0;
&:hover{
    cursor: pointer;
}
`

export const CursoContainer = styled.div`
width: 95%;
height: 100%;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-template-rows: 1fr 1fr 1fr; 
justify-content: space-around;
align-items: center;
margin-left: 4%;
margin-top: -3%;
`

export const Materia = styled.div`
width: 80%;
padding: 3%;
height: 90%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: left;
background-color: #fff;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
border-radius: 10px 10px 10px 10px;
`

export const ButtonContainer = styled.div`
width: 25%;
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 4%;
`


