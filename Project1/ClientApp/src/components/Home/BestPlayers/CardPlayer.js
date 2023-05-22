import { Paper, Text, Title, Image, rem } from '@mantine/core';

export default function CardPlayer({backUrl, title, category, name, playerImg}) {
  return (
    <div style={{ flex: '1' }}>
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            sx={{ backgroundImage: `url(${backUrl})` }}
            className={'cardMain'}
        >
            <div style={{display: "flex", flexDirection: "row"}}>
                <div>
                    <Text className={'categoryCard'} size="xs">
                    {title}
                    </Text>
                    <Text order={5} className={'titleCard'}>
                    {category}
                    </Text>
                    <Title order={4} className={'titleCard'}>
                    {name}
                    </Title>
                </div>
                <div>
                    <Image height={rem(320)} className='imageCard' src={playerImg} alt="Random image" />
                </div>
            </div>
        </Paper>
    </div>
  );
}
