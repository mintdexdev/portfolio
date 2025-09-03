import React from 'react'

export function ButtonDark(
  {
    children,
    ...props
  }
) {
  return (
    <button
      className=' button-dark px-6 py-3 rounded-full will-change-contents    duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]'
      {...props}
    >
      {children}
    </button>
  )
}
export function ButtonLight(
  {
    children,
    ...props
  }
) {
  return (
    <button
      className=' button-light px-6 py-3 rounded-full will-change-contents    duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]'
      {...props}
    >
      {children}
    </button>
  )
}
export function ButtonLightOutline(
  {
    children,
    ...props
  }
) {
  return (
    <button
      className=' border button-light px-6 py-3 rounded-full will-change-contents    duration-300 ease-out hover:scale-[1.02] active:scale-[0.98]'
      {...props}
    >
      {children}
    </button>
  )
}
