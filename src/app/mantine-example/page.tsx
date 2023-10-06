'use client';
import '@mantine/core/styles.css';
import { Flex, Center } from '@mantine/core';
import MantineHeader from '@/components/MantineHeader';
import MantineItem from '@/components/MantineItem';

export default function Home() {
  // Mantine is a React component library, which speeds up the styling part of frontend web dev
  // it provides commonly used components that can be used right away, without additional CSS
  // extra styles can also be added to further customize the components, making it even more flexible
  const items = [
    { name: 'Apple', imageUrl: '/apple.png', inStock: true },
    { name: 'Orange', imageUrl: '/orange.png', inStock: false },
    { name: 'Bee', imageUrl: '/bee.png', inStock: true },
    // { name: 42, imageUrl: false, inStock: 'false' },
  ];

  return (
    <Center
      w='100vw'
      h='100vh'
      bg='linear-gradient(
      90deg,
      rgb(117, 185, 190),
      rgb(208, 214, 181),
      rgb(249, 181, 172)
    )'
    >
      <Flex
        w='50vw'
        h='50vh'
        bg='rgb(180, 153, 165)'
        style={{
          borderRadius: '15px',
        }}
        direction='column'
        justify='space-between'
        align='center'
      >
        <MantineHeader title='Welcome to the shop!' />
        <Flex w='50vw' h='40vh' justify='space-evenly' align='center'>
          {items.map((item, index) => (
            <MantineItem key={index} {...item} />
          ))}
        </Flex>
      </Flex>
    </Center>
  );
}
