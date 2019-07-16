import { TestimoniesModule } from './testimonies.module';

describe('TestimoniesModule', () => {
    let bsComponentModule: TestimoniesModule;

    beforeEach(() => {
        bsComponentModule = new TestimoniesModule();
    });

    it('should create an instance', () => {
        expect(bsComponentModule).toBeTruthy();
    });
});
