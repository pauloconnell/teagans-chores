import React from 'react'

function ChoreChart(props) {
  return (
    
    <div>
 
         
       
        
        <ul>
            {props.chores.map((chore, index) => {
       
          <li key={index}>
             <h2>Chore description</h2>    {chore[0]} <br/>
              <h2>Name</h2> {chore[1]}<br/>
             <h2>Date</h2>    {chore[2]}<br/>
            </li>
         
    })};
      </ul>
    </div>
  );
}

export default ChoreChart;