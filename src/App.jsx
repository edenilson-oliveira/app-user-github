import { useState, useRef } from 'react';
import ShowResult from './components/result.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import * as Styles from "./AppStyles.jsx"

function App(){
  const [request,setRequest] = useState('')
  const inputValue = useRef()
  const inputName = () => {
    setRequest(inputValue.current.value)
  }
  
  return(
    <>
      <Styles.Main>
        <Styles.BoxSearch>
          <Styles.InputSearch ref={inputValue} type="text" />
          <Styles.ButtonSearch onClick={inputName}>
            <FontAwesomeIcon icon={faMagnifyingGlass}/>
          </Styles.ButtonSearch>
        </Styles.BoxSearch>
        
        <Styles.BoxResult>
          { request != '' && <ShowResult name={request} />}
        </Styles.BoxResult>
      </Styles.Main>
      
    </>
    )
}

export default App
