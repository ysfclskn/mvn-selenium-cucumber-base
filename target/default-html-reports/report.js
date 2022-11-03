$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/myScenarios.feature");
formatter.feature({
  "name": "Case Study Tests",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Verify google homepage",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "verify google homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "testautomation.step_def.MyStepdefs.verifyGoogleHomepage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to find element with locator By.cssSelector: img[alt\u003d\u0027Googxle\u0027]\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-HT012NT\u0027, ip: \u0027192.168.1.58\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_345\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat testautomation.pages.HomePage.verifyGoogleLogo(HomePage.java:21)\r\n\tat testautomation.step_def.MyStepdefs.verifyGoogleHomepage(MyStepdefs.java:11)\r\n\tat ✽.verify google homepage(file:///C:/Users/ysfcl/IdeaProjects/mvn-selenium-cucumber-skeleton/src/test/resources/features/myScenarios.feature:4)\r\n",
  "status": "failed"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d107.0.5304.88)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DESKTOP-HT012NT\u0027, ip: \u0027192.168.1.58\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_345\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [3ac5475c05342a806c9082c641b36657, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 107.0.5304.88, chrome: {chromedriverVersion: 107.0.5304.62 (1eec40d3a576..., userDataDir: C:\\Users\\ysfcl\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:51522}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:51522/devtoo..., se:cdpVersion: 107.0.5304.88, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3ac5475c05342a806c9082c641b36657\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat testautomation.step_def.Hooks.teardown(Hooks.java:23)\r\n",
  "status": "failed"
});
});