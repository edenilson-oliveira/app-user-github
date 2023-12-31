import styled from "styled-components"

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #061338;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const BoxSearch = styled.div`
  background-color: #BAC6E8;
  width: 70%;
  height: 40px;
  border-radius: 20px;
  margin: 20px;
`

export const InputSearch = styled.input`
  height: 90%;
  border: none;
  background-color: transparent;
  margin-left: 10px;
  
  &:focus{
    outline: none;
  }
`

export const ButtonSearch = styled.button`
  width: 40px;
  height: 40px;
  background-color: transparent;
  border: none;
`

export const BoxResult = styled.section`
  width: 70%;
  height: 30%;
  border-radius: 15px;
  background-color: #1C316D;
  padding: 10px;
`