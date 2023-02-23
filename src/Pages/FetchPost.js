import {useState} from 'react';

const FetchPost = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = async () => {

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:3010/inquiries', {
        method: 'POST',
        body: JSON.stringify({name,email}),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log('result :  ',result);      

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }

    alert(`Your name : "${name}" and email : "${email}" is added to our records.!! \nThank you for contacting us.!!`);

  };

  console.log('data: ',data);

  return (
    <div>
      {err && <h2>{err}</h2>}
    
      Enter your full name : &nbsp;
      <input type="text" id="name" onChange={(e) => setName(e.target.value)}/><br/><br/>
      Enter your email : &nbsp;
      <input type="email" id="my_email" onChange={(e) => setEmail(e.target.value)}/><br/><br/><br/>
      <button onClick={handleClick}>Submit</button>
  
      {isLoading && <h4><br/>In process...</h4>}


{/*       {data && (
        <div>
          <br/><br/><h6>Added :</h6>
          name : <b>{data.name}</b><br/>
          email : <b>{data.email}</b>
        </div>
      )} */}

    </div>
  );
};

export default FetchPost;
