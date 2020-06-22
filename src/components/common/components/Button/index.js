import React, { Component } from 'react'

import { PrimaryButton, DefaultButton } from './styledComponent'

class Button extends Component {
   render() {
      const { handleClick, buttonText, type } = this.props
      switch (type) {
         case 'primary':
            return (
               <PrimaryButton onClick={handleClick} type={type}>
                  {buttonText}
               </PrimaryButton>
            )
         case 'default':
            return (
               <DefaultButton onClick={handleClick} type={type}>
                  {buttonText}
               </DefaultButton>
            )
      }
   }
}

export default Button

// text
// type - default,primary
// isDisabled
// onClick
// className

// variant - oval, rectangle
// loading
