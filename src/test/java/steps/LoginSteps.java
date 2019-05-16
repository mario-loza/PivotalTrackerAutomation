package steps;

import core.utils.Logs;
import org.apache.log4j.Logger;
import pivotal.utils.Setup;
import cucumber.api.java.en.Given;
import pivotal.ui.pages.LoginPage;
import pivotal.ui.pages.PageTransporter;

public class LoginSteps {
    /** It creates to follow up the instruction of the class*/
    private Logger log = Logs.getInstance().getLog();

    PageTransporter pageTransporter = PageTransporter.getInstance();

    //pages.
    private LoginPage loginPage;
    @Given("^I log in with username and password$")
    public void LogIn(){
        log.info("Running step I log in with username and password.");
        loginPage = pageTransporter.navigateToLoginPage();
        loginPage.login(Setup.getInstance().username , Setup.getInstance().password);
    }
}
