const {test, expect} = require('@playwright/test');

test('Client App Login', async ({page}) =>
{

        const products = page.locator(".card-body");
        const productName = "ZARA COAT 3";
        await page.goto("https://rahulshettyacademy.com/client");
        await page.locator("#userEmail").fill("automationPlaywright0001@gmail.com");
        await page.locator("#userPassword").fill("Automation@001");
        await page.locator("[value='Login']").click();
        await page.waitForLoadState('networkidle');
        const title = page.locator(".card-body b").allTextContents();
        console.log(title);
        const count = await products.count()
        for(let i=0;i<count; ++i){
                if(await products.nth(i).locator("b").textContent() === productName){
                        await products.nth(i).locator("text=Add to Cart").click();
                        break;
                }

        }
        //go to cart
        await page.locator("[routerlink*='cart']").click();

        //Wait for items to load in the cart
        await page.locator("div li").first().waitFor();

        //validate the item is added
        const bool = await page.locator("h3:has-text('ZARA COAT 3')").isVisible();
        expect(bool).toBeTruthy();

        //Click On Checkout
        await page.locator("text=Checkout").click();
        await page.locator("[class='input txt']").first().fill("8962");
        //CSS---> [attribute='value']
        await page.locator("[class='input txt']").last().fill("Saumya Singh");

        //apply coupon
        await page.locator("[name ='coupon']").fill("rahulshettyacademy");
        await page.locator("[class ='btn btn-primary mt-1']").click();

        //validate email id
         const email = await page.locator("[class*='text-validated ng-untouched']").inputValue();
         const email1 = await page.locator("[class*='text-validated ng-untouched']").innerText();
         console.log(email);
         console.log(email1);

        
        await page.pause();
});