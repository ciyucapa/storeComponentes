

/**
 * Warning: This is an autogenerated file.
 *
 * Changes in this file won't take effect and will be overwritten
 */


// Operation related types
export type ServerSearchPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type ServerSearchPageQueryQuery = { cmsSeo: Maybe<{ seo: Maybe<{ siteMetadata: Maybe<{ titleTemplate: Maybe<string>, title: Maybe<string>, description: Maybe<string> }> }> }> };


// Query Related Code

export const ServerSearchPageQuery = {
  query: process.env.NODE_ENV === 'production' ? undefined : "query ServerSearchPageQuery {\n  cmsSeo {\n    seo {\n      siteMetadata {\n        titleTemplate\n        title\n        description\n      }\n    }\n  }\n}\n",
  sha256Hash: "3d4c0794f0e74455d5130980789e99a4306da93f75d236a2416a159f11e57cca",
  operationName: "ServerSearchPageQuery",
}
