function AllData(){
  const ctx = React.useContext(UserContext);
  const [show, setShow] = React.useState(true);
  console.log(ctx.users);

  

  
  return (
    <>
    <div className="card text-black bg-white mb-3" >
  
  <div className="card-body">
    <h2 className="card-title">All Data</h2>
    <table className="table table-striped table-dark">
      <thead>
           <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
          </tr>
      </thead>
    <tbody>
          <tr>
          <th scope="row"></th>
            <td key="name">{ctx.users.map((ctx) => <p>{ctx.name}</p>)}</td>
            <td key="email">{ctx.users.map((ctx) => <p>{ctx.email}</p>)}</td>
            <td key="password">{ctx.users.map((ctx) => <p>{ctx.password}</p>)}</td>
          </tr>
    </tbody>
      </table>
  </div>
</div>
</>
  )
}
 
    