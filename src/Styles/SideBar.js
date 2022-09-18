import styled from 'styled-components';

export const SideBar = styled.aside`
width: 16%;
background-color: #fff;
display: flex;
flex-direction: column;
padding-top: 1%;
`

export const SideBarTitle = styled.h1`
font-size: 1.5rem;
`
export const SidebarProfile = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const Separator = styled.div`
height: 1px;
width: 90%;
background-color: #000;
margin-top: -5%;
margin-bottom: 5%;
`
export const Separator2 = styled.div`
height: 1px;
width: 90%;
background-color: #000;
margin-top: -1%;
margin-bottom: 5%;
`
export const SeparatorWhite = styled.div`
height: 1px;
width: 90%;
background-color: #fff;
margin-top: -1%;
margin-bottom: 5%;
`

export const SidebarItemContainer = styled.span`
backgroun-color: #000;
width: 100%;
height: 75px;
display: flex;
align-items: center;
justify-content: space-evenly;
transition: background-color 1.2s ease;
&:hover{
    background-color: #eee;
}
`

export const SidebarSelection = styled.div`
height: 30%;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: left;
`

export const SidebarItem = styled.a`
width: 50%;
font-size: 1rem;
text-decoration: none;
color: #000;
font-weight: 500;
&:hover{
    cursor: pointer;
}
`

export const LogoProfile = styled.img`
width: 50%;
display: flex;
justify-content: center;
align-items: center;
`