package hooks;

import core.selenium.WebDriverManager;
import core.utils.RestClient;
import cucumber.api.java.After;
import cucumber.api.java.Before;

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

//    @After("@finalScenario")
//    public void clearcookies() {
//        WebDriverManager.getInstance().getWebDriver().manage().deleteAllCookies();
//    }

    @After("@finalScenario")
    public void closeTheApplication() {
        WebDriverManager.getInstance().getWebDriver().close();
    }

    @Before(order = 2, value = "@createProject")
    public void createProject() {
        RestClient rc = new RestClient();
        rc.createProject("Test Project");
    }
}
