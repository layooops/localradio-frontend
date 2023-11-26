import type { Event as LifecycleEvent } from '@strapi/database/lib/lifecycles';

const MIN_QUANTITY = 0;

const shopItemLifeCycles = {
  beforeUpdate(event: LifecycleEvent) {
    const { data: eventData } = event.params;
    if (eventData.quantity <= MIN_QUANTITY) {
      eventData.soldout = true;
    }
    if (eventData.quantity > MIN_QUANTITY) {
      eventData.soldout = false;
    }
  },
};

export default shopItemLifeCycles;
