import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Box, Flex, Spacer} from '@chakra-ui/react'
import {  ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logotienda from '../images/logotienda.webp'

const Navbar = () => {
  return (
    <Flex  w='100%' h='200px' bgGradient='linear(to-l, #35e3ed, #2ce0eb)' >
      <Box p='1'  color={'#35e3ed'}>
        <img className='logotienda' src={logotienda}/>
      </Box>
      <Spacer />
      <Box className='menu'>
        
        <Menu>
          <MenuButton  as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Camisetas</MenuItem>
            <MenuItem>Abrigos</MenuItem>
            <MenuItem>Merchandising</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Spacer />
      
      <Box>
        <CartWidget />
      </Box>
   
    </Flex>
  )
}

export default Navbar