import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogs } from '../../data/blogs';
import styles from './BlogDetailPage.module.css';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={blog.thumbnail} alt={blog.title} className={styles.heroImage} />
        <div className={styles.meta}>
          <span>{blog.date}</span>
          <span>{blog.author}</span>
        </div>
      </header>
      <main className={styles.main}>
        <h1>{blog.title}</h1>
        {blog.content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </main>
      <section className={styles.moreBlogs}>
        <h2>Explore More Blogs</h2>
        <div className={styles.moreBlogsGrid}>
          {blogs.slice(0, 3).map((b) => (
            <div key={b.id} className={styles.smallCard}>
              <img src={b.thumbnail} alt={b.title} />
              <h3>{b.title}</h3>
              <Link to={`/blog/${b.slug}`}>Read More</Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogDetailPage;
