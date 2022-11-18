import {
  Browser,
  Builder,
  By,
  Key,
  until,
} from 'selenium-webdriver';

import {
  ITEM_TITLE_LINK_CLASSNAME,
  SEARCH_BAR_CLASSNAME,
  TEST_CASE_INPUTS,
  TEST_CASE_URLS,
  WEBSITE_URL,
} from '../constants';

describe('Search tests', () => {
  it('Search by худи', async () => {
    const driver = await new Builder().forBrowser(Browser.EDGE).build();
    try {
      await driver.get(WEBSITE_URL);

      const searchBar = await driver.findElement(
        By.className(SEARCH_BAR_CLASSNAME)
      );

      await searchBar.sendKeys(TEST_CASE_INPUTS.testCaseSearchValue, Key.ENTER);
      await driver.wait(
        until.urlContains(TEST_CASE_URLS.searchUrlPatternContain)
      );

      const foundElements = await driver.findElements(
        By.className(ITEM_TITLE_LINK_CLASSNAME)
      );

      for (const webElement of foundElements) {
        const innerElementText = await webElement.getText();
        expect(innerElementText).toMatch(TEST_CASE_INPUTS.testCaseSearchValue);
      }
    } catch (error) {
      console.log(error);
    } finally {
      await driver.quit();
    }
  }, 0);
});
