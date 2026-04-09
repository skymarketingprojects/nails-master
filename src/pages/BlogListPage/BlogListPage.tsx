import React, { useState, useEffect } from 'react';
import styles from './BlogListPage.module.css';
import { Link } from 'react-router-dom';
import { HeroSection } from "../../components/HeroSection/HeroSection";
import SEO from "../../components/SEO/SEO";
import { api } from "../../api/baseApi";
import { type BlogItem } from "../../api/types";
import config from "../../config/config";

const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(false);

  // Helper function to ensure full image URLs
  const getFullUrl = (path: string | null | undefined) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const baseUrl = config.BASE_URL.replace(/\/$/, ""); // Remove trailing slash if any
    const relativePath = path.startsWith("/") ? path : `/${path}`; // Ensure leading slash
    return `${baseUrl}${relativePath}`;
  };

  // Helper function to strip HTML tags for short description
  const stripHtml = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "").trim();
  };

  const fetchBlogs = async (page: number) => {
    try {
      setLoading(true);
      const data = await api.getBlogs(page);
      
      if (page === 1) {
        setBlogs(data.results);
      } else {
        setBlogs((prev) => [...prev, ...data.results]);
      }
      
      setHasMore(data.has_next);
      setCurrentPage(data.current_page);
    } catch (error) {
      console.error("Failed to fetch blogs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs(1);
  }, []);

  const handleViewMore = () => {
    if (hasMore && !loading) {
      fetchBlogs(currentPage + 1);
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <SEO 
        title="Our Blogs" 
        description="Stay updated with the latest nail art trends, care tips, and studio news from Nails Master."
      />
      <HeroSection page="blogs" />
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
        <header className={styles.header}>
          <h1>Our Latest Blogs</h1>
        </header>

        {blogs.length === 0 && !loading ? (
          <div className={styles.noBlogs}>No blogs found. Check back later!</div>
        ) : (
          <div className={styles.grid}>
            {blogs.map((blog) => {
              const imgSrc = getFullUrl(blog.image);
              const cleanDescription = stripHtml(blog.description);

              return (
                <div key={blog.id} className={styles.card}>
                  <img src={imgSrc} alt={blog.title} className={styles.thumbnail} />
                  <div className={styles.cardContent}>
                    <h3>{blog.title}</h3>
                    <p className={styles.shortDescription}>{cleanDescription}</p>
                    <div className={styles.cardFooter}>
                      <span className={styles.author}>By {blog.author}</span>
                      <Link to={`/blog/${blog.slug}`} className={styles.readMore}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {hasMore && (
          <div className={styles.viewMoreContainer}>
            <button 
              className={styles.viewMore} 
              onClick={handleViewMore}
              disabled={loading}
            >
              {loading ? "Loading..." : "View More"}
            </button>
          </div>
        )}
      </div>
      </div>
    </div>
  );
};

export default BlogListPage;
