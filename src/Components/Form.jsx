import React from "react";
import { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    fullName: "",
    email: "",
  });

  const validations = () => {
    const emailTest = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
    if(user.fullName.length === 0 || user.fullName.length <= 5 || !emailTest.test(user.email)){
      alert('Por favor verifique su información nuevamente')
    } else {
      alert (`Gracias ${user.fullName}, te contactaremos cuando antes vía mail`)
    }
}

const handleSubmit = (e) => {
  e.preventDefault()
  validations()
}

return(
<div>
  <form onSubmit={handleSubmit}>
    <input type="text" onChange={(e) => setUser({...user, fullName: e.target.value})}/>
    <input type="email" onChange={(e) => setUser({...user, email: e.target.value})} />
    <button>Submit</button>
  </form>
</div>
)
}


export default Form;