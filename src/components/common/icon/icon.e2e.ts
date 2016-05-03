describe('App', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('ge-icon should have the same height with the parent node, ge-button', done => {
    const subject = element(by.css('ge-header ge-button')).getCssValue('height');
    const result = element(by.css('ge-header ge-button ge-icon')).getCssValue('height');
    Promise.all([subject, result]).then(values => { // values => [subject, result]
      expect(values[0]).toEqual(values[1]);
      done();
    });
  });
});
