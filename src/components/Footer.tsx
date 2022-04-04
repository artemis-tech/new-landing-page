import React from 'react';
import { Anchor, Box, Footer as GrommetFooter, Text } from 'grommet';
import { capitalize } from '../strings';
import consts from '../consts';
import { Edit } from 'grommet-icons';

const FooterAnchor = ({ ...rest }) => (
  <Anchor size="small" color="white" {...rest} />
);

const data: any[] = [
  {
    title: 'App',
    refs: [
      {
        label: 'home',
        href: '#header',
      },
      {
        label: 'Announce',
        href: '#announce',
      },
      {
        label: 'benefits',
        href: '#benefits',
      },
      {
        label: 'contact',
        href: '#contact',
      },
    ],
  },
];

function Footer() {
  return (
    <GrommetFooter background="brand" pad="large" align="bottom">
      <Box gap="xsmall" alignSelf="center">
        <Box
          align="center"
          gap="small"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Edit width={64} height={64} fill="white" />
          <Text alignSelf="center" color="white" weight="bold">
            {consts.BRAND_NAME}
          </Text>
        </Box>
      </Box>
      <Box fill direction="row" justify="end">
        {data.map((item) => (
          <Box
            gap="medium"
            pad={{ horizontal: 'large' }}
            key={`footer-${item[0]}`}
          >
            <Text weight="bold" size="small">
              {item.title}
            </Text>
            <Box gap="xsmall">
              {item.refs.map(({ label, href }: any) => (
                <FooterAnchor key={`footer-${label}`} href={href}>
                  {capitalize(label)}
                </FooterAnchor>
              ))}
            </Box>
          </Box>
        ))}
      </Box>
    </GrommetFooter>
  );
}

export default Footer;
