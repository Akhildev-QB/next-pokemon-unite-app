import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <ul>
        <li>
          <Link href="/pokemon">Pokemon</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
