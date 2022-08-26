import { nanoid } from 'nanoid';
import { BLOG, CONTACTS, HOME, VISITORS } from '../../paths';

export const navItems = [
  {
    id: nanoid(),
    href: HOME,
    title: 'Home',
  },
  {
    id: nanoid(),
    href: BLOG,
    title: 'Blog',
  },
  {
    id: nanoid(),
    href: VISITORS,
    title: 'Visitors',
  },
  {
    id: nanoid(),
    href: CONTACTS,
    title: 'Contacts',
  },
];
