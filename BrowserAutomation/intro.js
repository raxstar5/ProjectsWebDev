const puppeteer = require("puppeteer");
let cPage;

console.log("before");
let BrowserOpenPromise = puppeteer.launch({
    headless:false,
    slowMo : true,
    defaultViewport:null,
    args:["--start-maximized"]
});

BrowserOpenPromise.then(function(browser){
    //currently opened tabs
    const pagesArrPromise = browser.pages();
    return pagesArrPromise; 
}).then(function(browserPages){
    cPage = browserPages[0];
    let gotoPromise = cPage.goto("https://www.google.com/");
    return gotoPromise;
}).then(function(){
    // waiting for the element to appear on the page
    let elementWaitPromise = cPage.waitForSelector("input[type='text']", {visible : true});
    return elementWaitPromise;
})
.then(function(){
    // console.log("Reached google Home Page");
    // type an element on that page-> selector
    let KeyswillBeSendPromise = cPage.type("input[type='text']", "leetcode");
    return KeyswillBeSendPromise;
}).then(function(){
    // cPage.keyboard to type special characters
    let enterWillBePressed = cPage.keyboard.press("Enter");
    return enterWillBePressed;    
}).then(function(){
    let ElementWaitPromise = cPage.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {visible : true});
    return ElementWaitPromise;
}).then(function(){
        let KeyswillBeSendPromise = cPage.click("h3.LC20lb.MBeuO.DKV0Md");
        return KeyswillBeSendPromise;
    })
    .catch(function(err){
        console.log(err);
    })



console.log("After");



