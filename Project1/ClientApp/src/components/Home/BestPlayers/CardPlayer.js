import { Paper, Text, Title, Image, rem } from '@mantine/core';
import { Trash, Edit } from 'tabler-icons-react';
import { ActionIcon } from '@mantine/core';
import { UseAdmin } from '../../../Zustand/UseAdmin';

export default function CardPlayer({backUrl, title, category, name, playerImg, handleDeleteCartel, idCartel}) {
    const { Admin } = UseAdmin();
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
                        {Admin ? <div style={{ display: 'flex', flexDirection:'row' }}>
                            <ActionIcon variant="transparent" size="lg">
                                <Trash
                                size={20}
                                onClick={()=>{handleDeleteCartel(idCartel)}}
                                strokeWidth={2}
                                color={'white'}
                                />
                            </ActionIcon>
                        </div> : null}
                    </div>
                    <div>
                        <Image height={rem(320)} className='imageCard' src={playerImg} alt="Random image" />
                    </div>
                </div>
            </Paper>
        </div>
    );
}
