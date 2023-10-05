'use client';
import '../../../public/example.css';
import Image from 'next/image';
import { useState } from 'react';

function Header({ title }) {
  return (
    <div className='header-div' id='header'>
      <h1 className='main-heading'>{title}</h1>
    </div>
  );
}

export function Item({name, imageUrl, inStock}) {
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

export default function Home() {
  // JavaScript is a prototype-based language, which means that it doesn't have classes
  // despite that, it allows for code reuse with objects as prototypes for other objects
  //
  // it's a dynamically-typed language, which means that variables don't need to be declared with a type
  // the interpreter will infer the types of the variables based on the values assigned to at run time
  //
  // this means that run-time type errors are possible and difficult to 100% prevent
  // the example object below will not cause any errors until run time, which makes it easier to miss
  const items = [
    { name: 'Apple', imageUrl: '/apple.png', inStock: true },
    { name: 'Orange', imageUrl: '/orange.png', inStock: false },
    { name: 'Bee', imageUrl: '/bee.png', inStock: true },
    // { name: 42, imageUrl: false, inStock: 'false' },
  ];

  return (
    <div className='parent-div'>
      <div className='child-div'>
        <Header title='Welcome to the shop!' />
        <div className='content-div'>
          {items.map((item, index) => (
            <Item
              key={index}
              name={item.name}
              imageUrl={item.imageUrl}
              inStock={item.inStock}
            />
          ))}
        </div>
      </div>
    </div>
  );

  // the following code from react-interactivity-example is no longer need

  // react and react-dom have been installed with yarn
  // <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  // <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>

  // Next.js has a built-in compiler that transforms JSX/TSX into JavaScript
  // <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  // the following is done by the Next.js
  // <script type="text/jsx">
  // <html> and <body> tags
  // const appDiv = document.getElementById("app");
  // ReactDOM.render(<Homepage />, appDiv)

  // useState will be imported from react instead of the below
  // React.useState(0)
}
