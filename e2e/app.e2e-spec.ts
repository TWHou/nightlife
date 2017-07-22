import { NightlifePage } from './app.po';

describe('nightlife App', () => {
  let page: NightlifePage;

  beforeEach(() => {
    page = new NightlifePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
