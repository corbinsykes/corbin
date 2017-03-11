import { CorbinPage } from './app.po';

describe('corbin App', () => {
  let page: CorbinPage;

  beforeEach(() => {
    page = new CorbinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
