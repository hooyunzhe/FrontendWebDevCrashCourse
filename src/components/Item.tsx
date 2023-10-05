import Image from 'next/image';
import { useState } from 'react';

export default function Item({
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
    <div className='item-div'>
      <div className='description-div'>
        <div className='name-div'>
          <h2 className='item-name'>
            {name} ({amountSold} sold!)
          </h2>
        </div>
        <div className='image-div'>
          <Image
            className='item-image'
            src={imageUrl}
            alt={name}
            width={512}
            height={512}
          />
        </div>
      </div>
      <button className='item-button' onClick={handleClick} disabled={!inStock}>
        {inStock ? `Buy ${name}s now!` : 'Sold out :('}
      </button>
    </div>
  );
}
