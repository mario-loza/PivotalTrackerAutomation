package pivotal.ui.components;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.components.CreateProjectPopup;
import pivotal.ui.pages.BasePage;

import java.util.List;
import java.util.concurrent.TimeUnit;

public class ProjectsDropDownPanel extends BasePage {

    @FindBy(xpath = "//a[contains(text(),\"Create Project\")]")
    private WebElement createProjectLink;

    @FindBy(xpath = "//a[@href=\"/projects\"]")
    private WebElement showAllProjectsLink;

    public CreateProjectPopup pressCreateProjectLink() {
        createProjectLink.click();
        return new CreateProjectPopup();
    }

    public boolean projectNameIsListed(String projectName){
        List<WebElement> projects = driver.findElements(By.xpath("//span[contains(@class,\"raw_project_name\") and text()=\""+projectName+"\"]"));
        return projects.size() >0;
    }
    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.withTimeout( 10, TimeUnit.SECONDS).until(ExpectedConditions.visibilityOf(showAllProjectsLink));
    }
}
