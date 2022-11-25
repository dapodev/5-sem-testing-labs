import { By, until, WebDriver } from 'selenium-webdriver';

const ADD_TO_FAV_BUTTON_CLASSNAME = 'js-btn-to-fav--cat';

class ItemPage {
  private addToFavoritesButtonLocator: By = By.className(
    ADD_TO_FAV_BUTTON_CLASSNAME
  );

  constructor(private driver: WebDriver) {}

  async init(url: string): Promise<WebDriver> {
    await this.driver.get(url);
    return this.driver;
  }

  async addThisToCart(): Promise<WebDriver> {
    await this.driver.sleep(3000);
    const addToFavoritesButton = await this.driver.findElement(
      this.addToFavoritesButtonLocator
    );
    await addToFavoritesButton.click();

    return this.driver;
  }
}

export default ItemPage;
