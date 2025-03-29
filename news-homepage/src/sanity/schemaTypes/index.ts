import { type SchemaTypeDefinition } from 'sanity'
import { blogType } from './blogType'
import { categoriesType } from './categories'
import { authorType } from './authorType'
import { blockContentType } from './blockContent'
import { newPostType } from './newPostType'
import { navMenuType } from './navMenuType'
import { navlinkType } from './navlinkType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    blogType,
    categoriesType,
    authorType,
    blockContentType,
    newPostType,
    navMenuType,
    navlinkType
  ],
}
