/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import type { CreateFileRoute, FileRoutesByPath } from '@tanstack/react-router'

import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexRouteImport } from './routes/index'
import { Route as GamesGameSlugRouteImport } from './routes/games.$gameSlug'

const IndexRoute = IndexRouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRouteImport,
} as any)
const GamesGameSlugRoute = GamesGameSlugRouteImport.update({
  id: '/games/$gameSlug',
  path: '/games/$gameSlug',
  getParentRoute: () => rootRouteImport,
} as any)

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/games/$gameSlug': typeof GamesGameSlugRoute
}
export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/games/$gameSlug': typeof GamesGameSlugRoute
}
export interface FileRoutesById {
  __root__: typeof rootRouteImport
  '/': typeof IndexRoute
  '/games/$gameSlug': typeof GamesGameSlugRoute
}
export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/games/$gameSlug'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/games/$gameSlug'
  id: '__root__' | '/' | '/games/$gameSlug'
  fileRoutesById: FileRoutesById
}
export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  GamesGameSlugRoute: typeof GamesGameSlugRoute
}

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexRouteImport
      parentRoute: typeof rootRouteImport
    }
    '/games/$gameSlug': {
      id: '/games/$gameSlug'
      path: '/games/$gameSlug'
      fullPath: '/games/$gameSlug'
      preLoaderRoute: typeof GamesGameSlugRouteImport
      parentRoute: typeof rootRouteImport
    }
  }
}

declare module './routes/index' {
  const createFileRoute: CreateFileRoute<
    '/',
    FileRoutesByPath['/']['parentRoute'],
    FileRoutesByPath['/']['id'],
    FileRoutesByPath['/']['path'],
    FileRoutesByPath['/']['fullPath']
  >
}
declare module './routes/games.$gameSlug' {
  const createFileRoute: CreateFileRoute<
    '/games/$gameSlug',
    FileRoutesByPath['/games/$gameSlug']['parentRoute'],
    FileRoutesByPath['/games/$gameSlug']['id'],
    FileRoutesByPath['/games/$gameSlug']['path'],
    FileRoutesByPath['/games/$gameSlug']['fullPath']
  >
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  GamesGameSlugRoute: GamesGameSlugRoute,
}
export const routeTree = rootRouteImport
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()
