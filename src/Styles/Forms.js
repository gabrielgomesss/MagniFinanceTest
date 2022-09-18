import styled from 'styled-components';

export const FormContainer = styled.form`
width: 90%;
height: 100%;
display: flex;
flex-direction: column;
margin-top: -2%;
align-items: center;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
background-color: #2384cc;
border-radius: 10px 10px 10px 10px;
`
export const ToggleFormContainer = styled.form`
width: 85%;
height: 100%;
display: flex;
flex-direction: row;
margin-top: -3%;
padding: 3.5%;
padding-top: 6%;
align-items: center;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
background-color: #2384cc;
border-radius: 10px 10px 10px 10px;
margin-bottom: 3%;
`

export const SectionForm = styled.div`
width: 70%;
height: 100%;
display: flex;
justify-content: space-around;
margin-left: 5%;
margin-top: -3%;
`

export const SectionItem = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 6%;
align-items: center;
justify-content: center;
`

export const Labels = styled.label`
width: 100%;
font-size: 1.2rem;
margin-left: -10%;
font-family: 'Montserrat', sans-serif;
color: white;
// `