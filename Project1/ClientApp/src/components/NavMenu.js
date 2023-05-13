import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandTwitch, IconBrandTiktok } from '@tabler/icons-react';
import './NavMenu.css';
import { Link } from 'react-router-dom';


const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),

    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  links: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  social: {
    width: rem(260),

    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
    },
  },

  burger: {
    marginRight: theme.spacing.md,

    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,
    color: 'rgb(255 255 255 / 65%)',
    '&:hover': {
      color: 'white',
    }
  },

  linkActive: {
    '&, &:hover': {
      color: 'white',
    },
  },
}));

export default function NavMenu({ links }) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={cx(classes.link, { [classes.linkActive]: active === link.link })}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} mb={20}>
      <Container className={classes.inner}>
        <Burger opened={opened} onClick={toggle} size="sm" className={classes.burger} />
        <Group className={classes.links} spacing={5}>
          {items}
        </Group>
          <a href="https://kingsleague.pro" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Image
              maw={38}
              mx='auto'
              className='logoApp'
              src='https://kingsleague.pro/wp-content/uploads/2023/05/logo-kings.svg'
              alt='Random image'
            />
          </a>        
          <Group spacing={0} className={classes.social} position="right" noWrap>
          <ActionIcon variant="transparent" size="lg">
            <a href="https://twitter.com/kingsleague" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <IconBrandTwitter color='#1d9bf0' size="1.1rem" stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg">
            <a href="https://youtube.com/@KingsLeagueOfficial" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <IconBrandYoutube color='#ff0000' size="1.1rem" stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg">
            <a href="https://instagram.com/KingsLeague" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <IconBrandInstagram color='#ee3d6c' size="1.1rem" stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg">
            <a href="https://twitch.tv/KingsLeague" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <IconBrandTwitch color='#a970ff' size="1.1rem" stroke={1.5} />
            </a>
          </ActionIcon>
          <ActionIcon variant="transparent" size="lg">
            <a href="https://tiktok.com/@KingsLeague" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              <IconBrandTiktok color='rgb(254 44 85)' size="1.1rem" stroke={1.5} />
            </a>
          </ActionIcon>
        </Group>
      </Container>
    </Header>
  );
}