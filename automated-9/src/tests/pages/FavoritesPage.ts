import { By, until, WebDriver } from 'selenium-webdriver';

import { UrlLink } from '../../constants';

const FAVORITES_CARD_ITEM_CLASSNAME = 'whish-item';

class FavoritesPage {
  private pageUrl = UrlLink.WEBSITE_FAVORITES;
  private favoritesListItemLocator: By = By.className(
    FAVORITES_CARD_ITEM_CLASSNAME
  );

  constructor(private driver: WebDriver) {}

  async init(): Promise<WebDriver> {
    await this.driver.get(this.pageUrl);
    await this.driver.wait(
      until.elementsLocated(this.favoritesListItemLocator)
    );
    return this.driver;
  }

  async hasElementsInList(): Promise<boolean> {
    const favorites = await this.driver.findElements(
      this.favoritesListItemLocator
    );
    return favorites.length > 0;
  }
}

export default FavoritesPage;
