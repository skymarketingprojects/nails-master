import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import styles from './BlogDetailPage.module.css';
import { api } from "../../api/baseApi";
import { type BlogDetail, type BlogItem } from "../../api/types";
import config from "../../config/config";
import SEO from "../../components/SEO/SEO";
import { HeroSection } from "../../components/HeroSection/HeroSection";


const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [blog, setBlog] = useState<BlogDetail | null>(null);
  const [moreBlogs, setMoreBlogs] = useState<BlogItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  // Helper function to ensure full image URLs
  const getFullUrl = (path: string | null | undefined) => {
    if (!path) return "";
    if (path.startsWith("http")) return path;
    const baseUrl = config.BASE_URL.replace(/\/$/, ""); // Remove trailing slash if any
    const relativePath = path.startsWith("/") ? path : `/${path}`; // Ensure leading slash
    return `${baseUrl}${relativePath}`;
  };

  // Helper function to strip HTML tags for SEO
  const stripHtml = (html: string) => {
    return html.replace(/<\/?[^>]+(>|$)/g, "").trim();
  };

  // Helper function to prefix relative URLs in HTML content
  const processHtmlContent = (html: string) => {
    const baseUrl = config.BASE_URL.replace(/\/$/, "");
    return html.replace(
      /(src|href)=["'](\/media\/[^"']+)["']/g,
      `$1="${baseUrl}$2"`
    );
  };

  useEffect(() => {
    const fetchBlogData = async () => {
      // Guard clause: Early return if no slug
      if (!slug) return;

      try {
        setLoading(true);
        const data = await api.getBlogDetail(slug);
        setBlog(data);

        // Fetch more blogs for the "Explore More" section (limit 3)
        const moreData = await api.getBlogs(1, 3);
        // Filter out the current blog from the more section
        setMoreBlogs(moreData.results.filter(b => b.slug !== slug).slice(0, 3));
      } catch (error) {
        console.error("Failed to fetch blog detail:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
    // Scroll to top on slug change
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return <div className={styles.loading}>Loading blog...</div>;
  }

  // Guard clause: Blog not found
  if (!blog) {
    return (
      <div className={styles.notFound}>
        <h2>Blog not found</h2>
        <Link to="/blogs">Back to Blogs</Link>
      </div>
    );
  }

  // const blogImage = getFullUrl(blog.image);
  const cleanDescription = stripHtml(blog.description);
  const processedContent = processHtmlContent(blog.description);

  const formattedDate = new Date(blog.timestamp).toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });

  return (
    <div className={styles.pageWrapper}>
      <SEO
        title={blog.title}
        description={cleanDescription.substring(0, 160)}
      />
      <HeroSection image={blog.image} skipFetch={true} />
      <div className={styles.container}>
        <main className={styles.main}>
          <div className={styles.meta}>
            <span>{formattedDate}</span>
            <span>{blog.author}</span>
          </div>
          <h1>{blog.title}</h1>
          <div
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: processedContent }}
          />
        </main>

        {moreBlogs.length > 0 && (
          <section className={styles.moreBlogs}>
            <h2>Explore More Blogs</h2>
            <div className={styles.moreBlogsGrid}>
              {moreBlogs.map((b) => {
                const moreBlogImg = getFullUrl(b.image);

                return (
                  <div key={b.id} className={styles.smallCard}>
                    <img src={moreBlogImg} alt={b.title} />
                    <div className={styles.smallCardContent}>
                      <h3>{b.title}</h3>
                      <Link to={`/blog/${b.slug}`}>Read More</Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default BlogDetailPage;
