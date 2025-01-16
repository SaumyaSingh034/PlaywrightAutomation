const {test} = require('@playwright/test');

test('First Plyawright Test Case', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");


});

test('Page Playwright Test', async ({page})=> {

    await page.goto("https://google.com");

});