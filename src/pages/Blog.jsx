import PageTransition from "../components/layout/PageTransition";

import BlogHero from "../components/blog/BlogHero";
import FeaturedPost from "../components/blog/FeaturedPost";
import BlogCategories from "../components/blog/BlogCategories";
import LatestPosts from "../components/blog/LatestPosts";
import Newsletter from "../components/blog/Newsletter";
import BlogCTA from "../components/blog/BlogCTA";

function Blog() {
  return (
    <PageTransition>

      <BlogHero />

      <FeaturedPost />

      <BlogCategories />

      <LatestPosts />

      <Newsletter />

      <BlogCTA />

    </PageTransition>
  );
}

export default Blog;