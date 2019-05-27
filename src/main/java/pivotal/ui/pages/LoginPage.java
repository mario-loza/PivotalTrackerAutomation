package pivotal.ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

/**
 * Created by Yesica on 07/05/2019.
 */
public class LoginPage extends BasePage {

    @FindBy(id = "login_type_check_form")
    private WebElement loginForm;

    @FindBy(id = "credentials_username")
    private WebElement userNameTextBox;

    @FindBy(css = "input[class='app_signin_action_button']")
    private WebElement nextSignInBtn;

    @FindBy(id = "credentials_password")
    private WebElement passwordTextBox;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(loginForm));
    }

    /**
     * Login.
     *
     * @param userName user name
     * @param password password
     */
    public void login(final String userName, final String password) {
        setUserName(userName);
        clickNextSignInBtn();
        setPassword(password);
        clickNextSignInBtn();
    }

    /**
     * Set Password.
     *
     * @param password the password
     */
    private void setPassword(final String password) {
        passwordTextBox.sendKeys(password);
    }

    /**
     *  click next Button.
     */
    private void clickNextSignInBtn() {
        nextSignInBtn.click();
    }

    /**
     * Set the username.
     *
     * @param userName the user name
     */
    private void setUserName(final String userName) {
        userNameTextBox.sendKeys(userName);
    }
}
