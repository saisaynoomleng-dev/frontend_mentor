import { defineQuery } from "next-sanity";

export const BLOGS_QUERY = defineQuery(`*[_type == 'blog'
 && defined(slug.current)][0...3]{
  slug,
  title,
  subtitle,
  publishedAt,
  author->{
    name
  },
  image{
    asset->{
      url
    }
  }
 } | order(publishedAt desc)`);

export const BLOG_QUERY = defineQuery(`*[_type == 'blog'
 && slug.current == $slug][0]{
  slug,
  category->{
    name},
  title,
  description,
  publishedAt,
  author->{
    name,
    description
  },
  image{
    asset->{
      url
    }
  }
 }`);

export const NEW_POSTS_QUERY = defineQuery(`*[_type == 'newPost'
 && defined(slug.current)][0...3]{
    title,
    subtitle,
    publishedAt,
    category->{
      name
    },
    slug,
    author->{
      name
    }
 } | order(publishedAt desc)`);

export const NEW_POST_QUERY = defineQuery(`*[_type == 'newPost'
 && slug.current == $slug][0]{
    title,
    subtitle,
    publishedAt,
    description,
    category->{
      name
    },
    author->{
      name,
      description
    }
 }`)

export const MAIN_NAV_QUERY = defineQuery(`*[_type == 'navMenu'
   && slug.current == 'main-nav-menu'][0]{
    link[]->{
      linkName,
      url
    }
   }`)