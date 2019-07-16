import { CommentsModule } from './comments.module';

describe('CommentsModule', () => {
    let bsElementModule: CommentsModule;

    beforeEach(() => {
        bsElementModule = new CommentsModule();
    });

    it('should create an instance', () => {
        expect(bsElementModule).toBeTruthy();
    });
});
