const {test, expect} = require('@playwright/test');

test('User Register and Login', async ({browser}) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const register = page.locator(".text-reset");
    const firstName = page.locator("#firstName");
    const lastName = page.locator("#lastName");
    const email = page.locator("#userEmail");
    const mobile = page.locator("#userMobile");
    const password = page.locator("#userPassword");
    const confirmPwd = page.locator("#confirmPassword");
    const checkbox = page.locator("[type='checkbox']");
    const login = page.locator("#login");
    const accountText = page.locator(".login-wrapper.my-auto.p-5.ng-star-inserted  h1");
    const loginBtn = page.locator(".btn.btn-primary");
    const loginEmail = page.locator("#userEmail");
    const loginpassword = page.locator("#userPassword");



    await page.goto("https://rahulshettyacademy.com/client/");
    // await register.click()
    // await firstName.fill("automation");
    // await lastName.fill("learning");
    // await email.fill("automationPlaywright0001@gmail.com");
    // await mobile.fill("8737801000");
    // await password.fill("Automation@001");
    // await confirmPwd.fill("Automation@001");
    // await checkbox.click();
    // await login.click();
    // const actualText = await accountText.textContent();
    // await expect(actualText).toContain("Account Created Successfully");
    // await loginBtn.click();
    await loginEmail.fill("automationPlaywright0001@gmail.com");
    await loginpassword.fill("Automation@001");
    await login.click();
    
    //const text = await page.locator(".card-body b").first().textContent();
    //await page.waitForLoadState("networkidle");
    await page.locator(".card-body b").first().waitFor();
    const titles = await page.locator(".card-body b").allTextContents();
    console.log(titles);

});