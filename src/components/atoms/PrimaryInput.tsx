import React, { VFC, ChangeEvent } from 'react'

interface Props{
    onChange: (event: ChangeEvent<HTMLInputElement>)=>void;
    placeholder: string;
    value: string;
}

const PrimaryInput: VFC<Props> = (props) => {
  return (
      <input
        placeholder={props.placeholder}
        className="border border-gray-300 py-2 pl-2 focus:outline-none"
        onChange={props.onChange}
        value={props.value}
      />
  )
}

export default PrimaryInput
