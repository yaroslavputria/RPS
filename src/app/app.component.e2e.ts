'use strict';

describe('App', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', (done) => {
        browser.getTitle()
            .then((r) => {
                let result = 'RPS';
                expect(r).toEqual(result);
                done();
            });
    });

    // it('shouldn\'t have header', () => {
    //     let subject = element(by.tagName('h1')).isPresent();
    //     expect(subject).toEqual(false);
    // });

    // it('should have correct header text', () => {
    //     let subject = element(by.tagName('h1'));
    //     expect(subject.getText()).toBe('My Angular2 + TypeScript App');
    // });

    // it('should have footer', () => {
    //     let subject = element(by.tagName('footer')).isPresent();
    //     expect(subject).toEqual(true);
    // });
});
