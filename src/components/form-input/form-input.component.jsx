import  React from 'react';


import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel
} from './form-input.styles';


const FormInput =({handleChange,label,...otherProps})=>(
    <GroupContainer>
      <FormInputContainer  onChange={handleChange} {...otherProps} spellCheck='false'/>
      {
          label?
          (<FormInputLabel>
           {label}
          </FormInputLabel>)
          :null
      }
    </GroupContainer>
)

export default FormInput;