
import Head from 'next/head';
import Index from './pages/index.js';

export default function Home() {
  return (
    <>
      <Head>
        <title>Maxius Clone</title>
      </Head>
      <main>
       
        <Index/>

      </main>
    </>
  );
}
