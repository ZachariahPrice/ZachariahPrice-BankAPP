function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function validate(field, label){
      if (!field) {
        setStatus('Please enter: ' + label);
        setTimeout(() => setStatus(''),5000);
        return false;
      }

      if(password.length < 8 ){
        return alert('Password too short')
      }
      return true;

  }

  
  

  function handleCreate(){
    console.log(name,email,password);
    if (!validate(name,     'Name'))     return;
    if (!validate(email,    'Email'))    return;
    if (!validate(password, 'Password')) return;
    ctx.users.push({name,email,password}); 
    setShow(false);

  }   
   

  

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  

  return (
    <>
    
    {show ? (
  <div className="card text-black bg-white mb-3" >
  <div className="card-body">
  <h2 className="card-title">Create Account</h2>
    Name<br/>
    <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
    Email address<br/>
    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
    Password<br/>
    <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
          {status} 
    <br />

    <button type="submit" className="btn btn-light" onClick={handleCreate}>Create Account</button>
    
  </div>
</div>

  
    ):(
      <>
              
              <div className="alert alert-primary" role="alert">
              <h5>Successfully Created Account!</h5>
              </div>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
    )

  
    }</>
)}
