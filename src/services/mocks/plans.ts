import { IPlan } from './plans.d'

export const plans: IPlan[] = [
   {
      id: 1,
      title: 'Free forever',
      price: 0,
      features: ['Email support', 'Available server on time', '5GB of storage', 'Shared RAM'],
   }, {
      id: 2,
      title: 'Startup',
      price: 99,
      features: ['24/7 chat support', 'Dedicated server', '4TB of storage', '$0.25/GB of extra storage', 'Up to 64GB of RAM'],
   }, {
      id: 3,
      title: 'Enterprise',
      price: 199,
      features: ['24/7 chat support', 'Dedicated server', '20TB of storage', '$0.10/GB of extra storage', 'Up to 128GB of RAM', '500GB email server', 'Isolated network'],
   }, {
      id: 4,
      title: 'Conglomerate',
      price: 499,
      features: ['24/7 chat support', 'Dedicated server', 'Unlimited storage', 'Up to 1TB of RAM', 'Unlimited email server', 'Isolated network'],
   },
]
