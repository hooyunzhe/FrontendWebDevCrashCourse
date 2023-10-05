'use client';
import '../../public/example.css';
import Header from '@/components/Header';
import Item from '@/components/Item';

export default function Home() {
  const items = [
    { name: 'Apple', imageUrl: '/apple.png', inStock: true },
    { name: 'Orange', imageUrl: '/orange.png', inStock: false },
    { name: 'Bee', imageUrl: '/bee.png', inStock: true },
  ];

  // Header and Item are imported from separate files in the components folder
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
