// http-get-request-onclick-fetch
import { useState } from "react";

const FetchGet = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState("");

  const handleClick = async () => {
    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:3010/inquiries", {
        method: "GET",
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log("Result : ", JSON.stringify(result, null, 4));

      setData(result);
    } catch (err) {
      setErr(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {err && <h2>{err}</h2>}

      <button onClick={handleClick}>Fetch data</button>

      {isLoading && <h2>Loading...</h2>}

      {console.log("DATA :", data)}

      {data.map((person) => {
        return (
          <div key={person.id}>
            <br />
            <h5>Name : {person.name}</h5>
            <h5>Email : {person.email}</h5>
          </div>
        );
      })}
    </div>
  );
};

export default FetchGet;
