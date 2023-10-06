import { Box, Button, Flex, Title } from '@mantine/core';
import Image from 'next/image';
import { useState } from 'react';

export default function MantineItem({
  name,
  imageUrl,
  inStock,
}: {
  name: string;
  imageUrl: string;
  inStock: boolean;
}) {
  const [amountSold, setAmountSold] = useState(0);

  function handleClick() {
    setAmountSold(amountSold + 1);
  }

  return (
    <Flex
      w='15vw'
      h='40vh'
      direction='column'
      justify='space-evenly'
      align='center'
    >
      <Flex
        w='15vw'
        h='30vh'
        bg='rgb(208, 214, 181)'
        style={{
          borderRadius: '15px',
        }}
        direction='column'
        justify='space-between'
        align='center'
      >
        <Box
          w='100%'
          h='6vh'
          bg='rgb(203, 187, 156)'
          style={{
            borderTopLeftRadius: '15px',
            borderTopRightRadius: '15px',
          }}
        >
          <Title
            order={2}
            m='0.67em'
            style={{
              textAlign: 'center',
            }}
          >
            {name} ({amountSold} sold!)
          </Title>
        </Box>
        <Flex w='100%' h='100%' justify='center' align='center'>
          <Image
            src={imageUrl}
            alt={name}
            width={512}
            height={512}
            style={{
              width: '128px',
              height: '128px',
              objectFit: 'cover',
            }}
          />
        </Flex>
      </Flex>
      <Button
        color='rgb(208, 214, 181)'
        onClick={handleClick}
        disabled={!inStock}
      >
        {inStock ? `Buy ${name}s now!` : 'Sold out :('}
      </Button>
    </Flex>
  );
}
