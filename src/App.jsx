import { useState, useRef,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

import * as Styles from './AppStyles.jsx'
import InitialComponent from './components/InitialComponent.jsx'
import ShowResult from './components/result.jsx'

function App(){
  const [request,setRequest] = useState('')
  const [renderComponent,setRenderComponent] = useState(true)
  
  const inputValue = useRef()
  const inputName = () => {
    setRequest(inputValue.current.value)
  }
  
  console.log(renderComponent)
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
          { request ? <ShowResult name={request} />: <InitialComponent /> }
        </Styles.BoxResult>
      </Styles.Main>
      
    </>
    )
}

export default App
