package pivotal.ui.components;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.entities.Project;
import pivotal.ui.pages.BasePage;

import java.util.concurrent.TimeUnit;

/**
 * Created by Melvi Caballero.
 * Class to create a project from Popup component of pivotal tracker.
 */
public class CreateProjectPopup extends BasePage {

    @FindBy(name = "project_name")
    private WebElement projectNameTextBox;

    @FindBy(xpath = "//div[@class=\"tc-account-selector__header\"]")
    private WebElement accountDropDown;

    @FindBy(xpath = "//ul[@class=\"tc-account-selector__option-list\"]/li[@class=\"tc-account-selector__option-account\"][1]")
    private WebElement getAccountDropDownFirstOption;

    @FindBy(xpath = "//input[@value=\"public\"]")
    private WebElement projectTypePublic;

    @FindBy(xpath = "//input[@value=\"private\"]")
    private WebElement projectTypePrivate;

    @FindBy(xpath = "//button[text()=\"Create\"]")
    private WebElement createButton;

    @FindBy(xpath = "//span[text()=\"The project name you entered is already taken.\"]")
    private WebElement errorMessage;

    @Override
    public void waitUntilPageObjectIsLoaded() {

    }

    /**
     * Set a project name in the text box.
     * @param projectName the name with the project was creating.
     */
    public void setProjectNameTextBox(String projectName) {

        projectNameTextBox.sendKeys(projectName);
    }

    /**
     * This method did press Account in the Dropdown component when a new project is being created.
     */
    public void pressAccountDropdown() {
        accountDropDown.click();
    }

    /**
     * This method is for select the first account in the list of accounts.
     */
    public void selectaccountDropdownFirstOption() {

        wait.withTimeout(2, TimeUnit.SECONDS).until(ExpectedConditions.elementToBeClickable(getAccountDropDownFirstOption));
        getAccountDropDownFirstOption.click();
    }

    /**
     * This method is for check the privacy of project like public.
     */
    public void setProjectTypePublic() {
        projectTypePublic.click();
    }

    /**
     * This method is for check the privacy of project like private.
     */
    public void setProjectTypePrivate() {
        projectTypePrivate.click();
    }

    /**
     * this method is for press the create project button.
     */
    public void pressCreateButton() {
        createButton.click();
    }

    /**
     * Verify that a error mmesage when the time to wait is over.
     * @return true is the time wait is enough else false.
     */
    public boolean isErrorMessage() {
        try {
            wait.withTimeout(2, TimeUnit.SECONDS).until(ExpectedConditions.visibilityOf(errorMessage));
        } catch (Exception e) {
            return false;
        }
        return true;
    }

    /**
     * Create a new project when user has at least 1 project.
     * @param project all main attributes for a create a new project.
     * @param waitSuccess time to wait is enough.
     */
    public void createNewProject(Project project, Boolean waitSuccess) {
        setProjectNameTextBox(project.getName());
        pressAccountDropdown();
        selectaccountDropdownFirstOption();
        if (project.getPrivacy().equals("Public")) {
            setProjectTypePublic();
        } else {
            setProjectTypePrivate();
        }
        pressCreateButton();
        if (waitSuccess) {
            wait.withTimeout(10, TimeUnit.SECONDS).until(ExpectedConditions.urlContains("/n/projects"));
        }
    }
}

