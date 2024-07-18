import { test, expect } from '@playwright/test';
const LoginPage = require('../pages/login');
const ProductPage = require('../pages/product');

test('Add Product to cart and Logout', async ({ page }) => {
    const login = new LoginPage(page);
    const product = new ProductPage(page);

    await login.gotoLoginPage();
    await page.waitForTimeout(1000);
    await login.login();
    await page.waitForTimeout(2000);

    await product.addProductToCart();
    await page.waitForTimeout(1000);

    await product.viewProductToLink();
    await page.waitForTimeout(1000);

    await product.addcartContainer();
    await page.waitForTimeout(1000);

    await product.clickMenuBar();
    await page.waitForTimeout(1000);

    await product.clickLogoutButton();
    await page.waitForTimeout(2000);

});