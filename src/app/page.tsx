import Image from 'next/image';

export default function Home() {
  return (
    <div style={{ padding: '20px', backgroundColor: '#f0e5e5', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center' }}>
        <Image src="/photo/Ellipse 5.png" alt="Profile Picture" width={80} height={80} style={{ borderRadius: '50%' }} />
        <h1>Pierre Caillou</h1>
        <div>
          <Image src="/photo/badges 1.png" alt="Badge 1" width={20} height={20} />
          <Image src="/photo/badges 2.png" alt="Badge 2" width={20} height={20} />
          <Image src="/photo/badges 3.png" alt="Badge 3" width={20} height={20} />
          <Image src="/photo/badges 4.png" alt="Badge 4" width={20} height={20} />
          <Image src="/photo/badges 5.png" alt="Badge 5" width={20} height={20} />
          <Image src="/photo/badges 6.png" alt="Badge 6" width={20} height={20} />
        </div>
      </header>

      <section style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
        <div>
          <Image src="/photo/Frame 6.png" alt="Challenges" width={100} height={100} />
          <h2>26 Challenges</h2>
        </div>
        <div>
          <Image src="/photo/Frame 7.png" alt="Posts" width={100} height={100} />
          <h2>58 Posts</h2>
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Pierre Caillou</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <Image src="/photo/Frame 8.png" alt="Image 1" width={150} height={150} />
          <Image src="/photo/Frame 9.png" alt="Image 2" width={150} height={150} />
        </div>
      </section>

      <section style={{ marginTop: '20px' }}>
        <h2>Challenges</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li>
            <Image src="/photo/Ellipse 2.png" alt="Challenge 1" width={50} height={50} />
            Challenges Broderie
          </li>
          <li>
            <Image src="/photo/Ellipse 3.png" alt="Challenge 2" width={50} height={50} />
            Challenges Patch
          </li>
          <li>
            <Image src="/photo/Ellipse 4.png" alt="Challenge 3" width={50} height={50} />
            Challenges 1/1 minute
          </li>
          <li>
            <Image src="/photo/Ellipse 5.png" alt="Challenge 4" width={50} height={50} />
            Challenges Custom T-Shirt
          </li>
        </ul>
      </section>
    </div>
  );
}