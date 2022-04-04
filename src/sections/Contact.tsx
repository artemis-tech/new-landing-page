import React from 'react';
import { Box, Heading, Text } from 'grommet';
import Form from '../features/contact/Form';

function Contact() {
  return (
    <Box id="contact">
      <Box align="center" justify="center" pad="medium">
        <Heading alignSelf="center" color="brand">
          Contact
        </Heading>
        <Text margin="large">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
          nesciunt?
        </Text>
        <Box margin="large" width="medium">
          <Form />
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
