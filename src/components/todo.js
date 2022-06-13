import React from "react";
import { useState } from "react";



export const Todo = () => {
const[inputData,setInputData]=useState('')
const[items,setItems]=useState([])          
const addItem=()=>{
  if(!inputData)
  {
    alert("Enter A Task")
  }
  else{
    setItems([...items,inputData]);
    setInputData('');

  }
}
const deleteItem=(id)=>{          //this id is same as index in the defined onclick function

    const updatedItems=items.filter((element,index)=>{
      return index!==id ; 
    })
    setItems(updatedItems)
  
   
}

const removeAll=()=>{
  setItems([])
}

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img
              src="https://cdn.pixabay.com/photo/2017/08/23/11/12/notebook-2672467__340.jpg"
              alt="error"
            />
            <figcaption>Add Your Task Here 📝</figcaption>
          </figure>
          
          <div className="addItems">
            <input type="text" placeholder="✍ Add Items..."  value={inputData} onChange={(e)=>setInputData(e.target.value)}/>
            <i className="fa fa-plus add-btn" title="Add Items" onClick={addItem}></i>
          </div>
          
          <div className="showItems">
            {
              items.map((element,index)=>{
                
            return (
              // use return as there are more than one item to return
              <div className="eachItem" key={index}>
                <h3>{element}</h3>
                <i className="far fa-trash-alt add-btn" title="Delete item" onClick={()=>deleteItem(index)}></i>    {/*here we have provided delete item a particular id so that it can delete the particular id element */}
              </div>
            );

              })
            }
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>Check List</span></button>
          </div>
        </div>
      </div>
    </>
  );
};
