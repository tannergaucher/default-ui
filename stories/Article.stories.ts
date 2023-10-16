import { Article, type ArticleProps } from './Article'

import '../package/index.css'

export default {
  component: Article,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export const ContentArticle = {
  args: {
    type: 'content',
  } as ArticleProps,
}

export const CardArticle = {
  args: {
    type: 'card',
  } as ArticleProps,
}
