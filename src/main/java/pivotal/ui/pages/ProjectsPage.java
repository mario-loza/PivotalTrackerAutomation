package pivotal.ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.CreateProjectPopup;
import pivotal.ui.pages.BasePage;

import java.util.List;

public class ProjectsPage extends BasePage {

    @FindBy(css = ".project_name")
    private WebElement lastproject;

    @FindBy(css = ".wrapper h1")
    private WebElement labelProjectsH1;

    @FindBy(xpath = "//a[contains(.,'+ Create Project')]")
    private WebElement createProjectLink;

    public CreateProjectPopup pressCreateProjectLink() {
        createProjectLink.click();
        return new CreateProjectPopup();
    }

    public boolean projectNameIsListed(String projectName) {
        List<WebElement> projects = driver.findElements(By.xpath("//a[@class=\"project_name\" and text()=\""+projectName+"\"]"));
        return projects.size() > 0;
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createProjectLink));
    }
}

