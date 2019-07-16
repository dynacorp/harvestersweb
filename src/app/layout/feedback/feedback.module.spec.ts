import { FeedbackModule } from './feedback.module';

describe('FeedbackModule', () => {
    let blankPageModule: FeedbackModule;

    beforeEach(() => {
        blankPageModule = new FeedbackModule();
    });

    it('should create an instance', () => {
        expect(blankPageModule).toBeTruthy();
    });
});
