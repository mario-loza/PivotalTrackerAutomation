package steps;

import cucumber.api.java.en.Given;
import pivotal.ui.LoginPage;
import pivotal.ui.PageTransporter;

public class LoginSteps {
    PageTransporter pageTransporter = PageTransporter.getInstance();

    //pages.
    private LoginPage loginPage;

    @Given("^I log in with username \"([^\"]*)\" and password \"([^\"]*)\"$")
    public void LogIn(final String userName, final String password){
        loginPage = pageTransporter.navigateToLoginPage();
        loginPage.login(userName, password);

    }
}
