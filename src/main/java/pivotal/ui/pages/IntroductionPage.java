package pivotal.ui.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.concurrent.TimeUnit;

public class IntroductionPage extends BasePage {

    @FindBy(xpath = "//input")
    private WebElement projectNameTextBox;

    @FindBy(xpath = "//button[@type=\"submit\"]")
    private WebElement createProjectButton;

    @Override
    public void waitUntilPageObjectIsLoaded() {

        wait.until(ExpectedConditions.visibilityOf(projectNameTextBox));
    }

    public ProjectDetailPage firstProject(String projectName) {
        setFirstProjectName(projectName);
        clickCreateProjectBtn();
        wait.withTimeout(20, TimeUnit.SECONDS).until(ExpectedConditions.urlContains("/n/projects"));
        return new ProjectDetailPage();
    }


    private void clickCreateProjectBtn() {
        createProjectButton.click();
    }

    private void setFirstProjectName(String projectName) {
        projectNameTextBox.sendKeys(projectName);
    }

}

