import React from 'react'
import { Menu, MenuButton, Button, MenuList, MenuItem, Box, Flex, Spacer} from '@chakra-ui/react'
import {  ChevronDownIcon } from '@chakra-ui/icons'
import CartWidget from './CartWidget'
import logotienda from '../images/logotienda.webp'
import carrito from '../images/carrito.webp'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <Flex  w='100%' h='200px' bgGradient='linear(to-l, #35e3ed, #2ce0eb)' >
      <Box p='1'  color={'#35e3ed'}>
        <Link to={"/"}>
        <img className='logotienda' src={logotienda}/>
        </Link>
       
       </Box>
      <Spacer />
      <Box className='menu' >
        
        <Menu className='categorias'>
          <MenuButton  as={Button} rightIcon={<ChevronDownIcon />} >
            Categorias
          </MenuButton>
          <MenuList>
             <MenuItem>
              <Link to={`/category/${`cat1`}`}>
                Camisetas
              </Link>
             </MenuItem>
            <MenuItem>
             <Link to={`/category/${`cat2`}`} >
                Abrigos
            </Link>
            </MenuItem>
            <MenuItem>
            <Link to={`/category/${`cat3`}`}>
                Merchandising
            </Link>
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Box>
      <img className='carrito' src={carrito}/>
      </Box>
   
    </Flex>
  )
}

export default Navbar