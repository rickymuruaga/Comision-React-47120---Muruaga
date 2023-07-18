import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Box, Flex, Spacer} from '@chakra-ui/react'
import {  ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logotienda from '../images/logotienda.webp'

const Navbar = () => {
  return (
    <Flex >
      <Box  p='1' bg='white' color={'white'}>
        <img className='logotienda' src={logotienda}/>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton className='menu' as={Button} rightIcon={<ChevronDownIcon />}>
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