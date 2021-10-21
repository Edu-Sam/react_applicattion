import logo from './logo.svg';
import './App.css';
import React,{Component} from 'react';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      userName:"Adam",
      todoItems:[
        {action: "Buy Flowers",done:false},
        {action: "Get Shoes",done:false},
        {action: "Collect Tickets",done:true},
        {action: "Call Joe",done:false}
      ],
      newItemText: ""
    }
  }

  updateNewTextValue=(event)=>{
    this.setState({
      newItemText: event.target.value
    });
  }

  createNewToDo=()=>{
    if(!this.state.todoItems.find(item=>item.action===this.state.newItemText)){
              this.setState({
                todoItems:[
                  ...this.state.todoItems,
                  {action:this.state.newItemText,done:false}],
                  newItemText:""
              });

             }
  }

  changeStateData=()=>{
       this.setState({
         userName: this.state.userName==="Adam" ? "Bob": "Adam"
       })
  }

  render(){
    return(
    <div>
      <h4 classname="bg-primary text-white text-center p-2">
         {this.state.userName}'s  To Do list
         ({this.state.todoItems.filter(t=>!t.done).length} Items to do)
      </h4>

       <div className="container-fluid">
         <div className="my-1">
           <input className="form-control"
            value={this.state.newItemText}
            onChange={this.updateNewTextValue}
           />

           <button className="btn btn-primary mt-1" onClick={this.createNewToDo}>ADD</button>
         </div>
       </div>
    </div>
    )
  };
}
