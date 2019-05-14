$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/project.feature");
formatter.feature({
  "line": 1,
  "name": "Project management in Pivotal Tracker",
  "description": "",
  "id": "project-management-in-pivotal-tracker",
  "keyword": "Feature"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 42981216500,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new project the first time",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-the-first-time",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@deleteAllProject"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I navigate to Introduction page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I create a new Project from Introduction page with the name \"First Project\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the Project page should be displayed the project name",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the Dashboard page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the Projects page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I display the Projects panel from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the Projects panel should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "sign out of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToIntroductionPage()"
});
formatter.result({
  "duration": 1301220500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Project",
      "offset": 61
    }
  ],
  "location": "ProjectSteps.createFirstProjectFromIntroductionPage(String)"
});
formatter.result({
  "duration": 170896000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@type\u003d\"submit\"]\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ATO09CMMV01\u0027, ip: \u002710.28.135.30\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: d61948f08ab003bffce0a2142d77b5ce\n*** Element info: {Using\u003dxpath, value\u003d//button[@type\u003d\"submit\"]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat pivotal.ui.pages.IntroductionPage.clickCreateProjectBtn(IntroductionPage.java:32)\r\n\tat pivotal.ui.pages.IntroductionPage.firstProject(IntroductionPage.java:25)\r\n\tat steps.ProjectSteps.createFirstProjectFromIntroductionPage(ProjectSteps.java:117)\r\n\tat ✽.And I create a new Project from Introduction page with the name \"First Project\"(src/test/resources/feature/project.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 3190918300,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.id: login_type_check_form\u0027 (tried for 0 second(s) with 0 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pivotal.ui.pages.LoginPage.waitUntilPageObjectIsLoaded(LoginPage.java:27)\r\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pivotal.ui.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat pivotal.ui.pages.PageTransporter.navigateToLoginPage(PageTransporter.java:61)\r\n\tat steps.LoginSteps.LogIn(LoginSteps.java:15)\r\n\tat ✽.Given I log in with username and password(src/test/resources/feature/project.feature:3)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"login_type_check_form\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ATO09CMMV01\u0027, ip: \u002710.28.135.30\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: d61948f08ab003bffce0a2142d77b5ce\n*** Element info: {Using\u003did, value\u003dlogin_type_check_form}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pivotal.ui.pages.LoginPage.waitUntilPageObjectIsLoaded(LoginPage.java:27)\r\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pivotal.ui.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat pivotal.ui.pages.PageTransporter.navigateToLoginPage(PageTransporter.java:61)\r\n\tat steps.LoginSteps.LogIn(LoginSteps.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 20,
  "name": "Create a new project when user has at least 1 project",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-when-user-has-at-least-1-project",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@deleteAllProject"
    },
    {
      "line": 19,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I create a new Project from Project Dashboard page with the following values",
  "rows": [
    {
      "cells": [
        "Project Name",
        "Test Project1"
      ],
      "line": 23
    },
    {
      "cells": [
        "Account",
        "Untitled"
      ],
      "line": 24
    },
    {
      "cells": [
        "Project Privacy",
        "Private"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the Project page should be displayed the project name",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the Dashboard page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the Projects page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I display the Projects panel from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the Projects panel should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "sign out of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 3230053200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.id: login_type_check_form\u0027 (tried for 0 second(s) with 0 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pivotal.ui.pages.LoginPage.waitUntilPageObjectIsLoaded(LoginPage.java:27)\r\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pivotal.ui.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat pivotal.ui.pages.PageTransporter.navigateToLoginPage(PageTransporter.java:61)\r\n\tat steps.LoginSteps.LogIn(LoginSteps.java:15)\r\n\tat ✽.Given I log in with username and password(src/test/resources/feature/project.feature:3)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"login_type_check_form\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ATO09CMMV01\u0027, ip: \u002710.28.135.30\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: d61948f08ab003bffce0a2142d77b5ce\n*** Element info: {Using\u003did, value\u003dlogin_type_check_form}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pivotal.ui.pages.LoginPage.waitUntilPageObjectIsLoaded(LoginPage.java:27)\r\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pivotal.ui.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat pivotal.ui.pages.PageTransporter.navigateToLoginPage(PageTransporter.java:61)\r\n\tat steps.LoginSteps.LogIn(LoginSteps.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 37,
  "name": "Create a new project when user has at least one project from project page",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-when-user-has-at-least-one-project-from-project-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@deleteAllProject"
    },
    {
      "line": 36,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I create a new Project from Projects page with the following values",
  "rows": [
    {
      "cells": [
        "Project Name",
        "Test Project2"
      ],
      "line": 40
    },
    {
      "cells": [
        "Account",
        "Untitled"
      ],
      "line": 41
    },
    {
      "cells": [
        "Project Privacy",
        "Private"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the Project page should be displayed the project name",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the Dashboard page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the Projects page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I display the Projects panel from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the Projects panel should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "sign out of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProyectsPage(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 1590854900,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.id: login_type_check_form\u0027 (tried for 0 second(s) with 0 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pivotal.ui.pages.LoginPage.waitUntilPageObjectIsLoaded(LoginPage.java:27)\r\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pivotal.ui.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat pivotal.ui.pages.PageTransporter.navigateToLoginPage(PageTransporter.java:61)\r\n\tat steps.LoginSteps.LogIn(LoginSteps.java:15)\r\n\tat ✽.Given I log in with username and password(src/test/resources/feature/project.feature:3)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"login_type_check_form\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ATO09CMMV01\u0027, ip: \u002710.28.135.30\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: d61948f08ab003bffce0a2142d77b5ce\n*** Element info: {Using\u003did, value\u003dlogin_type_check_form}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pivotal.ui.pages.LoginPage.waitUntilPageObjectIsLoaded(LoginPage.java:27)\r\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pivotal.ui.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat pivotal.ui.pages.PageTransporter.navigateToLoginPage(PageTransporter.java:61)\r\n\tat steps.LoginSteps.LogIn(LoginSteps.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 54,
  "name": "Create a new project when user has at least one project from the top bar\u0027s projects DropDown Panel",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-when-user-has-at-least-one-project-from-the-top-bar\u0027s-projects-dropdown-panel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@deleteAllProject"
    },
    {
      "line": 53,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I create a new Project from the Projects panel from the top bar with the following values",
  "rows": [
    {
      "cells": [
        "Project Name",
        "Test Project3"
      ],
      "line": 57
    },
    {
      "cells": [
        "Account",
        "Untitled"
      ],
      "line": 58
    },
    {
      "cells": [
        "Project Privacy",
        "Private"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the Project page should be displayed the project name",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the Dashboard page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "the Projects page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I display the Projects panel from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the Projects panel should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "sign out of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectsPanel(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "status": "skipped"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 1898847700,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.id: login_type_check_form\u0027 (tried for 0 second(s) with 0 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat pivotal.ui.pages.LoginPage.waitUntilPageObjectIsLoaded(LoginPage.java:27)\r\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pivotal.ui.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat pivotal.ui.pages.PageTransporter.navigateToLoginPage(PageTransporter.java:61)\r\n\tat steps.LoginSteps.LogIn(LoginSteps.java:15)\r\n\tat ✽.Given I log in with username and password(src/test/resources/feature/project.feature:3)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"login_type_check_form\"}\n  (Session info: chrome\u003d74.0.3729.131)\n  (Driver info: chromedriver\u003d74.0.3729.6 (255758eccf3d244491b8a1317aa76e1ce10d57e9-refs/branch-heads/3729@{#29}),platform\u003dWindows NT 6.3.9600 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ATO09CMMV01\u0027, ip: \u002710.28.135.30\u0027, os.name: \u0027Windows Server 2012 R2\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.3\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 74.0.3729.6 (255758eccf3d24..., userDataDir: C:\\Users\\ADMINI~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:62196}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), rotatable: false, setWindowRect: true, strictFileInteractability: false, takesHeapSnapshot: true, takesScreenshot: true, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unexpectedAlertBehaviour: ignore, unhandledPromptBehavior: ignore, version: 74.0.3729.131, webStorageEnabled: true}\nSession ID: d61948f08ab003bffce0a2142d77b5ce\n*** Element info: {Using\u003did, value\u003dlogin_type_check_form}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat pivotal.ui.pages.LoginPage.waitUntilPageObjectIsLoaded(LoginPage.java:27)\r\n\tat pivotal.ui.pages.BasePage.\u003cinit\u003e(BasePage.java:19)\r\n\tat pivotal.ui.pages.LoginPage.\u003cinit\u003e(LoginPage.java:11)\r\n\tat pivotal.ui.pages.PageTransporter.navigateToLoginPage(PageTransporter.java:61)\r\n\tat steps.LoginSteps.LogIn(LoginSteps.java:15)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:300)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.runBackground(CucumberScenario.java:59)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:42)\r\n\tat cucumber.runtime.model.CucumberFeature.run(CucumberFeature.java:165)\r\n\tat cucumber.api.testng.TestNGCucumberRunner.runCucumber(TestNGCucumberRunner.java:63)\r\n\tat cucumber.api.testng.AbstractTestNGCucumberTests.feature(AbstractTestNGCucumberTests.java:21)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:86)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:643)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:820)\r\n\tat org.testng.internal.Invoker.invokeTestMethods(Invoker.java:1128)\r\n\tat org.testng.internal.TestMethodWorker.invokeTestMethods(TestMethodWorker.java:129)\r\n\tat org.testng.internal.TestMethodWorker.run(TestMethodWorker.java:112)\r\n\tat org.testng.TestRunner.privateRun(TestRunner.java:782)\r\n\tat org.testng.TestRunner.run(TestRunner.java:632)\r\n\tat org.testng.SuiteRunner.runTest(SuiteRunner.java:366)\r\n\tat org.testng.SuiteRunner.runSequentially(SuiteRunner.java:361)\r\n\tat org.testng.SuiteRunner.privateRun(SuiteRunner.java:319)\r\n\tat org.testng.SuiteRunner.run(SuiteRunner.java:268)\r\n\tat org.testng.SuiteRunnerWorker.runSuite(SuiteRunnerWorker.java:52)\r\n\tat org.testng.SuiteRunnerWorker.run(SuiteRunnerWorker.java:86)\r\n\tat org.testng.TestNG.runSuitesSequentially(TestNG.java:1244)\r\n\tat org.testng.TestNG.runSuitesLocally(TestNG.java:1169)\r\n\tat org.testng.TestNG.run(TestNG.java:1064)\r\n\tat org.testng.IDEARemoteTestNG.run(IDEARemoteTestNG.java:73)\r\n\tat org.testng.RemoteTestNGStarter.main(RemoteTestNGStarter.java:123)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 71,
  "name": "Create a new project with a duplicate project name",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-with-a-duplicate-project-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@deleteAllProject"
    },
    {
      "line": 70,
      "name": "@finalScenario"
    },
    {
      "line": 70,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I create a new Project from Project Dashboard page with a duplicate project name",
  "rows": [
    {
      "cells": [
        "Project Name",
        "Test Project"
      ],
      "line": 74
    },
    {
      "cells": [
        "Account",
        "Untitled"
      ],
      "line": 75
    },
    {
      "cells": [
        "Project Privacy",
        "Private"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "verify that the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.createDuplicateProjectNameFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "ProjectSteps.verifyErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
});