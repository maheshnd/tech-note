import { visit } from 'unist-util-visit'
import type { Code, Parent, Root } from 'mdast'

export function remarkCodeBlocks(): (tree: Root) => void {
  return function transform(tree: Root): void {
    visit(tree, 'code', (node: Code, index: number | undefined, parent: Parent | undefined) => {
      if (!parent || typeof index !== 'number') return

      const attributes: Array<{
        type: 'mdxJsxAttribute'
        name: string
        value: string
      }> = [
        {
          type: 'mdxJsxAttribute',
          name: 'language',
          value: node.lang ?? 'text',
        },
        {
          type: 'mdxJsxAttribute',
          name: 'code',
          value: node.value,
        },
      ]

      if (node.meta) {
        attributes.push({
          type: 'mdxJsxAttribute',
          name: 'title',
          value: node.meta,
        })
      }

      const replacement = {
        type: 'mdxJsxFlowElement',
        name: 'MdxCodeBlock',
        attributes,
        children: [],
      }

      parent.children[index] = replacement as Parent['children'][number]
    })
  }
}
