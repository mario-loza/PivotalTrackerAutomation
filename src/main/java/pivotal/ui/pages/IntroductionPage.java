package pivotal.ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.concurrent.TimeUnit;

/**
 * Introduction Page.
 */
public class IntroductionPage extends BasePage {

    public static final int DURATION = 20;
    @FindBy(xpath = "//input")
    private WebElement projectNameTextBox;

    @FindBy(xpath = "//button[@type=\"submit\"]")
    private WebElement createProjectButton;

    @Override
    public void waitUntilPageObjectIsLoaded() {

        wait.until(ExpectedConditions.visibilityOf(projectNameTextBox));
    }

    /**
     * First Project.
     *
     * @param projectName name of the Project
     * @return ProjectDetailPage
     */
    public ProjectDetailPage firstProject(final String projectName) {
        setFirstProjectName(projectName);
        clickCreateProjectBtn();
        wait.withTimeout(DURATION, TimeUnit.SECONDS).until(ExpectedConditions.urlContains("/n/projects"));
        return new ProjectDetailPage();
    }

    /**
     * Click create Project.
     */
    private void clickCreateProjectBtn() {
        createProjectButton.click();
    }

    /**
     * First Project Name.
     *
     * @param projectName the project name.
     */
    private void setFirstProjectName(final String projectName) {
        projectNameTextBox.sendKeys(projectName);
    }

}

