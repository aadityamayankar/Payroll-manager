import React,{Component} from 'react';
import AddDept from './AddDept';
import AddPayGrade from './AddPayGrade';
import AddEmp from './AddEmp';
import GetPayroll from './GetPayroll';
import ViewPage from './ViewPage';

export default class Main extends Component{

    constructor(props){
        super(props);
        this.handleClick=this.handleClick.bind(this);
        this.state={
            view:0
        }
    }

    handleClick(viewisSelected){
        this.setState({view:viewisSelected});
        console.log("yes");
    }

    renderView=(view)=>{
        switch(view){
            case 0: 
                return(
                    <ViewPage handleClick={this.handleClick}/>
                )
            case 1:
                return(
                    <AddDept/>
                )
            case 2:
                return(
                    <AddPayGrade/>
                )
            case 3:
                return(
                    <AddEmp/>
                )
            case 4:
                return(
                    <GetPayroll/>
                )
            default:
                return(
                    <ViewPage handleClick={this.handleClick}/>
                )   
        }   
    }

    render(){
        return(
            <>
                {this.renderView(this.state.view)}
            </>
        )
    }
}