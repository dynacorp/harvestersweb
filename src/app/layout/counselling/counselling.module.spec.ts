import { CounsellingModule } from './counselling.module';

describe('PrayerRequestModule', () => {
    let blankPageModule: CounsellingModule;

    beforeEach(() => {
        blankPageModule = new CounsellingModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
