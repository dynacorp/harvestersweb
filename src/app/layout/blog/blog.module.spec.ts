import { BlogModule } from './blog.module';

describe('BlogModule', () => {
    let blankPageModule: BlogModule;

    beforeEach(() => {
        blankPageModule = new BlogModule();
    });

    it('should create an instance', () => {
        expect(BlogModule).toBeTruthy();
    });
});
