import ReactPlayer from 'react-player';
import { Card, Text, AspectRatio } from '@mantine/core';

export default function CardVlog({article}) {
  return (
    <Card key={article.title} p="xs" radius="md" component="a" className={'cardNavarrosa'}>
      <AspectRatio ratio={16 / 9}>
        <ReactPlayer url={article.videoUrl} width="100%" height="100%" controls />
      </AspectRatio>
      <Text className={'titleNavarrosa'} mt={5}>
        {article.title}
      </Text>
    </Card>
  );
}
