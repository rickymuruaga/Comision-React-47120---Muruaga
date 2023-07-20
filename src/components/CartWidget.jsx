import React from 'react'
import { Box, } from '@chakra-ui/react'
import { Search2Icon, } from '@chakra-ui/icons'


const CartWidget = () => {
  return (
    <div className='widget' >
     
     <Box>
     <Search2Icon/>
     </Box>
     
     <Box>
      <p>3</p>
     </Box>

     
     </div>
  )
}

export default CartWidget