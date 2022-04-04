import React from 'react';
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Grid,
  Heading,
  ResponsiveContext,
  Text,
} from 'grommet';
import { System, Tasks, User, Wifi } from 'grommet-icons';
import { useContext } from 'react';

const data = [
  {
    icon: <Wifi size="xlarge" color="brand" />,
    title: 'Lorem',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, in labore. Minima animi odit nesciunt optio? Et ea explicabo exercitationem.',
  },
  {
    icon: <System size="xlarge" color="brand" />,
    title: 'Lorem',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, in labore. Minima animi odit nesciunt optio? Et ea explicabo exercitationem.',
  },
  {
    icon: <User size="xlarge" color="brand" />,
    title: 'Lorem',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, in labore. Minima animi odit nesciunt optio? Et ea explicabo exercitationem.',
  },
  {
    icon: <Tasks size="xlarge" color="brand" />,
    title: 'Lorem',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, in labore. Minima animi odit nesciunt optio? Et ea explicabo exercitationem.',
  },
];

function Benefits() {
  const size = useContext(ResponsiveContext);

  return (
    <Box id="benefits" background="brand" pad="large">
      <Heading alignSelf="center" color="white">
        Benefits
      </Heading>
      <Grid
        pad="medium"
        margin={{ bottom: 'medium', horizontal: 'medium' }}
        gap="xlarge"
        alignSelf="center"
        columns={size === 'xlarge' ? ['auto', 'auto'] : 'flex'}
      >
        {data.map((value, index) => (
          <Card
            background="white"
            height="auto"
            width="medium"
            border
            key={index}
            elevation="none"
            pad="large"
          >
            <CardHeader alignSelf="center" gap={undefined} direction="column">
              <Box pad="medium">{value.icon}</Box>
              <Heading size="small" margin="small">
                {value.title}
              </Heading>
            </CardHeader>
            <CardBody pad="medium">
              <Text size="small">{value.message}</Text>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </Box>
  );
}

export default Benefits;
