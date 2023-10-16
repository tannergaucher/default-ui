import React from 'react'

export const Button = ({
  disabled,
  type,
}: {
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}) => {
  return (
    <button disabled={disabled} type={type}>
      Button
    </button>
  )
}
