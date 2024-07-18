const test_data = require('../test-data/test_data.json');
import { test, expect } from '@playwright/test';

class ProductPage{
    constructor(page){
        this.page = page;
        this.addCartButton = '#add-to-cart-sauce-labs-backpack';
        this.productView = '#item_4_title_link';
        this.cartContainer = '#shopping_cart_container';
        this.menuButton = '#react-burger-menu-btn';
        this.logoutButton = '#logout_sidebar_link';
        this.verifyProduct = '#back-to-products'
    }

    async addProductToCart() {
        await this.page.click(this.addCartButton);
    }
    
    async viewProductToLink() {
        await this.page.click(this.productView);

        const cardSelector = this.verifyProduct; 
        // Wait for the card element to be visible
        await this.page.waitForSelector(cardSelector);
      
        const headingElement = await this.page.textContent(cardSelector);

        expect(headingElement).toBe(test_data.Product);
        // Alternatively, you can use a regex to verify part of the text
        //expect(headingElement).toMatch(test_data.Product);
    }

    async addcartContainer() {
        await this.page.click(this.cartContainer);
    }

    async clickMenuBar() {
        await this.page.click(this.menuButton);
    }

    async clickLogoutButton() {
        await this.page.click(this.logoutButton);
    } 
    
}
module.exports = ProductPage