import { EnquiriesModule } from './enquiries.module';

describe('EnquiriesModule', () => {
    let blankPageModule: EnquiriesModule;

    beforeEach(() => {
        blankPageModule = new EnquiriesModule();
    });

    it('should create an instance', () => {
        expect(EnquiriesModule).toBeTruthy();
    });
});
