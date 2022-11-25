import { By, WebDriver } from 'selenium-webdriver';

const ITEM_TITLE_LINK_CLASSNAME = 'catalog-name__link';

class SearchResultPage {
  private itemsLinksLocator: By = By.className(ITEM_TITLE_LINK_CLASSNAME);

  constructor(private driver: WebDriver) {}

  async isResultMatches(value: string): Promise<boolean> {
    const searchResultElements = await this.driver.findElements(
      this.itemsLinksLocator
    );

    const matches = await Promise.all(
      searchResultElements.map(async (el) => {
        const innerText = await el.getText();
        return innerText.match(value);
      })
    );

    const isAllMatched = matches.every((match) => match);

    return isAllMatched;
  }
}

export default SearchResultPage;
