import { BaseRoute } from './types.ts';

const PublicRoutesIdentifiers = <const>[
  'HOME',
  'ERROR'
];

type PublicRoutesType = typeof PublicRoutesIdentifiers[number];

/**
 * Public route paths
 */
export const Public = {
  HOME: {
    route: '/'
  },
  ERROR: {
    route: '/error'
  }
} satisfies Record<PublicRoutesType, BaseRoute>;