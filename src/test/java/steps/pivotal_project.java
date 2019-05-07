package steps;

import core.selenium.WebDriverManager;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.runtime.junit.Assertions;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import core.selenium.WebDriverManager;
import cucumber.api.java.en.Given;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import pivotal.ui.ProjectDashboardPage;

import java.util.List;
import java.util.concurrent.TimeUnit;


public class pivotal_project {

   WebDriver driver;

    @Given("^I Open the Pivotal Application$")
    public void openTheApplication() {
        driver = WebDriverManager.getInstance().getWebDriver();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().window().maximize();
        driver.get("https://www.pivotaltracker.com");
    }

    @Given("^I login into the Pivotal Application$")
    public void loginIntoTheApplication() {
        driver.findElement(By.xpath("//div[@class=\"header__lg\"]/a[contains(text(),\"Log in\") and contains(@class,\"signin\")]")).click();
        driver.findElement(By.id("credentials_username")).sendKeys("melvi.caballero@gmail.com");
        driver.findElement(By.name("action")).click();
        driver.findElement(By.id("credentials_password")).sendKeys("control123*");
        driver.findElement(By.name("action")).click();
    }

    @When("^I create a project$")
    public void createProject() {
        driver.findElement(By.id("create-project-button")).click();
        driver.findElement(By.name("project_name")).sendKeys("Project 1");
        driver.findElement(By.xpath("//div[@class=\"tc-account-selector__header\"]")).click();
        driver.findElement(By.xpath("//ul[@class=\"tc-account-selector__option-list\"]/li[@class=\"tc-account-selector__option-account\"][1]")).click();
        driver.findElement(By.xpath("//button[text()=\"Create\"]")).click();
    }

    @When("^I navigate to the Pivotal Dashboard page$")
    public void gotoDashboard() {
        //driver.get("https://www.pivotaltracker.com/dashboard");
        //driver.findElement(By.xpath("//a[@href=\"/dashboard\"]")).click();
        //WebDriverWait wait=new WebDriverWait(driver, 15);
        //wait.until(ExpectedConditions.elementToBeClickable(By.xpath("//img[@alt=\"tracker logo\"]")));
        //WebElement gear = wait.until(ExpectedConditions.   By.xpath("//img[@alt=\"tracker logo\"]")));
        //gear.click();
        try{
            Thread.sleep(15000);
        } catch (Exception ex)
        {}
        driver.findElement(By.xpath("//img[@alt=\"tracker logo\"]")).click();
    }

    @Then("^The project name should be displayed$")
    public void projectIsDisplayed() {
     List<WebElement> projects = driver.findElements(By.xpath("//a[@data-aid=\"project-name\" and text()=\"Project 1\"]"));
     Assert.assertTrue(projects.size() >0 );
    }
}


