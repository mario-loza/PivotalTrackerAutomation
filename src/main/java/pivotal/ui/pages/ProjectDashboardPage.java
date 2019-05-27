package pivotal.ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.components.CreateProjectPopup;

import java.util.List;

/**
 * ProjectDashboardPage.
 */
public class ProjectDashboardPage extends BasePage {
    // private static final ACCOUNT_SELECTOR="//a[@data-aid=\"project-name\" and text()=\""+projectName+"\"]";

    @FindBy(id = "create-project-button")
    private WebElement createButton;

    @FindBy(xpath = "press-button")
    private WebElement pressButton;

//    @FindBy(xpath = "")
//    private WebElement nameProject;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createButton));
    }

    /**
     * Press CreateProject.
     *
     * @return CreateProjectPopup
     */
    public CreateProjectPopup pressCreateProjectButton() {
        createButton.click();
        return new CreateProjectPopup();
    }

    /**
     * Verify Project name is listed.
     *
     * @param projectName the project name
     * @return boolean
     */
    public boolean projectNameIsListed(final String projectName) {
        List<WebElement> projects = driver.findElements(By.xpath("//a[@data-aid=\"project-name\" and text()=\""
                + projectName + "\"]"));
        return projects.size() > 0;
    }
}
