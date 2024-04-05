import Bestseller from './bestseller/bestseller';
import Introduction from './introduction/introduction';
import NewArrival from './new-arrivals/new-arrival';

export const widgets = [
  {
    id: 1,
    value: 'introduction',
    component: <Introduction />,
    isShown: true,
    title: 'Introduction',
  },
  {
    id: 2,
    value: 'new-arrival',
    component: <NewArrival />,
    isShown: true,
    title: 'New Arrival',
  },
  {
    id: 3,
    value: 'bestseller',
    component: <Bestseller />,
    isShown: true,
    title: 'Bestseller',
  },
];
