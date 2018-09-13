import React, {Component}from 'react';
import { withFormsy } from 'formsy-react';


class InputField extends Component{
     constructor(props){
         super(props);
     }
     changeValue=(event)=>{
        this.props.setValue(event.currentTarget.value);
     }
     render(){
         const errorText=this.props.getErrorMessage();
         console.log('error:',errorText)
         return(
             <div>
                 <input
                  style={{backgroundColor:'aqua',marginTop:'50px',borderColor:'blue',borderRadius:'5px',width:'40vw',height:'5vh'}}
                 onChange={this.changeValue}
                 type="email"
                 value={this.props.getValue() || " "}
                 />
                 <p>{errorText}</p>
             </div>
         )
     }
}
export default withFormsy(InputField);