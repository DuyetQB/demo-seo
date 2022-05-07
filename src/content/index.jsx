import { useEffect , useState } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Content() {
  const [data,setData] = useState([])


  useEffect(()=>{
fetch(`https://60b1dcdf62ab150017ae1584.mockapi.io/demo/traiga/`).then((data)=>{
return data.json()
}).then((item)=>{ setData(item)}).catch((error)=>{console.log(error);})
  },[])

  // const handleRedirect = (id) =>{
  //   history.push(`/item/${id}`);
  // }

  return (
    <div>
       <Helmet>
                <meta charSet="utf-8" />
                <title> Title content</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="content component" />
                <meta property="og:image" content="https://cdn.dribbble.com/users/403485/screenshots/4654515/media/1b08e8d8379300719a1a92b707935582.png" />
            </Helmet>
      {data?.map((item)=>(
        <>
        <h3>{item.title}</h3>
        <Link to={`/item/${item.id}`}>
        
        <img src={item.avatar} alt="" style={{width:"300px",height:"300px"}}/>
        </Link>
        </>
      ))}
      </div>
  )
}

export default Content