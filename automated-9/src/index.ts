// import { assert } from 'console';
// import {
//   Browser,
//   Builder,
//   By,
//   Capabilities,
//   Key,
//   until,
// } from 'selenium-webdriver';

// import {
//   ITEM_TITLE_LINK_CLASSNAME,
//   SEARCH_BAR_CLASSNAME,
//   TEST_CASE_INPUTS,
//   TEST_CASE_URLS,
// } from './constants';
// import HomePage from './tests/pages/HomePage';

// const SearchTestCase = async () => {
//   const driver = await new Builder().forBrowser(Browser.EDGE).build();

//     const homePape = new HomePage(driver);
//     await homePape.init();

//     const searchResultPage = await homePape.searchFor(
//       TEST_CASE_INPUTS.testCaseSearchValueHoodi
//     );

//     const hasTotalMatch = await searchResultPage.isResultMatches(
//       TEST_CASE_INPUTS.testCaseSearchValueHoodi
//     );

//     // expect(hasTotalMatch).toBeTruthy();

//     await driver.quit();
// };

// SearchTestCase();
