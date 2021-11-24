
function Withdraw(){
  const [show, setShow] = React.useState(true);
  let transactionState = 0;
  let status = "Account Balance $";
  const [validTransaction, setValidTransaction] = React.useState(false);

  function handleSubmit(event){
    totalState -= transactionState;
    status = `Account Balance $${totalState}`;
    document.getElementById("total").innerHTML = status;
    event.preventDefault();

    if (Number(event.target.value) > totalState){
      alert(`Withdraw Amount, $${Number(event.target.value)} exceeds availability amount`);
      
    }
    
    if (totalState <= 0){
      document.getElementById('submitButton').disabled = true;
    };

    if(document.getElementById("total").innerHTML){
      return alert("Success!")
    }
  }

  

  function handleChange(event){
    transactionState = Number(event.target.value);

    if (Number(event.target.value) <= 0){
      return alert("Must be greater than 0")
    }

    
    
  };
  return (
    <>
    <div className="card text-black bg-white mb-3" >
  
  <div className="card-body">
    <h2 className="card-title">Withdraw</h2>
    <h4 id="total">Account Balance ${totalState}</h4><br/>
    Withdraw Amount
    <br />
    <br />
    <input type="number" className="form-control" id="amount" min="0" placeholder="Enter Amount" onChange={handleChange}/><br/>
    <button type="submit" id="submitButton" className="btn btn-light" onClick={handleSubmit}>Withdraw</button>
  </div>
</div>
</>
  )
            
}
  
