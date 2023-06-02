import { useState } from 'react';
import { Header, Group, Container, Image, ActionIcon } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram, IconBrandTwitch, IconBrandTiktok } from '@tabler/icons-react';
import { Link, useNavigate  } from 'react-router-dom';
import { Logout } from 'tabler-icons-react';
import SocialIcon from './SocialIcon';
import { UseAdmin } from '../../Zustand/UseAdmin';

export default function NavMenu({ links }) {
  const [active, setActive] = useState(links[0].link);
  const { setIsLogged, setAdmin } = UseAdmin();
  const navigate = useNavigate();

  const Logoutx = function() {
    setIsLogged(false); 
    setAdmin(false);
  }

  const items = links.map((link) => (
    <Link
      key={link.label}
      to={link.link}
      className={`link ${active === link.link ? 'linkActive' : ''}`}
      onClick={() => setActive(link.link)}
    >
      {link.label}
    </Link>
  ));

  return (
    <Header height={56} mb={20}>
      <Container className={'flexContainer'}>
        <div className={'logoContainer'}>
          <a href="https://kingsleague.pro" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
            <Image
              src="https://kingsleague.pro/wp-content/uploads/2023/05/logo-kings.svg"
              alt="Logo"
              maw={30}
            />
          </a>
        </div>
        <div className={'navbarContainer'}>
          <Group spacing={5}>
            {items}
          </Group>
        </div>
        <div className={'linkContainer'}>
          <Group spacing={0} className={'social'} position="right" noWrap>
            <SocialIcon href="https://twitter.com/kingsleague" target="_blank" rel="noopener" color="#1d9bf0" size="1.1rem" stroke={1.5} icon={IconBrandTwitter} />
            <SocialIcon href="https://youtube.com/@KingsLeagueOfficial" target="_blank" rel="noopener" color="#ff0000" size="1.1rem" stroke={1.5} icon={IconBrandYoutube} />
            <SocialIcon href="https://instagram.com/KingsLeague" target="_blank" rel="noopener" color="#ee3d6c" size="1.1rem" stroke={1.5} icon={IconBrandInstagram} />
            <SocialIcon href="https://twitch.tv/KingsLeague" target="_blank" rel="noopener" color="#a970ff" size="1.1rem" stroke={1.5} icon={IconBrandTwitch} />
            <SocialIcon href="https://tiktok.com/@KingsLeague" target="_blank" rel="noopener" color="rgb(254 44 85)" size="1.1rem" stroke={1.5} icon={IconBrandTiktok} />
            <ActionIcon variant="transparent" size="lg" className={'socialIcon'}><Logout size="1.1rem" strokeWidth={1.5} color={'white'} onClick={()=> {navigate('/');Logoutx()}}/></ActionIcon>
          </Group>
        </div>
      </Container>
    </Header>
  );
}
