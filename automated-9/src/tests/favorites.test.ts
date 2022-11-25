import { Browser, Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { PageLoadStrategy } from 'selenium-webdriver/lib/capabilities';
import FavoritesPage from './pages/FavoritesPage';
import HomePage from './pages/HomePage';

import ItemPage from './pages/ItemPage';

const ITEM_PAGE_LINK =
  'https://markformelle.by/catalog/zhenshchinam/mf-life/bryuki-leginsy/182458-8533-1050/';

describe('Favorites tests', () => {
  let driver: WebDriver;

  beforeEach(async () => {
    driver = await new Builder()
      .forBrowser(Browser.EDGE)
      .withCapabilities(
        Capabilities.edge().setPageLoadStrategy(PageLoadStrategy.NORMAL)
      )
      .build();
  });

  it('check if item is added to favorites', async () => {
    const homePage = new HomePage(driver);
    await homePage.init();
    const itemPage = await homePage.goToFirstItemPage();

    // const itemPage = new ItemPage(driver);
    // await itemPage.init(ITEM_PAGE_LINK);
    await itemPage.addThisToCart();

    const favoritesPage = new FavoritesPage(driver);
    await favoritesPage.init();

    const hasItems = await favoritesPage.hasElementsInList();

    expect(hasItems).toBeTruthy();
  });

  afterEach(async () => {
    await driver.quit();
  });
});
