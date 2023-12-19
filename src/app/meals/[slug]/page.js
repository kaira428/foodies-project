import React from 'react'

const SomePage = ({params}) => {
  return (
    <div>Some Page - {params.slug}</div>
  )
}

export default SomePage