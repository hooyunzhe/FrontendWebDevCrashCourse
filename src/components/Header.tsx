export default function Header({ title }: { title: string }) {
  return (
    <div className='header-div' id='header'>
      <h1 className='main-heading'>{title}</h1>
    </div>
  );
}
