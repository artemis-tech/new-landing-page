import React, { useContext } from 'react';
import {
  Header as GrommetHeader,
  Anchor,
  ResponsiveContext,
  Box,
  Menu as GrommetMenu,
  Text,
} from 'grommet';
import { Menu as MenuIcon, Chat, Announce, Trigger } from 'grommet-icons';
import styled from 'styled-components';
import consts from '../consts';
import { Edit } from 'grommet-icons';

const Menu = styled(GrommetMenu)`
  & > div {
    padding: 0 6px;
  }
`;

type ResponsiveMenuItemProps = {
  label: string;
  href: string;
  icon: JSX.Element;
};

const ResponsiveMenu = ({ items }: any): JSX.Element => {
  const size = useContext(ResponsiveContext);

  return (
    <Box
      justify="end"
      direction="row"
      gap={size === 'small' ? 'medium' : 'small'}
    >
      <Box width="6px" height="100%" />
      {['xsmall', 'small', 'medium'].indexOf(size) >= 0 ? (
        <Menu
          a11yTitle="Navigation Menu"
          dropProps={{
            align: { top: 'bottom', right: 'right' },
            elevation: '0',
          }}
          icon={<MenuIcon color="brand" />}
          items={items.map((item: any) => {
            return {
              ...item,
              label: <Text color="brand">{item.label}</Text>,
            };
          })}
        />
      ) : (
        items.map(({ label, href, icon }: ResponsiveMenuItemProps) => (
          <Anchor
            margin="xsmall"
            color="brand"
            icon={size !== 'large' ? icon : undefined}
            key={label.trim().toLowerCase()}
            href={href}
            label={label}
          />
        ))
      )}
    </Box>
  );
};

function Header() {
  const size = useContext(ResponsiveContext);

  return (
    <GrommetHeader
      id="header"
      pad={size === 'small' ? 'medium' : 'large'}
      background="white"
    >
      <Anchor
        href="#announce"
        icon={<Edit width={32} height={32} fill="brand" />}
        label={size === 'small' ? undefined : consts.BRAND_NAME}
      />
      <ResponsiveMenu
        items={[
          {
            label: 'Announce',
            href: '#announce',
            icon: (
              <Announce
                color="brand"
                size="small"
                style={{
                  padding:
                    ['large', 'xlarge'].indexOf(size) >= 0 ? '0 4px' : '6px',
                }}
              />
            ),
          },
          {
            label: 'Benefits',
            href: '#benefits',
            icon: (
              <Trigger
                color="brand"
                size="small"
                style={{
                  padding:
                    ['large', 'xlarge'].indexOf(size) >= 0 ? '0 4px' : '6px',
                }}
              />
            ),
          },
          {
            label: 'Contact',
            href: '#contact',
            icon: (
              <Chat
                color="brand"
                size="small"
                style={{
                  padding:
                    ['large', 'xlarge'].indexOf(size) >= 0 ? '0 4px' : '6px',
                }}
              />
            ),
          },
        ]}
      />
    </GrommetHeader>
  );
}

export default Header;
