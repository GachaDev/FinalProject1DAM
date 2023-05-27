import { ActionIcon } from '@mantine/core';

export default function SocialIcon({ href, target, rel, color, size, stroke, icon: Icon }) {
    return (
      <ActionIcon variant="transparent" size="lg" className={'socialIcon'}>
        <a href={href} target={target} rel={rel} onClick={(e) => e.stopPropagation()}>
          <Icon color={color} size={size} stroke={stroke} />
        </a>
      </ActionIcon>
    );
  }