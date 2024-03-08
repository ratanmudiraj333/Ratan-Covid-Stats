import React,{useState} from 'react';
//import ChartCard from './ChartCard';
import {CDatafilter} from './CovidData.js';
/*
function CreateChart(data)
{
    return (
        <ChartCard
        key = {data.id}
        description = {data.description}
        description1 = {data.description1}
        description2 = {data.description2}
        description3 = {data.description3}
        image1 = {data.image1}
        image2 = {data.image2}
        image3 = {data.image3}
        image4 = {data.image4}
    />
    );
}*/

//setShow1(CDatafilter.filter(country=>{return country.id = 1}));

function Covid()
{
    //const [show1, setShow1] = useState(CData1.map(CreateChart));
    // CORRECT const [show1, setShow1] = useState(employees.map((value)=>(<div>{value.name}</div>)));

    /*Filter data as per country*/
    const WORLD = CDatafilter.filter( value => value.name === "WORLD");
    const INDIA = CDatafilter.filter( value => value.name === "INDIA");
    const USA = CDatafilter.filter( value => value.name === "USA");
    const CHINA = CDatafilter.filter( value => value.name === "CHINA");
    const CANADA = CDatafilter.filter( value => value.name === "CANADA");
    const MEXICO = CDatafilter.filter( value => value.name === "MEXICO");
    const BRAZIL = CDatafilter.filter( value => value.name === "BRAZIL");
    const RUSSIA = CDatafilter.filter( value => value.name === "RUSSIA");
    const PAKISTAN = CDatafilter.filter( value => value.name === "PAKISTAN");
    const INDONESIA = CDatafilter.filter( value => value.name === "INDONESIA");
    const NIGERIA = CDatafilter.filter( value => value.name === "NIGERIA");

    /*Details on page load for the first time*/

    const [show1, setShow1] = useState((WORLD.map((value)=>(
        <div className='Container'>
            <div className ="cardsize">
        <ul class="list-group">
          <li class="text1">{value.description}</li>
          <br></br>
          <li class="text2">{value.description1}</li>
          <br></br>
          <li class="text3">{value.description2}</li>
          <br></br>
          <li class="text4">{value.description3}</li>
        </ul>
        </div>
        
        <div className ="cardsize1">
          <img src={value.image1} className ="imagesize1" alt="..."/>
        </div>
        
        <div className ="cardsize2">
          <img src={value.image2} className ="imagesize2" alt="..."/>
        </div>
        
        <div className ="cardsize3">
          <img src={value.image3} className ="imagesize3" alt="..."/>
        </div>
        
        <div className ="cardsize4">
          <img src={value.image4} className ="imagesize4" alt="..."/>
        </div>
            </div>
            ))));

    const [drop, dropShow] = useState("World Wide");
    
    return(
        <div>
  <h1 className = "head1">Covid Stats<span className = "head2"> - Analyze covid rate around the world</span>
  <span className='droplist'>
  <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle dropsize" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    {drop}
  </button>
  <ul className="dropdown-menu">

  <li className="dropdown-item" onClick = {()=>{setShow1(WORLD.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul class="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("World Wide") }}>World Wide</li>


  <li className="dropdown-item" onClick = {()=>{setShow1(INDIA.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("India") }}>India</li>


<li className="dropdown-item" onClick = {()=>{setShow1(USA.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("USA")}}>USA</li>


<li className="dropdown-item" onClick = {()=>{setShow1(CHINA.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("China")}}>China</li> 


<li className="dropdown-item" onClick = {()=>{setShow1(CANADA.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("Canada")}}>Canada</li>


<li className="dropdown-item" onClick = {()=>{setShow1(MEXICO.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("Mexico")}}>Mexico</li>  


<li className="dropdown-item" onClick = {()=>{setShow1(BRAZIL.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("Brazil")}}>Brazil</li>    


<li className="dropdown-item" onClick = {()=>{setShow1(RUSSIA.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("Russia")}}>Russia</li>    


<li className="dropdown-item" onClick = {()=>{setShow1(PAKISTAN.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("Pakistan")}}>Pakistan</li>

 
<li className="dropdown-item" onClick = {()=>{setShow1(INDONESIA.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("Indonesia")}}>Indonesia</li>   


<li className="dropdown-item" onClick = {()=>{setShow1(NIGERIA.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul className="list-group">
  <li className="text1">{value.description}</li>
  <br></br>
  <li className="text2">{value.description1}</li>
  <br></br>
  <li className="text3">{value.description2}</li>
  <br></br>
  <li className="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))
dropShow("Nigeria")}}>Nigeria</li>       

  </ul>
</div></span>
  </h1>

{show1} 

</div>
    );
}

export default Covid;

 /*
    <li class="dropdown-item" onClick = {()=>setShow1(employees.map((value)=>(<div>
        <div>{value.name}</div>
        <div>{value.experience}</div>
        <div>{value.id}</div>
    </div>
    )))}>India</li>*/

    /*
    <li class="dropdown-item" onClick = {()=>{{setShow1(WORLD.map((value)=>(
<div className='Container'>
    <div className ="cardsize">
<ul class="list-group">
  <li class="text1">{value.description}</li>
  <br></br>
  <li class="text2">{value.description1}</li>
  <br></br>
  <li class="text3">{value.description2}</li>
  <br></br>
  <li class="text4">{value.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={value.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={value.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={value.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={value.image4} className ="imagesize4" alt="..."/>
</div>
    </div>
    )))} dropShow("World Wide") }}>World Wide</li>
    */