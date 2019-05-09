package pivotal.ui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class IntroductionPage extends BasePage {

    @FindBy(xpath="//input")
    private WebElement createProyectForm;

    @FindBy(xpath = "//input")
    private WebElement projectNameTextBox;

    @FindBy(xpath = "//button[@type=\"submit\"]")
    private WebElement createProjectButton;

    @Override
    public void waitUntilPageObjectIsLoaded() {

        wait.until(ExpectedConditions.visibilityOf(createProyectForm));
    }

    public ProjectsPage firstProject(String projectName) {
        setFirstProjectName(projectName);
        clickCreateProjectBtn();
        return new ProjectsPage();
    }



    private void clickCreateProjectBtn() {
        createProjectButton.click();
    }

    private void setFirstProjectName(String projectName) {
        projectNameTextBox.sendKeys(projectName);
    }

}

