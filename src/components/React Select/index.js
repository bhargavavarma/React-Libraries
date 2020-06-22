import React, { Component } from 'react'
import Select from 'react-select'
import { observable } from 'mobx'

class ReactSelect extends Component {
   render() {
      const {
         isLoading,
         options,
         onChange,
         selectedOption,
         placeholder
      } = this.props
      return (
         <Select
            styles={{
               dropdownIndicator: (provided, state) => ({
                  ...provided,
                  transform: state.selectProps.menuIsOpen && 'rotate(180deg)'
               })
            }}
            isLoading={isLoading}
            defaultValue={selectedOption}
            onChange={onChange}
            placeholder={placeholder}
            options={options}
         />
      )
   }
}

export default ReactSelect
