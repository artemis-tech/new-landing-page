import React from 'react';
import {
  Box,
  Grid,
  Heading,
  ResponsiveContext,
  Paragraph,
  Button,
  Text,
} from 'grommet';
import { useContext } from 'react';
import { LinkNext } from 'grommet-icons';
import { Article } from 'grommet-icons';

const HIGHLIGHT_SIZE = 380;

const ResponsiveGrid = ({ children, areas, ...props }: any) => {
  const size = useContext(ResponsiveContext);
  return (
    <Grid
      rows={['flex', 'auto']}
      columns={['flex', 'auto']}
      areas={areas[size]}
      {...props}
    >
      {children}
    </Grid>
  );
};

const smallAreas = [
    { name: 'action', start: [0, 0], end: [0, 0] },
    { name: 'highlights', start: [0, 1], end: [0, 1] },
  ],
  largeAreas = [
    { name: 'action', start: [0, 0], end: [1, 0] },
    { name: 'highlights', start: [1, 0], end: [1, 0] },
  ];

function Announce() {
  const size = useContext(ResponsiveContext);
  return (
    <ResponsiveGrid
      id="announce"
      fill
      justify="stretch"
      areas={{
        xsmall: smallAreas,
        small: smallAreas,
        medium: smallAreas,
        large: largeAreas,
        xlarge: largeAreas,
      }}
      pad={{
        bottom: 'large',
      }}
    >
      <Box
        gridArea="action"
        pad={size === 'medium' ? 'medium' : 'large'}
        gap="small"
      >
        <Heading size="small">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil velit
          eos esse quis illum, neque illo placeat eius dolores alias!
        </Heading>
        <Paragraph size="large">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed, quod.
        </Paragraph>
        <Box
          width="220px"
          height="48px"
          pad={{ vertical: size === 'small' ? 'small' : 'xsmall' }}
        >
          <Button
            primary
            size="small"
            style={{ borderRadius: '25px' }}
            icon={<LinkNext color="white" />}
            label={
              <Text color="white" weight="bold">
                Lorem
              </Text>
            }
            href={`#header`}
          />
        </Box>
        <Text size="small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Box>
      <Box
        gridArea="highlights"
        pad={size === 'medium' ? 'medium' : 'large'}
        width={['large'].indexOf(size) >= 0 ? `${HIGHLIGHT_SIZE}px` : undefined}
      >
        <Box alignSelf="center">
          <Article
            color="brand"
            size={`${HIGHLIGHT_SIZE / 1.5}px`}
            style={{ maxWidth: 600 }}
          />
        </Box>
        <Text margin="small" alignSelf="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Text>
      </Box>
    </ResponsiveGrid>
  );
}

export default Announce;
