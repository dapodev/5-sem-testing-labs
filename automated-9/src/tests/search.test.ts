import { Browser, Builder, Capabilities, WebDriver } from 'selenium-webdriver';
import { PageLoadStrategy } from 'selenium-webdriver/lib/capabilities';

import HomePage from './pages/HomePage';
import { TEST_CASE_INPUTS } from '../constants';

describe('Search tests', () => {
  let driver: WebDriver;

  beforeEach(async () => {
    driver = await new Builder()
      .forBrowser(Browser.EDGE)
      .withCapabilities(
        Capabilities.edge().setPageLoadStrategy(PageLoadStrategy.NORMAL)
      )
      .build();
  });

  it('search by "худи"', async () => {
    const homePape = new HomePage(driver);
    await homePape.init();

    const searchResultPage = await homePape.searchFor(
      TEST_CASE_INPUTS.testCaseSearchValueHoodi
    );

    const hasTotalMatch = await searchResultPage.isResultMatches(
      TEST_CASE_INPUTS.testCaseSearchValueHoodi
    );

    expect(hasTotalMatch).toBeTruthy();
  });

  it('search by "майка"', async () => {
    const homePape = new HomePage(driver);
    await homePape.init();

    const searchResultPage = await homePape.searchFor(
      TEST_CASE_INPUTS.testCaseSearchValueShirt
    );

    const hasTotalMatch = await searchResultPage.isResultMatches(
      TEST_CASE_INPUTS.testCaseSearchValueShirt
    );

    expect(hasTotalMatch).toBeTruthy();
  });

  afterEach(async () => {
    await driver.quit();
  });
});
