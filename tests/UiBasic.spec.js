const {test, expect} = require('@playwright/test');
const { error } = require('console');
const { symlinkSync } = require('fs');

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
        console.log(await page.locator(".card-title a").first().textContent());
        console.log(await page.locator(".card-title a").nth(1).textContent());
        const titles = await page.locator(".card-title a").allTextContents();
        console.log(titles);




});

test.only('UI Selectors', async ({page}) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username");
    const password = page.locator("[type='password']");
    const dropDown = page.locator("select.form-control");
    const signInBtn = page.locator("#signInBtn");
    const binkingText = page.locator("[href*='documents-request']");
    await userName.fill("rahulshettyacademy");
    await password.fill("learning");
    // await dropDown.selectOption("stud");
    // await dropDown.selectOption("teach");
    await dropDown.selectOption("consult");
   
    await page.locator("span.radiotextsty").last().click();
    await expect(page.locator("span.radiotextsty").last()).toBeChecked();
    await page.locator("#okayBtn").click();
    console.log(page.locator("span.radiotextsty").last().isChecked());
    await page.locator("#terms").click();
    await expect(page.locator("#terms")).toBeChecked();
    await page.locator("#terms").uncheck();
    expect(await page.locator("#terms").isChecked()).toBeFalsy();
    await expect(binkingText).toHaveAttribute("class","blinkingText");



    //await page.pause();

   // await signInBtn.click();


});

test.only('Child Window Handle', async ({browser})=> {
    const context = browser.newContext();
    const page = (await context).newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
    const [newPage] = Promise.all([
        (await context).waitForEvent('page'),
        documentLink.click(),

    ]);
    //newPage

    

});

test('Page Playwright Test', async ({page})=> {

    await page.goto("https://google.com");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});