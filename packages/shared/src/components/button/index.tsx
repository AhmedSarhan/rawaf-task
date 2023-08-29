import React from 'react'

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  text: string
}
export const SharedButton = ({text, onClick}: Props) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

