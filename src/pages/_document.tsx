import NextDocument, { Html } from "next/document"
import React from "react"
import { ServerStyleSheet as StyledComponentSheets } from "styled-components"

import type { DocumentContext } from "next/document"

export default class Document extends NextDocument {
  static async getInitialProps(context: DocumentContext) {
    const styledComponentSheet = new StyledComponentSheets()
    const originalRenderPage = context.renderPage

    try {
      context.renderPage = () =>
        originalRenderPage({
          enhanceApp:
            (App) =>
            ({ Component, router, pageProps }) =>
              styledComponentSheet.collectStyles(
                <App
                  Component={Component}
                  router={router}
                  pageProps={pageProps}
                />,
              ),
        })

      const initialProps = await NextDocument.getInitialProps(context)

      return {
        ...initialProps,
        styles: [
          <Html key="styles" lang="ja">
            {initialProps.styles}
            {styledComponentSheet.getStyleElement()}
          </Html>,
        ],
      }
    } finally {
      styledComponentSheet.seal()
    }
  }
}
