import { PrayerRequestModule } from './prayer-request.module';

describe('PrayerRequestModule', () => {
    let blankPageModule: PrayerRequestModule;

    beforeEach(() => {
        blankPageModule = new PrayerRequestModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
