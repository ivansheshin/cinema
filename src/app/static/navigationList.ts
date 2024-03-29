interface INavList {
  name: string
  path: string
}

export const authorizedNavListRoutes: INavList[] = [
  {
    name: 'Films',
    path: '/films',
  },
]

export const unAuthorizedNavListRoutes: INavList[] = [
  {
    name: 'Films',
    path: '/films',
  },
  {
    name: 'Authorization',
    path: '/auth',
  },
  {
    name: 'Registration',
    path: '/register',
  },
]
