import { GiveModule } from './give.module';

describe('GiveModule', () => {
  let tablesModule: GiveModule;

  beforeEach(() => {
    tablesModule = new GiveModule();
  });

  it('should create an instance', () => {
    expect(tablesModule).toBeTruthy();
  });
});
