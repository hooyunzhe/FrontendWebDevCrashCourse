import { Box, Title } from '@mantine/core';

export default function MantineHeader({ title }: { title: string }) {
  return (
    <Box
      w='50vw'
      bg='rgb(176, 130, 151)'
      style={{
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
      }}
    >
      <Title
        order={1}
        m='0.67em'
        style={{
          textAlign: 'center',
        }}
      >
        {title}
      </Title>
    </Box>
  );
}
