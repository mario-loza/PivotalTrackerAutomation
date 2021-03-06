package pivotal.ui.components;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.pages.BasePage;

/**
 * Created by Melvi Caballero.
 * Class to Top Bar component.
 */
public class TopBar extends BasePage {

    @FindBy(xpath = "//button[@class=\"tc_projects_dropdown_link tc_context_name\"]")
    private WebElement projectDropDownButton;

    @FindBy(css = ".project_name")
    private WebElement lastProject;

    @FindBy(css = ".wrapper h1")
    private WebElement labelProjectsH1;

    @FindBy(xpath = "//div[@class=\"tc_header_text_logo\"]")
    private WebElement headerTextLogo;

    @FindBy(xpath = "//button[@aria-label=\"Profile Dropdown\"]")
    private WebElement currentAccount;

    /**
     * For press the create project button.
     *
     * @return the project panel.
     */
    public ProjectsDropDownPanel pressProjectButton() {
        projectDropDownButton.click();
        return new ProjectsDropDownPanel();
    }

    /**
     * For press the Account link in the Top Bar.
     *
     * @return the account panel.
     */
    public AccountPanel pressAccountPanelLink() {
        currentAccount.click();
        return new AccountPanel();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(headerTextLogo));
    }
}

