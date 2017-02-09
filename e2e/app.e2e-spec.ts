import { PricerPage } from './app.po';

describe('pricer App', function() {
  let page: PricerPage;

  beforeEach(() => {
    page = new PricerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
