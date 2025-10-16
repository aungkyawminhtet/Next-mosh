import React from 'react'
import { Html, Body, Container, Text, Link, Preview } from '@react-email/components'

const WelcomeTextTemplate = ({name}: {name: string}) => {
  return (
    <div>
      <Html>
        <Preview>Welcome from my AK Eamil.</Preview>
        <Container>
            <Text> Hi my name is - {name}.</Text>
            <Link href='www.google.com'>Google</Link>
        </Container>
      </Html>
    </div>
  )
}

export default WelcomeTextTemplate
