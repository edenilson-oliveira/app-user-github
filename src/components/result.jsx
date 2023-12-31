import { useState,useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot,faLink} from '@fortawesome/free-solid-svg-icons'
import * as Styles from  './resultStyles.jsx'

function ShowResult(props){
  const [data,setData] = useState({
    isUser: false,
    objectData: null
  })
  const requestApi = useEffect(() => {
   const getData = async (userName) => {
      const dataApi = await fetch(`https://api.github.com/users/${userName}`) 
      .then((resultado) => {
        return resultado.json()
      })
    setData((prevData) => ({
      ...prevData,
      objectData: dataApi
      }))
    try{
      if(dataApi.id){
        setData((prevData) => ({
          ...prevData,
          isUser: true
        }))
      }
      else{
        throw 'Error'
      }
    }
      
      catch(err){
        console.log(err)
        setData((prevData) => ({
          ...prevData,
          isUser: false
        }))
      }
    }
    getData(props.name)
    
  },[props.name])
  
  const userData = data.objectData
  if(data.isUser){
    return(
      <>
      <Styles.BoxUser>
        <Styles.Avatar src={userData.avatar_url} />
        <Styles.Name> {userData.name ? userData.name : userData.login}</Styles.Name>
        <Styles.Link>          <FontAwesomeIcon icon={faLink}/><a href={userData.html_url} >{userData.html_url}</a>
        </Styles.Link>
        
        <Styles.MoreInfo>
          <p>Followers: {userData.followers}</p>
          <p>Following: {userData.following}</p>
          <p>Repos: {userData.public_repos}</p>
        </Styles.MoreInfo>
        
        <Styles.CreatedAt>{userData.created_at.slice(0,10)}</Styles.CreatedAt>
        
        <Styles.Location>
        {userData.location ?
        (
        <>
          <FontAwesomeIcon icon={faLocationDot}/> 
          <span> {userData.location}</span>
        </>
      )
          : ('No location')}
        </Styles.Location>
      </Styles.BoxUser>
    </>
    )
  }
    
  else{
    return(
      <Styles.Message>Usuário não encontrado</Styles.Message>
      )
  }
}

export default ShowResult
