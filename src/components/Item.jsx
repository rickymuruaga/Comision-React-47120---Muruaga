import React from 'react'
import {Card,CardHeader, CardBody,CardFooter, Heading, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Item = ({nombre, description, id, category}) => {
 
  console.log(nombre);
 
  return (
    <>
    <Card>
            <CardHeader>
              <Heading size='md'>{nombre}</Heading>
            </CardHeader>
            <CardBody>
              <Text>{description}</Text>
              <Text>{category}</Text>
            </CardBody>
            
            <CardFooter>
            
            <Link to ={`/item/{'id'}`}>
              <Button>
                 Details
              </Button>
            </Link>
                
              
             
            </CardFooter>
          </Card>
    
    </>
  )
}

export default Item