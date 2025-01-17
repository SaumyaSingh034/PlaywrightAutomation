const {test, expect} = require('@playwright/test');
const { error } = require('console');

test('First Plyawright Test Case', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        const userName = page.locator("#username");
        const password = page.locator("[type='password']");
        const signInBtn = page.locator("#signInBtn");
        const errorLocator = page.locator("[style*='block']");
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await userName.fill("saumyaSingh");
        await password.fill("learning");
        await signInBtn.click();
        var errorText = await errorLocator.textContent();
        console.log(errorText);

        //assertion
        
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');
        console.log("**************************************")

        await userName.fill("");
        await userName.fill("rahulshettyacademy");
        await signInBtn.click();
        console.log(await page.title());




});

test('Page Playwright Test', async ({page})=> {

    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});