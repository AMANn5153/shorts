import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import Loading from '../Extras/Loading'
import { fetchData } from '../../feature/Article'
import NewArticle from './NewArticle'


const Load=()=>{
    const dispatch=useDispatch()
  
    useEffect(() => {  
      dispatch(fetchData());
    },[fetchData,dispatch])
  
    const load=useSelector(state=>state.news.status)
  
    return(
      <>
      {load==="pending"?<Loading/>:<NewArticle/>}
      </>
    )
  }

  export default Load
