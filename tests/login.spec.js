import { test, expect } from '@playwright/test';
const LoginPage = require('../pages/login');

test('Login Swag Labs', async ({ page }) => {

  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await page.waitForTimeout(2000);
  await login.login()
  await page.waitForTimeout(2000);


  // //await page.goto(process.env.URL);
  // await page.goto('https://www.saucedemo.com/');
  // await page.waitForTimeout(2000);
  // await page.locator('#user-name').fill(process.env.Username);
  // await page.locator('#password').fill(process.env.Password);
  // // await page.locator('#user-name').fill(test_data.Username);
  // // await page.locator('#password').fill(test_data.Password);
  // await page.waitForTimeout(2000);
  // await page.locator('#login-button').click();
  // await page.waitForTimeout(2000);

  // await page.locator('#add-to-cart-sauce-labs-backpack').click();
  // await page.waitForTimeout(1000);
  // await page.locator('#item_4_title_link').click();
  // await page.waitForTimeout(1000);
  // await expect(page.getByText(test_data.Product1)).toBeVisible();  
  // await page.waitForTimeout(1000);

  // await page.waitForTimeout(2000);
  // await page.locator('#shopping_cart_container').click();
  // await page.waitForTimeout(1000);
  
  // await page.locator('#react-burger-menu-btn').click();
  // await page.waitForTimeout(1000);
  // await page.locator('#logout_sidebar_link').click();
  // await page.waitForTimeout(1000);
  // await expect(page.getByText('Swag Labs')).toBeVisible(); 
  
});