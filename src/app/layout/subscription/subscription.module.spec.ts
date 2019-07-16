import { SubscriptionModule } from './subscription.module';

describe('SubscriptionModule', () => {
  let gridModule: SubscriptionModule;

  beforeEach(() => {
    gridModule = new SubscriptionModule();
  });

  it('should create an instance', () => {
    expect(gridModule).toBeTruthy();
  });
});
