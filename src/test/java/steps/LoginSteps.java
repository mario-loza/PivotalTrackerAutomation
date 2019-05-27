package steps;

import core.utils.Logs;
import org.apache.log4j.Logger;
import pivotal.utils.Setup;
import cucumber.api.java.en.Given;
import pivotal.ui.pages.LoginPage;
import pivotal.ui.pages.PageTransporter;

/**
 * LoginSteps.
 */
public class LoginSteps {
    private PageTransporter pageTransporter = PageTransporter.getInstance();
    /**
     * It creates to follow up the instruction of the class.
     */
    private Logger log = Logs.getInstance().getLog();
    //pages.
    private LoginPage loginPage;
    /**
     * LogIn.
     */
    @Given("^I log in with username and password$")
    public void logIn() {
        log.info("Running step I log in with username and password.");
        loginPage = pageTransporter.navigateToLoginPage();
        loginPage.login(Setup.getInstance().getUsername(), Setup.getInstance().getPassword());
    }
}
