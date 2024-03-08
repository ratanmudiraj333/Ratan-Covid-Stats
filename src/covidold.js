import React,{useState} from 'react';
import ChartCard from './ChartCard';
import {CData1,CData2,CData3,CData4,CData5,CData6,CData7,CData8,CData9,CData10} from './CovidData.js';

function CreateChart(data)
{
    return (
        <ChartCard
        key = {data.id}
        image = {data.image}
        description = {data.description}
    />
    );
}


function Covid()
{
    const [show1, setShow1] = useState(CData1.map(CreateChart));
    const [show2, setShow2] = useState(CData2.map(CreateChart));
    const [show3, setShow3] = useState(CData3.map(CreateChart));
    const [show4, setShow4] = useState(CData4.map(CreateChart));
    const [show5, setShow5] = useState(CData5.map(CreateChart));
    const [show6, setShow6] = useState(CData6.map(CreateChart));
    const [show7, setShow7] = useState(CData7.map(CreateChart));
    const [show8, setShow8] = useState(CData8.map(CreateChart));
    const [show9, setShow9] = useState(CData9.map(CreateChart));
    const [show10, setShow10] = useState(CData10.map(CreateChart));

function display1()
{
    setShow1(CData1.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display2()
{
    setShow1(CData2.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display3()
{
    setShow1(CData3.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display4()
{
    setShow1(CData4.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display5()
{
    setShow1(CData5.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display6()
{
    setShow1(CData6.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display7()
{
    setShow1(CData7.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display8()
{
    setShow1(CData8.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display9()
{
    setShow1(CData9.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function display10()
{
    setShow1(CData10.map(CreateChart));
    setShow2("");
    setShow3("");
    setShow4("");
    setShow5("");
    setShow6("");
    setShow7("");
    setShow8("");
    setShow9("");
    setShow10("");
}

function displayAll()
{
    setShow1(CData1.map(CreateChart));
    setShow2(CData2.map(CreateChart));
    setShow3(CData3.map(CreateChart));
    setShow4(CData4.map(CreateChart));
    setShow5(CData5.map(CreateChart));
    setShow6(CData6.map(CreateChart));
    setShow7(CData7.map(CreateChart));
    setShow8(CData8.map(CreateChart));
    setShow9(CData9.map(CreateChart));
    setShow10(CData10.map(CreateChart));
}

/*
    function display1()
{
    setShow1(CData1.map(CreateChart));
    setShow1("");
}*/

    return(
        <div>
  <h1 className = "head1">Covid Stats<span className = "head2"> - Analyze covid rate around the world</span>
  <span className='droplist'>
  <div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Country List
  </button>
  <ul class="dropdown-menu">
  <li class="dropdown-item"  onClick = {displayAll}>All Countries</li>
    <li class="dropdown-item" onClick = {display1}>India</li>
    <li class="dropdown-item" onClick = {display2}>USA</li>
    <li class="dropdown-item" onClick = {display3}>China</li>
    <li class="dropdown-item" onClick = {display4}>Nigeria</li>
    <li class="dropdown-item" onClick = {display5}>Indonesia</li>
    <li class="dropdown-item" onClick = {display6}>Pakistan</li>
    <li class="dropdown-item" onClick = {display7}>Russia</li>
    <li class="dropdown-item" onClick = {display8}>Canada</li>
    <li class="dropdown-item" onClick = {display9}>Mexico</li>
    <li class="dropdown-item" onClick = {display10}>Brazil</li>
  </ul>
</div></span>
  </h1>



<h6 className='head3'>Coronavirus disease 2019 (COVID-19) is a contagious disease caused by the virus SARS-CoV-2. The first known case was identified in Wuhan, China, in December 2019.The disease quickly spread worldwide, resulting in the COVID-19 pandemic.</h6>
<div className='Container'>
<div className='Container1'>
{show1}
</div>
<div className='Container2'>
{show2}
</div>
<div className='Container3'>
{show3}
</div>
<div className='Container4'>
{show4}
</div>
<div className='Container5'>
{show5}
</div>
<div className='Container6'>
{show6}
</div>
<div className='Container7'>
{show7}
</div>
<div className='Container8'>
{show8}
</div>
<div className='Container9'>
{show9}
</div>
<div className='Container10'>
{show10}
</div>
</div>
</div>
    );
}

export default Covid;


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


<li class="dropdown-item" onClick = {()=>{{setShow1(INDIA.map((value)=>(
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
    )))} dropShow("India") }}>India</li>


<li class="dropdown-item" onClick = {()=>{{setShow1(USA.map((value)=>(
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
    )))} dropShow("USA")}}>USA</li>


<li class="dropdown-item" onClick = {()=>{{setShow1(CHINA.map((value)=>(
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
    )))} dropShow("China")}}>China</li> 


<li class="dropdown-item" onClick = {()=>{{setShow1(CANADA.map((value)=>(
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
    )))} dropShow("Canada")}}>Canada</li>


<li class="dropdown-item" onClick = {()=>{{setShow1(MEXICO.map((value)=>(
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
    )))} dropShow("Mexico")}}>Mexico</li>  


<li class="dropdown-item" onClick = {()=>{{setShow1(BRAZIL.map((value)=>(
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
    )))} dropShow("Brazil")}}>Brazil</li>    


<li class="dropdown-item" onClick = {()=>{{setShow1(RUSSIA.map((value)=>(
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
    )))} dropShow("Russia")}}>Russia</li>    


<li class="dropdown-item" onClick = {()=>{{setShow1(PAKISTAN.map((value)=>(
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
    )))} dropShow("Pakistan")}}>Pakistan</li>

 
<li class="dropdown-item" onClick = {()=>{{setShow1(INDONESIA.map((value)=>(
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
    )))} dropShow("Indonesia")}}>Indonesia</li>   


<li class="dropdown-item" onClick = {()=>{{setShow1(NIGERIA.map((value)=>(
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
    )))} dropShow("Nigeria")}}>Nigeria</li>        
*/