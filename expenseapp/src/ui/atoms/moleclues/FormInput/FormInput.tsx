import { on } from "events";
import { FormInputProps } from "./FormInput.types";

export const FormInput = ({label,text,inputType,onChange}:FormInputProps) =>{
    
    return(
     <div>
        <label>
            {label}
        <input placeholder={text} type = {inputType} onChange={onChange}/>
        </label>
        
     </div>

    );
}