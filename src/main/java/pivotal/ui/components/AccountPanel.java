package pivotal.ui.components;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.pages.LoginPage;

import java.time.Duration;

public class AccountPanel extends TopBar{

    @FindBy(xpath = "//button[text()=\"Sign Out\"]")
    private WebElement signOut;

    public LoginPage pressSignOutLink() {
        signOut.click();
        return new LoginPage();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
       wait.withTimeout( Duration.ofSeconds(10)) .until(ExpectedConditions.elementToBeClickable(signOut));
    }
}
