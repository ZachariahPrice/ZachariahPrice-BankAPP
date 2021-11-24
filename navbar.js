function NavBar(){


  return(
    <>
    
    <nav className="navbar navbar-expand">
      <a className="navbar-brand" href="#">BadBank</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="Create an account with our bank" href="#/CreateAccount/">Create Account</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="Deposit funds into your account" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="Withdraw funds from your account" href="#/withdraw/">Withdraw</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tooltip" title="All users data" href="#/alldata/">All Data</a>
          </li>          
        </ul>
      </div>
    </nav>
  </>
  );
}







