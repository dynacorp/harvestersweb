import { EventsModule } from './events.module';

describe('EventsModule', () => {
    let formModule: EventsModule;

    beforeEach(() => {
        formModule = new EventsModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
