import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import html from 'remark-html'
import remarkRehype from 'remark-rehype'
import rehypeSanitize from 'rehype-sanitize'
import rehypeStringify from 'rehype-stringify'
import prism from 'remark-prism'

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .use(remarkGfm)
    .use(html)
    .use(prism)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(markdown)
  return result.toString()
}
