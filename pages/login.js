//const test_data = require('../test-data/test_data.json');

class LoginPage{
    
    constructor(page){
        this.page = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
    }

    async gotoLoginPage(){ 
    await this.page.goto('https://www.saucedemo.com/');
   
   }

   async login(){
    await this.page.fill(this.usernameInput, process.env.Username);
    await this.page.fill(this.passwordInput, process.env.Password);
    await this.page.waitForTimeout(2000);
    await this.page.click(this.loginButton);
   }
}
module.exports = LoginPage