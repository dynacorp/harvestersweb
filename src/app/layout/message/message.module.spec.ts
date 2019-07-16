import { MessageModule } from './message.module';

describe('MessageModule', () => {
    let chartsModule: MessageModule;

    beforeEach(() => {
        chartsModule = new MessageModule();
    });

    it('should create an instance', () => {
        expect(chartsModule).toBeTruthy();
    });
});
