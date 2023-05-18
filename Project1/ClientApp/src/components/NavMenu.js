import { useState } from 'react';
import { createStyles, Header, Group, ActionIcon, Container, Burger, rem, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandTwitch, IconBrandTiktok } from '@tabler/icons-react';
import './NavMenu.css';
import { Link } from 'react-router-dom';

const useStyles = createStyles((theme) => ({
  flexContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: rem(56),
    maxWidth: '115rem',
    [theme.fn.smallerThan('sm')]: {
      justifyContent: 'flex-start',
    },
  },

  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 auto',
  },

  logo: {
    width: rem(38),
    height: rem(38),
  },

  navbarContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: '1 1 auto',
    paddingLeft: rem(20),
    paddingRight: rem(20),
    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
    },
  },

  linkContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    flex: '0 0 auto',
    marginLeft: 'auto',
    [theme.fn.smallerThan('sm')]: {
      width: 'auto',
      marginLeft: 'auto',
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

  social: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  socialIcon: {
    marginRight: theme.spacing.xs,
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
      <Container className={classes.flexContainer}>
        <div className={classes.logoContainer}>
          <a href="https://kingsleague.pro" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Image
              className={classes.logo}
              src="https://kingsleague.pro/wp-content/uploads/2023/05/logo-kings.svg"
              alt="Logo"
              maw={30}
            />
          </a>
        </div>
        <div className={classes.navbarContainer}>
          <Group spacing={5}>
            {items}
          </Group>
        </div>
        <div className={classes.linkContainer}>
          <Group spacing={0} className={classes.social} position="right" noWrap>
            <ActionIcon variant="transparent" size="lg" className={classes.socialIcon}>
              <a href="https://twitter.com/kingsleague" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <IconBrandTwitter color="#1d9bf0" size="1.1rem" stroke={1.5} />
              </a>
            </ActionIcon>
            <ActionIcon variant="transparent" size="lg" className={classes.socialIcon}>
              <a href="https://youtube.com/@KingsLeagueOfficial" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <IconBrandYoutube color="#ff0000" size="1.1rem" stroke={1.5} />
              </a>
            </ActionIcon>
            <ActionIcon variant="transparent" size="lg" className={classes.socialIcon}>
              <a href="https://instagram.com/KingsLeague" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <IconBrandInstagram color="#ee3d6c" size="1.1rem" stroke={1.5} />
              </a>
            </ActionIcon>
            <ActionIcon variant="transparent" size="lg" className={classes.socialIcon}>
              <a href="https://twitch.tv/KingsLeague" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <IconBrandTwitch color="#a970ff" size="1.1rem" stroke={1.5} />
              </a>
            </ActionIcon>
            <ActionIcon variant="transparent" size="lg" className={classes.socialIcon}>
              <a href="https://tiktok.com/@KingsLeague" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
                <IconBrandTiktok color="rgb(254 44 85)" size="1.1rem" stroke={1.5} />
              </a>
            </ActionIcon>
          </Group>
        </div>
      </Container>
    </Header>
  );
}
