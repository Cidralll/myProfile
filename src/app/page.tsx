import styles from './page.module.scss';
import Header from '@/components/header/Header';
import getCurrentDate from '@/services/getCurrentDate';
import Post from '@/components/post/Post';
import { prisma } from '@/lib/prisma';
import Footer from '@/components/footer/Footer';

// Busca os dados no banco de dados
const getPosts = async () => {
  const posts = await prisma.profile.findMany({});
  return posts.sort((a, b) => Number(b.id) - Number(a.id));
}

export default async function Home() {
  const date = getCurrentDate();
  const posts = await getPosts()

  return (
    <main className={styles.main}>
      <Header />
      <section className={styles.publications}>
        <div className={styles.line} />
        <h1 className={styles.title}>Publicações</h1>
        <div className={styles.date}>{ date }</div>
        {posts.map((post) => (
          <Post 
              titlePost={post.title}
              subtitlePost={post.subtitle}
              deploymentLink={post.deploymentLink}
              deploymentText='Implantação'
              githubLink={post.githubLink}
              githubText='Github'
              date={post.date}
              srcImg={post.urlImage}
              altImg={post.altImage}
              key={post.id}
          />
        ))}
      </section>
      <Footer />
    </main>
  )
}
