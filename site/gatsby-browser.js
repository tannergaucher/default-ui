import React from "react"
import { Link } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import Highlight, { defaultProps } from "prism-react-renderer"
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live"

import { Card, Image, P } from "./src/components"

const scope = {
  Image,
  P,
  Link,
  Card,
}

const components = {
  pre: props =>
    props.children.props.live ? (
      <div>
        <LiveProvider code={props.children.props.children} scope={scope}>
          <LivePreview
            style={{
              marginBottom: `var(--space-lg)`,
              marginTop: `var(--space-lg)`,
            }}
          />
          <LiveEditor
            style={{
              background: `var(--code-bg)`,
              fontFamily: `var(--mono)`,
              borderRadius: `var(--radius)`,
              boxShadow: `var(--elevation-2)`,
              margin: `var(--space-lg) 0`,
            }}
          />
          <LiveError
            style={{
              fontSize: `var(--text-xs)`,
              borderRadius: `var(--radius)`,
              margin: `var(--space-lg) 0`,
              boxShadow: `var(--elevation-3)`,
              color: `papayawhip`,
              background: `var(--code-bg)`,
              padding: `var(--space-sm)`,
            }}
          />
        </LiveProvider>
      </div>
    ) : (
      <>
        <Highlight
          {...defaultProps}
          code={props.children.props.children}
          language={props.children.props.className.replace(/language-/, "")}
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, i) => (
                <div {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight>
      </>
    ),
}

export const wrapRootElement = ({ element }) => {
  return <MDXProvider components={components}>{element}</MDXProvider>
}
