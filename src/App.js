import './App.css';
import "./profile/components";
import { Button } from "react-bootstrap";
import { Component } from "react";
// import { Button } from "react-bootstrap";
// import Components from './profile/components';
import Components from './profile/components';


function App() {
  return (
     
    <div className="App"  >

      
        <Components name={"Rahma BOUKERI"} 
                    bio={"Developer full stack studing at go my code schoole"} 
                    profession={"Full stack developer"} />
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
  integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
  crossorigin="anonymous"
/>

      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>

<script>var Alert = ReactBootstrap.Alert;</script>      



    </div>
  );
}

export default App;
