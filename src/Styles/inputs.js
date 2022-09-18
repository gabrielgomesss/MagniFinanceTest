import styled from 'styled-components';

export const Inputs = styled.input`
height: 35px;
width: 325px;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px 4px 4px 4px;
margin-left: -10%;
text-align: center;
border: 0;
color: #000;
background-color: #fff;
font-family: 'Montserrat', sans-serif;
font-size: 1.125rem;
font-weight: 200;
letter-spacing: 2px;
&::placeholder{
    color: white;
    font-size: 1rem;
    font-weight: 600;
}
`
export const Inputs100 = styled.input`
height: 35px;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
border-radius: 4px 4px 4px 4px;
margin-left: -10%;
text-align: center;
border: 0;
color: #000;
background-color: #fff;
font-family: 'Montserrat', sans-serif;
font-size: 1.125rem;
font-weight: 200;
letter-spacing: 2px;
&::placeholder{
    color: white;
    font-size: 1rem;
    font-weight: 600;
}
`