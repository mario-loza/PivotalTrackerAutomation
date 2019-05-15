package steps;

import pivotal.utils.Setup;
import cucumber.api.java.en.Given;
import pivotal.ui.pages.LoginPage;
import pivotal.ui.pages.PageTransporter;

public class LoginSteps {
    PageTransporter pageTransporter = PageTransporter.getInstance();

    //pages.
    private LoginPage loginPage;
    @Given("^I log in with username and password$")
    public void LogIn(){
        loginPage = pageTransporter.navigateToLoginPage();
        loginPage.login(Setup.getInstance().username , Setup.getInstance().password);
    }
}
