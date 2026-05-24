export default function Download() {
  return (
    <section className="section">
      ```jsx
import Link from 'next/link';
import Head from 'next/head';

function DownloadPage() {
  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>The Best 10 Montessori Schools in Austin, TX</title>
        <meta name="description" content="Download information about the top 10 Montessori schools in Austin, TX" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl font-bold mt-4">Download Information</h1>

      <p className="text-lg mb-4">Get in touch with us to learn more about our top-rated Montessori schools in Austin, TX.</p>

      <ul className="list-disc mb-4">
        <li>
          <Link href="https://www.montessoriaustin.org/contact" passHref>
            <a>Send us an email: info@montessoriaustin.org</a>
          </Link>
        </li>
        <li>
          Visit our website: <Link href="https://www.montessoriaustin.org/" passHref>
            <a>www.montessoriaustin.org</a>
          </Link>
        </li>
      </ul>

      <h2 className="text-2xl font-bold mb-4">Downloadable Resources</h2>

      <ul className="list-disc mb-4">
        <li>
          <Link href="#" passHref>
            <a>Our Top 10 Montessori Schools in Austin, TX Brochure</a>
          </Link>
        </li>
        <li>
          <Link href="#" passHref>
            <a>Our Montessori Education Philosophy Document</a>
          </Link>
        </li>
      </ul>

      <p className="text-lg mb-4">For more information, please visit our website or contact us directly.</p>

      <p className="text-lg mb-4">The Best 10 Montessori Schools in Austin, TX. All rights reserved.</p>
    </div>
  );
}

export default DownloadPage;
```
    </section>
  );
}
