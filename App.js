
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
    <nav className="navbar ">
<div className="container-fluid">
  <div className="navbar-header">
    <h1 className="navbar-brand" >ConnectedIn</h1>
  </div>
                <ul className="navbar-nav text-uppercase ml-auto">
                    <li className="nav-item">
                        <a className="nav-link">SIGN UP</a>
                    </li>
                </ul>
            
</div>
</nav>
<br/>
        <h1>Careers are built on network.</h1>
        
        <br/>
        <h3>Welcome back!</h3>
       <form className="container" >
        <div className="form-group">
        
         <label htmlFor="email" className="">Email </label>
         <input type="email" className="form-control" placeholder="Enter email" id="email"value="example@example.com" />
        </div>
        <div className="form-group">
           <label htmlFor="pwd">Password </label>
           <input type="password" className="form-control" placeholder="Enter password" id="pwd" value="000000"/>
       </div>
        <div className="form-group form-check">
         <label className="form-check-label">
           <input className="form-check-input" type="checkbox"/> Remember me
          </label></div>
         
                 
        <button type="submit" className="btn btn-primary " >Submit</button>
        <a href="#app">Not joined ConnectedIn yet? Register now free of charge</a>
        </form>

  </div>
  );
}

export default App;
