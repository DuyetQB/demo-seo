import { useEffect , useState } from 'react'
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

function Content() {
  const {id} = useParams();
  const [data,setData] = useState([])

  useEffect(()=>{
    fetch(`https://60b1dcdf62ab150017ae1584.mockapi.io/demo/traiga/${id}`).then((data)=>{
    return data.json()
    }).then((item)=>{ setData(item)}).catch((error)=>{console.log(error);})
      },[])
    
  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title>item title</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content={data.details} />
                <meta property="og:image" content={data.avatar} />
            </Helmet>
        <>
        {console.log("data:",data)}
        <h3>{data.title}</h3>
        <img src={data.avatar} alt="" style={{width:"300px",height:"300px"}}/>
        <p>{data.details}</p>
        </>
      </div>
  )
}

export default Content