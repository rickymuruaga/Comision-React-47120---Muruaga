import React from 'react'
import { useParams } from 'react-router-dom'
import {Card,CardHeader, CardBody,CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react'


 const ItemDetail = ({productos}) => {
  const {id} = useParams ()
  console.log(productos);

    const filteredProducts = productos.filter((producto) => producto.id == id) 
      
    return (
        <div>
           {filteredProducts.map((p) => {
           return (
            <div>
              <Center p="1rem">
                 <Card>
                   <CardHeader>
                     <Heading size='md'></Heading>
                   </CardHeader>
                   <CardBody>
                     <Text></Text>
                     <Text></Text>
                   </CardBody>

                   <CardFooter>
                     <Button>
                       Details
                     </Button>
                   </CardFooter>
                 </Card>
              </Center>
           
         </div>
        )
        })}
      </div>
    )}
  
      
      
      
export default ItemDetail