package pivotal.ui.pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.components.CreateProjectPopup;

import java.util.List;

/**
 * ProjectsPage.
 */
public class ProjectsPage extends BasePage {

    @FindBy(css = ".project_name")
    private WebElement lastproject;

    @FindBy(css = ".wrapper h1")
    private WebElement labelProjectsH1;

    @FindBy(xpath = "//a[contains(.,'+ Create Project')]")
    private WebElement createProjectLink;

    /**
     * CreateProject Popup.
     *
     * @return CreateProjectPopup
     */
    public CreateProjectPopup pressCreateProjectLink() {
        createProjectLink.click();
        return new CreateProjectPopup();
    }

    /**
     * projectNameIsListed.
     *
     * @param projectName the project name.
     * @return boolean
     */
    public boolean projectNameIsListed(final String projectName) {
        List<WebElement> projects = driver.findElements(By.xpath("//a[@class=\"project_name\" and text()=\""
                + projectName + "\"]"));
        return projects.size() > 0;
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createProjectLink));
    }
}

