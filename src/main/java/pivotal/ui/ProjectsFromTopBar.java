package pivotal.ui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

public class ProjectsFromTopBar {

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
}
