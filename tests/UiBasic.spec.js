const {test, expect} = require('@playwright/test');

test('First Plyawright Test Case', async ({browser})=>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        console.log(await page.title());
        await page.locator('#username').fill("saumyaSingh");
        await page.locator("[type='password']").fill("learning");
        await page.locator("#signInBtn").click();
        var errorText = await page.locator("[style*='block']").textContent();
        console.log(errorText);

        //assertion
        await expect(page.locator("[style*='block']")).toContainText('Incorrect');




});

test('Page Playwright Test', async ({page})=> {

    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});