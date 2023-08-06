import React from 'react'
import { useParams } from 'react-router-dom'
import {Card,CardHeader, CardBody,CardFooter, Heading, Text, Button, Center } from '@chakra-ui/react'


 const ItemDetail = ({productos}) => {
  const {id} = useParams ();

    const filteredProducts = productos.filter((producto) => producto.id == id) 
      
    return (
        <div>
           {filteredProducts.map((p) => {
           return (
            <div key={p.id}>
              <Center p="1rem">
                 <Card>
                   <CardHeader>
                     <Heading size='md'>{p.nombre}</Heading>
                   </CardHeader>
                   <CardBody>
                     <Text>{p.description}</Text>
                     <Text>{p.category}</Text>
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