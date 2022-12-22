import { useState } from "react";
import Input  from './components/Input/Input';
import Button from './components/Button/Button';
import Form from './components/Form/Form';
import './App.css'

function App() {
  const [userForm,setuserForm] = useState({
    userName:"",
    password:""
  })

  const onValidation = ()=>{
    if(userForm.userName=== "" || userForm.password===""){
      alert("Boş alan bırakmayınız.")
    }
    else{
      alert("Giriş Başarılı")
    }
  }

  return (

   <div className="custom-page">
   <Form>
    <h2>Giriş Sayfası</h2>
    <Input value = {userForm.userName} placeholder="Kullanıcı adı" onChange={(e)=>{
      setuserForm({userName: e.target.value , password : userForm.password})
    }}/>

    <Input type="password" value = {userForm.password} placeholder="Parola" onChange={(e)=>{
      setuserForm({password : e.target.value , userName: userForm.userName})
    }}/>

    <Button text ="Giriş yap" onClick={onValidation}/>
    </Form>
   </div>
   
  );
}

export default App;
