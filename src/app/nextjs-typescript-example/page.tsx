'use client';
import '../../../public/example.css';
import Header from '@/components/Header';
import Item from '@/components/Item';

export default function Home() {
  // TypeScript can be considered to be an object-oriented programming language
  // it supports classes, interfaces, enums, literal types and more to structure and reuse code
  //
  // it's a statically-typed language, which means that variables must remain the same type, unless converted
  // it's not necessary to declare variables with a type, as the compiler can infer them, just like JavaScript
  //
  // this means that run-time type errors are impossible as they will be caught at compile time
  // this example object below will cause compile-time errors, or even before that with linters
  const items = [
    { name: 'Apple', imageUrl: '/apple.png', inStock: true },
    { name: 'Orange', imageUrl: '/orange.png', inStock: false },
    { name: 'Bee', imageUrl: '/bee.png', inStock: true },
    // { name: 42, imageUrl: false, inStock: 'true' },
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
}
