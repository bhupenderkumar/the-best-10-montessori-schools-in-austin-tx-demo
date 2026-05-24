export default function About() {
  return (
    <section className="section">
      ```jsx
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} | About Us</title>
        <meta name="description" content="About THE BEST 10 Montessori Schools in AUSTIN, TX" />
      </Head>
      <main className="mx-auto max-w-7xl p-4 md:p-6 xl:p-8 pt-10">
        <section className="text-center">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg">Welcome to THE BEST 10 Montessori Schools in AUSTIN, TX, a community dedicated to providing a nurturing and supportive environment for children to grow and thrive.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">Our mission is to create a haven where children can explore, learn, and develop at their own pace, fostering a lifelong love of learning and a sense of independence.</p>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc ml-4 text-lg">
            <li>Respect for the child as an individual</li>
            <li>Self-directed learning and discovery</li>
            <li>Emphasis on practical life skills</li>
            <li>Community and social responsibility</li>
          </ul>
        </section>
        <section className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg">We would love to hear from you. For any inquiries or to learn more about our school, please contact us at:</p>
          <p className="text-lg font-bold">info@montessoriaustin.org</p>
        </section>
      </main>
    </Layout>
  );
}
```
    </section>
  );
}
