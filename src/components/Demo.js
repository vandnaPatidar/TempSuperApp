import React from 'react'
import Button from './Button'
import closeIcon from '../../assets/Icons/close.png';

function Demo() {
  return (
    <Button
      btnText={'Click Me'}
      btnWidth={232}
      height={48}
      borderRadius={200}
      backgroundColor={'#F27930'}
      rightIcon={closeIcon}
    />
  )
}

export default Demo