describe('/', () => {
  beforeEach(() => {
    browser.get('/');
  });

  it('should have a title', () => {
    const subject = browser.getTitle();
    const result = 'GoEngin';
    expect(subject).toEqual(result);
  });

  it('should have <ge-header>', () => {
    const subject = element(by.css('ge-app ge-header')).isPresent();
    const result = true;
    expect(subject).toEqual(result);
  });
});
