import { StormBoardPage } from './app.po';

describe('storm-board App', function() {
  let page: StormBoardPage;

  beforeEach(() => {
    page = new StormBoardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
