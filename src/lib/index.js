import take from 'lodash/take';
import sortBy from 'lodash/sortBy';
import filter from 'lodash/filter';

export const isEvent = event =>
  event.node.frontmatter.templateKey === 'eventos';

export const isBlog = page => page.node.frontmatter.templateKey === 'blog';

export const isLater = o => new Date(o.node.frontmatter.date) > new Date();

export const takeThreeClosest = arr =>
  take(sortBy(arr, o => o.node.frontmatter.date), 3);
