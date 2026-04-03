import React from 'react';
import styles from './BlogListPage.module.css';
import { blogs } from '../../data/blogs';
import { Link } from 'react-router-dom';
import { HeroSection } from "../../components/HeroSection/HeroSection";
import SEO from "../../components/SEO/SEO";

const BlogListPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <SEO 
        title="Our Blogs" 
        description="Stay updated with the latest nail art trends, care tips, and studio news from Nails Master."
      />
      <HeroSection page="blogs" />
      <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1>Our Latest Blogs</h1>
        </header>
      <div className={styles.grid}>
        {blogs.map((blog) => (
          <div key={blog.id} className={styles.card}>
            <img src={blog.thumbnail} alt={blog.title} className={styles.thumbnail} />
            <div className={styles.cardContent}>
              <h3>{blog.title}</h3>
              <p>{blog.shortDescription}</p>
              <Link to={`/blog/${blog.slug}`} className={styles.readMore}>
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
        <div className={styles.viewMoreContainer}>
          <button className={styles.viewMore}>View More</button>
        </div>
      </div>
    </div>
  );
};

export default BlogListPage;
