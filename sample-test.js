const webdriver = require('selenium-webdriver');
const { By } = require('selenium-webdriver');
const assert = require('assert');
var rando = require('random-number-in-range')

// Input capabilities
let capabilities1 = {
  'os_version' : 'Catalina',
  'resolution' : '1920x1080',
  'browserName' : 'Chrome',
  'browser_version' : '99.0',
  'os' : 'OS X',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities2 = {
  'os_version' : '11',
  'resolution' : '1920x1080',
  'browserName' : 'Chrome',
  'browser_version' : 'latest',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities3 = {
  'os_version' : '11',
  'resolution' : '1920x1080',
  'browserName' : 'Chrome',
  'browser_version' : '96.0',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities4 = {
  'os_version' : '10',
  'resolution' : '1920x1080',
  'browserName' : 'Chrome',
  'browser_version' : 'latest',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities5 = {
  'os_version' : '10',
  'resolution' : '1920x1080',
  'browserName' : 'Chrome',
  'browser_version' : 'latest',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities6 = {
  'os_version' : '8',
  'resolution' : '1920x1080',
  'browserName' : 'Chrome',
  'browser_version' : '98.0',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities7 = {
  'os_version' : '11',
  'resolution' : '1920x1080',
  'browserName' : 'Chrome',
  'browser_version' : '99.0',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities8 = {
  'os_version' : '11',
  'resolution' : '1920x1080',
  'browserName' : 'Firefox',
  'browser_version' : 'latest',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities9 = {
  'os_version' : '11',
  'resolution' : '1920x1080',
  'browserName' : 'Firefox',
  'browser_version' : 'latest-beta',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}

let capabilities10 = {
  'os_version' : '11',
  'resolution' : '1920x1080',
  'browserName' : 'Edge',
  'browser_version' : 'latest',
  'os' : 'Windows',
  'name': 'BStack-[NodeJS] Sample Test', // test name
  'build': 'BStack Build Number 1' // CI/CD job or build name
}



async function runTestWithCaps () {
  num = rando(1, 10);
  let cap = 0;
  console.log('CAPABILITY is' + num);
  switch (num) {
    case 1:
      cap = capabilities1;
      console.log('CAPABILITY is' + num);
      break;
    case 2:
      cap = capabilities2;
      console.log('CAPABILITY is' + num);
      break;
    case 3:
      cap = capabilities3;
      console.log('CAPABILITY is' + num);
      break;
    case 4:
      cap = capabilities4;
      console.log('CAPABILITY is' + num);
      break;
    case 5:
      cap = capabilities5;
      console.log('CAPABILITY is' + num);
      break;
    case 6:
      cap = capabilities6;
      console.log('CAPABILITY is' + num);
      break;
    case 7:
      cap = capabilities7;
      console.log('CAPABILITY is' + num);
      break;
    case 8:
      cap = capabilities8;
      console.log('CAPABILITY is' + num);
      break;
    case 9:
      cap = capabilities9;
      console.log('CAPABILITY is' + num);
      break;
    case 10:
      cap = capabilities10;
      console.log('CAPABILITY is' + num);
      break;}

      console.log(cap);

  let totalWait = num*1000*60;
  console.log('Wait '+totalWait+' mins before start');
    
  setTimeout(function() {
      console.log('hello world!');
   }, totalWait);
  
  console.log('Starting Test NOW')

            
  // mandeep.singh@hivehome.com
  // let driver = new webdriver.Builder().usingServer(`https://mandeepsingh_sfE4v3:x4ToZkzbesqsxDhXsxbj@hub-cloud.browserstack.com/wd/hub`).withCapabilities(cap).build();
  // mandeep.singh+alpha@hivehome.com
  // let driver = new webdriver.Builder().usingServer(`https://mandeepsingh_yM2pnO:QeqVzbYqysrq1JhP4qsF@hub-cloud.browserstack.com/wd/hub`).withCapabilities(cap).build();
  // akshay.kumar@sky.com
  //let driver = new webdriver.Builder().usingServer(`https://akshaykumar_8nTipE:yv83xVcZunkbApncJxPA@hub-cloud.browserstack.com/wd/hub`).withCapabilities(cap).build();
//     siddhart.malhotra@bt.com
//  let driver = new webdriver.Builder().usingServer(`https://siddhartmalhotra_onJkxi:emFzQ3GZ4WG4QA1TofGi@hub-cloud.browserstack.com/wd/hub`).withCapabilities(cap).build();
//ajay.kumar@bt.com
  let driver = new webdriver.Builder().usingServer(`https://ajaykumar_SJ3i4P:qkwDY9yAXjJqSdpumC6k@hub-cloud.browserstack.com/wd/hub`).withCapabilities(cap).build();
  
  await driver.manage().window().maximize();

  try{
    await driver.get("https://www.youtube.com/watch?v=1ZxhagMxmlc");
    await driver.wait(webdriver.until.titleMatches(/Youtube/i), 10000);
    await driver.wait(webdriver.until.elementLocated(By.xpath('(.//*[@class=\'yt-simple-endpoint style-scope ytd-button-renderer\'])[last()]')), 10000).click();

    for (let i = 0; i <= num; i++) {
      await driver.sleep(30000);
      await driver.wait(webdriver.until.elementLocated(By.xpath('(.//*[@class=\'style-scope ytd-toggle-button-renderer\'])[1]')), 10000).click();
      await driver.sleep(30000);
      await driver.wait(webdriver.until.elementLocated(By.xpath('(.//*[@class=\'style-scope ytd-toggle-button-renderer\'])[1]')), 10000).click();
      console.log('Waited '+i+' minute');
    }    

    // // locating product on webpage
    // const iAgree = await driver.wait(webdriver.until.elementLocated(By.xpath('//*[.=\'I agree\']')), 10000)
    // // getting name of the product when the product is visible
    // const productText =  await driver.wait(webdriver.until.elementIsVisible(productOnScreen, 10000)).getText();
    // // clicking the 'Add to cart' button
    // await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.xpath('//*[@id="1"]/div[4]'), 10000))).click();
    // // waiting until the Cart pane has been displayed on the webpage
    // await driver.wait(webdriver.until.elementIsVisible(driver.findElement(By.className('float-cart__content'), 10000)));
    // // locating product in cart
    // const productInCart = await driver.wait(webdriver.until.elementLocated(By.xpath('//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]')), 10000);
    // // getting name of the product in cart if the product is visible on web page
    // const productCartText =  await driver.wait(webdriver.until.elementIsVisible(productInCart, 10000)).getText();
    // // checking whether product has been added to cart by comparing product name
    // assert(productText === productCartText);
    // //marking the test as Passed if product has been added to the cart
    // await driver.executeScript(
    //   'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"passed","reason": "Product has been successfully added to the cart!"}}'
    // );
  } catch(e) {
    //marking the test as Failed if product has not been added to the cart
    console.log("Error:", e.message)
    await driver.executeScript(
      'browserstack_executor: {"action": "setSessionStatus", "arguments": {"status":"failed","reason": "Some elements failed to load."}}'
    );
  }
  await driver.quit();
}
runTestWithCaps();
