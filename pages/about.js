import { useRouter } from 'next/router';
const AboutPage = () => {
  const router = useRouter();
  const clickHandler = () => {
    router.push('/');
  };

  return (
    <div>
      <h1>About Page</h1>
      <button onClick={clickHandler}>Home</button>
    </div>
  );
};

export default AboutPage;
