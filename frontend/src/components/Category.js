import React from 'react'

export class Category extends React.Component{

//Isaac
    state={
       searchCategory:''
    }
 
    inputs=(e)=>{
    this.setState({
        searchCategory: e.target.value
    })
    }
onSubmit=()=>{
    // console.log(this.state)
    this.props.searchCategory(this.state.searchCategory)
}

    render(){
        return(
            <div>
            <label> Category </label>
            {/* <input onChange={(e)=>this.inputs(e)}/> */}
            <button value="submit" onClick={()=> this.onSubmit()}/>
            </div>
        )
    }


}
