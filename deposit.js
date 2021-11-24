let totalState = 0;

function Deposit(){
  const [show, setShow] = React.useState(true);  
  const [accountState, setAccountState] = React.useState(0);
  let transactionState = 0;
  
  let status = "Account Balance $";


  function handleChange(event){
    transactionState = Number(event.target.value);

    if (Number(event.target.value) <= 0){
      return alert("Must be greater than 0")
    }

    

  };

  

  
  function handleSubmit(event){
    totalState += transactionState;
    status = `Account Balance $${totalState}`;
    document.getElementById("total").innerHTML = status;
    event.preventDefault();
  

    if(document.getElementById("total").innerHTML){
      return alert("Success!")
    }

    
    
    
  }

  return (
    <>
    <div className="card text-black bg-white mb-3" >
  
  <div className="card-body">
    <h2 className="card-title">Deposit</h2>
    <h4 id="total">Account Balance ${totalState}</h4><br/>
    Deposit Amount
    <br />
    <br />
    <input type="number" className="form-control" id="amount" min="0" placeholder="Enter Amount" onChange={handleChange} /><br/>
    <button type="submit" id="submitButton" className="btn btn-light" onClick={handleSubmit}>Deposit</button>
  </div>
</div>
</>
  )
            
}


//<h4 id="total">Account Balance ${totalState}</h4><br/>
             // Deposit Amount<br/>
              //<input type="number" className="form-control" id="amount" min="0" placeholder="Enter Amount"
              // onChange={handleChange} /><br/>
            
      
              //<button type="submit" id="submitButton" className="btn btn-light" onClick={handleSubmit}>Deposit</button>