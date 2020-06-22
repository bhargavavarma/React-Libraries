import React, { Component } from 'react'
import ReactSelect from '../React Select'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'

import { Wrapper } from './styledComponent'
import Button from '../common/components/Button'

const options = [
   { value: 'chocolate', label: 'Chocolate' },
   { value: 'strawberry', label: 'Strawberry' },
   { value: 'vanilla', label: 'Vanilla' }
]

@observer
class ReactLibrary extends Component {
   @observable selectedOption = ''

   @action.bound
   onChangeSelect(e) {
      this.selectedOption = e.label
   }

   handleClick = e => {
      console.log(e.target.value)
   }

   render() {
      return (
         <Wrapper>
            <ReactSelect
               isLoading={true}
               options={options}
               placeholder={'Select fruit...'}
               onChange={this.onChangeSelect}
               selectedOption={this.selectedOption}
            />
            <Button
               handleClick={this.handleClick}
               buttonText={'Login'}
               type={'primary'}
            />
         </Wrapper>
      )
   }
}

export default ReactLibrary
