import { By, Key, until, WebDriver } from 'selenium-webdriver';

import { UrlLink } from '../../constants';
import ItemPage from './ItemPage';
import SearchResultPage from './SearchResultPage';

const SEARCH_BAR_CLASSNAME = 'search-active-desc';
const ITEM_CARD_CLASSNAME = 'item';

class HomePage {
  private searchBarLocator: By = By.className(SEARCH_BAR_CLASSNAME);
  private itemLocator: By = By.className(ITEM_CARD_CLASSNAME);
  private pageUrl = UrlLink.WEBSITE_BASE;

  constructor(private driver: WebDriver) {}

  async init(): Promise<WebDriver> {
    await this.driver.get(this.pageUrl);
    return this.driver;
  }

  async typeSearch(value: string): Promise<WebDriver> {
    await this.driver.findElement(this.searchBarLocator).sendKeys(value);
    return this.driver;
  }

  async submitSearch(): Promise<WebDriver> {
    await this.driver.findElement(this.searchBarLocator).sendKeys(Key.ENTER);
    return this.driver;
  }

  async searchFor(value: string): Promise<SearchResultPage> {
    await this.typeSearch(value);
    await this.submitSearch();
    return new SearchResultPage(this.driver);
  }

  async goToFirstItemPage(): Promise<ItemPage> {
    const firstItem = await this.driver.findElement(this.itemLocator);
    await this.driver.wait(until.elementIsEnabled(firstItem));
    await firstItem.click();
    return new ItemPage(this.driver);
  }
}

export default HomePage;
