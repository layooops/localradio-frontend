import type { Event as LifecycleEvent } from '@strapi/database/lib/lifecycles';
import slugify from 'slugify';

const getDate = (date: Date) => {
  return new Date(date).toLocaleDateString('en-GB');
};

const mixLifeCycles = {
  async beforeCreate(event: LifecycleEvent) {
    const { data: dateData } = event.params;
    if (dateData.date && dateData.name) {
      const date = getDate(dateData.date);
      dateData.slug = slugify(dateData.name + '-' + date, { lower: true });
    } else if (dateData.updatedAt) {
      const date = getDate(dateData.updatedAt);
      dateData.slug = dateData && slugify(dateData.name + '-' + date, { lower: true });
    }
  },
};

export default mixLifeCycles;
