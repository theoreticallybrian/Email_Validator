import React,{useState} from 'react'
import './Home.scss';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';import ClearIcon from '@mui/icons-material/Clear';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import Loading from './Loading';



function Home() {
 
    const [boxvalue, setBoxvalue] = useState("");
    const [container, setContainer] = useState([]);
    const [loading, setLoading] = useState(false);
     const [isToggled, setIsToggled] = useState(false);


    const options = {

        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'bb79c65f3fmsh6b49ec61e244c75p10ca93jsndafa85d1df41',
            'X-RapidAPI-Host': 'email-verifier-completely-free.p.rapidapi.com'
        }
    };
    
function submit(e){
    
    e.preventDefault();
    setLoading(true);
    fetch(`https://email-verifier-completely-free.p.rapidapi.com/email-verification/${boxvalue}`, options)
    .then(response => response.json())
    .then (json => {
        setContainer(json.response)
        console.log(container)
        setLoading(false)
console.log(loading)
    })
    .then(response => console.log(response))
    .catch(err => console.error(err));


  
}

   

  
const HandleChange =(e)=>{
    setBoxvalue(e.target.value);
    console.log(boxvalue)
}



  return (
    <div className='home'>


<form onSubmit={(e)=>submit(e)}>
<input onChange={HandleChange} id="email" placeholder="Email Address" required />
    <button className='button'>Check Email</button>
</form>

  {loading&&<Loading/>}
  <div> The email is__{container.query}</div>

  <div>Is this email live__{container.email_status}</div>
  <div>Is this email professional__{container.professional}</div>

    </div>
  )
}

export default Home