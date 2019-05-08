package pivotal.ui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ProjectsPage extends BasePage {
    // private  TopBar topBar;
//    public void getTopBar(TopBar topBar) {
//        this.topBar = topBar;
//    }

    //span[@class="raw_project_name public" and text()="project test"]
    //span[@class="raw_context_name public" and text()="project test"]
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
        List<WebElement> projects = driver.findElements(By.xpath("//span[@class=\"raw_project_name public\" and text()=\"" + projectName + "\"]"));
        return projects.size() > 0;
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {

    }
}

