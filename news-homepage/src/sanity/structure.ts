import { BiSolidCategoryAlt } from 'react-icons/bi'
import { FaLink, FaMicroblog, FaUser } from 'react-icons/fa'
import { MdOutlinePostAdd } from 'react-icons/md'
import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contents')
    .items([
      S.documentTypeListItem('navMenu').title('Nav Menus').icon(FaLink),
      S.documentTypeListItem('blog').title('All Blogs').icon(FaMicroblog),
      S.documentTypeListItem('newPost').title('All Posts').icon(MdOutlinePostAdd),
      S.divider(),
      S.documentTypeListItem('author').title('All Authors').icon(FaUser),
      S.documentTypeListItem('category').title('All Categories').icon(BiSolidCategoryAlt)
    ])
