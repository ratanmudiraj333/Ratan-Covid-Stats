import React from 'react';

function ChartCard(props)
{
   return(
<div className='Container'>      

<div className ="cardsize">
<ul class="list-group">
  <li class="text1">{props.description}</li>
  <br></br>
  <li class="text2">{props.description1}</li>
  <br></br>
  <li class="text3">{props.description2}</li>
  <br></br>
  <li class="text4">{props.description3}</li>
</ul>
</div>

<div className ="cardsize1">
  <img src={props.image1} className ="imagesize1" alt="..."/>
</div>

<div className ="cardsize2">
  <img src={props.image2} className ="imagesize2" alt="..."/>
</div>

<div className ="cardsize3">
  <img src={props.image3} className ="imagesize3" alt="..."/>
</div>

<div className ="cardsize4">
  <img src={props.image4} className ="imagesize4" alt="..."/>
</div>

</div>
   );
}

export default ChartCard;

/*
<div className ="cardsize">
  <p className ="text1">{props.description}</p>
  <hr className='lines'/>
  <p className ="text1">{props.description1}</p>
  <hr className='lines'/>
  <p className ="text1">{props.description2}</p>
</div>
*/

/*<h2 className ="card-text">{props.name}</h2>

import React from 'react';

function ChartCard(props)
{
   return(
<div className='Container'>      
<div className ="card cardsize">
<div className ="card-body">
  <p className ="card-text text1">{props.description}</p>
</div>
</div>


<div className ="card cardsize1">
<div className ="card-body">
  <img src={props.image1} className ="imagesize1" alt="..."/>
</div>
</div>

<div className ="card cardsize2">
<div className ="card-body">
  <img src={props.image2} className ="imagesize2" alt="..."/>
</div>
</div>

<div className ="card cardsize3">
<div className ="card-body">
  <img src={props.image3} className ="imagesize3" alt="..."/>
</div>
</div>

<div className ="card cardsize4">
<div className ="card-body">
  <img src={props.image4} className ="imagesize4" alt="..."/>
</div>
</div>

</div>
   );
}

export default ChartCard;

*/
