import React, {useState} from "react";
import axios from "axios";

function Form(props) {
  const [name, setName] = useState("");
  async function handleSubmit(event) {
      event.preventDefault();
      const  resp= await axios.get(`https://api.github.com/users/${name}`);
      console.log(resp.data);
      props.onSubmit(resp.data);
      setName("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <input
        type={"text"}
        onchange={(event) => {
          setName(event.target.value);
        }}
        value = { name }
        ></input>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default Form;