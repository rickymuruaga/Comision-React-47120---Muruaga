import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Box, Flex, Spacer} from '@chakra-ui/react'
import {  ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'

const Navbar = () => {
  return (
    <Flex >
      <Box  p='4' bg='black' color={'white'}>
        AFA SHOP OFICIAL
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Categorias
          </MenuButton>
          <MenuList>
            <MenuItem>Camisetas</MenuItem>
            <MenuItem>Abrigos</MenuItem>
            <MenuItem>Merchandising</MenuItem>
          </MenuList>
        </Menu>
      </Box>
      

      <Box>
        <CartWidget />
      </Box>

    </Flex>
  )
}

export default Navbar