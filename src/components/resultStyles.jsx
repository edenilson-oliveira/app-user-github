import styled from "styled-components"

export const BoxUser = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-areas: 
  'avatar avatar name name'
  'avatar avatar link link'
  'more-info more-info more-info more-info'
  'created-at created-at location location';
  gap: 5px;
  grid-template-rows: 3fr 3fr 4fr 2fr ;
  grid-template-columns: 2fr 1fr 2fr 3fr;
 `

export const Name = styled.p`
  color: #BAC6E8;
  grid-area: name;
  padding: 20px 0px 0px 0px;
  font-weight: 500;
`

export const Avatar = styled.img`
  display: block;
  width: 80%;
  border-radius: 50%;
  grid-area: avatar;
  margin: 20px 10px;
  background-color: blue;
`

export const Link = styled.p`
  display: flex;
  grid-area: link;
  font-size: .6em;
  color: #BAC6E8;
  
   & a {
    padding-left: 2px;
    color: #BAC6E8;
  }
`


export const MoreInfo = styled.div`
  background-color: #332F2F;
  border-radius: 20px;
  width: 90%;
  height: 50px;
  grid-area: more-info;
  font-size: .65em;
  color: white;
  margin: 10px 0px 0px 10px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

export const CreatedAt = styled.p`
  grid-area: created-at;
  text-align: center;
  padding: 5px;
  color: white;
  font-size: .8em;
`

export const Location = styled.p`
  grid-area: location;
  padding: 5px;
  text-align: center;
  color: white;
  font-size: .8em;
`

export const Message = styled.p`
  color: white;
  font-size: 1.3em;
  text-align: center;
`
