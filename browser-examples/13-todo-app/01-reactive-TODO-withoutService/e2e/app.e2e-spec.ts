import { SimpleToDoPage } from './app.po';

describe('simple-to-do App', () => {
  let page: SimpleToDoPage;

  beforeEach(() => {
    page = new SimpleToDoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
