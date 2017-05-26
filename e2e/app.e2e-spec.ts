<<<<<<< HEAD
import { AzCliPage } from './app.po';

describe('az-cli App', () => {
  let page: AzCliPage;

  beforeEach(() => {
    page = new AzCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
=======
import { AzCliPage } from './app.po';

describe('az-cli App', () => {
  let page: AzCliPage;

  beforeEach(() => {
    page = new AzCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
>>>>>>> 64d67aca73e9be188c2c2b31073cc8a07ac31205
