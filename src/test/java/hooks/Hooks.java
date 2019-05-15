package hooks;

import core.selenium.WebDriverManager;
import pivotal.utils.RestClient;
import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

/**
 * Created by Melvi Caballero.
 * Class to Hooks.
 */
public class Hooks {

    @Before(order = 1, value = "@deleteAllProject")
    public void beforeScenario() {
        RestClient rc = new RestClient();
        rc.deleteAllProjects();
    }

    @Before(order = 2, value = "@createProject")
    public void createProject() {
        RestClient rc = new RestClient();
        rc.createProject("Test Project");
    }

    @After("@finalScenario")
    public void closeTheApplication() {

        WebDriverManager.getInstance().getWebDriver().close();
    }

    @After
    public void embedScreenshot(Scenario scenario) {
        WebDriver driver = WebDriverManager.getInstance().getWebDriver();
        if (scenario.isFailed()) {
            try {
                byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
                scenario.embed(screenshot, "image/png");
            } catch (WebDriverException wde) {
                System.err.println(wde.getMessage());
            } catch (ClassCastException cce) {
                cce.printStackTrace();
            }
        }
    }

//    @After("@finalScenario")
//    public void clearcookies() {
//        WebDriverManager.getInstance().getWebDriver().manage().deleteAllCookies();
//    }


}
