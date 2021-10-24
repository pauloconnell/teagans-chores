import React from 'react'

function ChoreChart(props) {
  console.log('recieved props of ', props.chores, props.chores[0]);
  return (
    
    <div>
 
         
       
       
        <ul>
            {props.chores.map((chore, index) => {
      return(
     
          <li key={index}>
                   
             Chore description:    {chore[0]} <br/>
              Name: {chore[1]}<br/>
             Date:    {chore[2]}<br/>
            </li>
     )
    })};
      </ul>
      
      
    </div>
  );
}

export default ChoreChart;