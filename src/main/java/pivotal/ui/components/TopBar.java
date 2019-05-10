package pivotal.ui.components;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.ProjectsDropDownPanel;
import pivotal.ui.pages.BasePage;

public class TopBar extends BasePage {

    @FindBy(xpath="//button[@class=\"tc_projects_dropdown_link tc_context_name\"]")
    private WebElement projectDropdownbutton;

    @FindBy(css = ".project_name")
    private WebElement lastproject;

    @FindBy(css = ".wrapper h1")
    private WebElement labelProjectsH1;

    @FindBy(xpath="//div[@class=\"tc_header_text_logo\"]")
    private WebElement headerTextLogo;


    public ProjectsDropDownPanel PressProjectDropdownbutton(){
        projectDropdownbutton.click();
        return new ProjectsDropDownPanel();
    }


    @Override
    public void waitUntilPageObjectIsLoaded() {
         wait.until(ExpectedConditions.visibilityOf(headerTextLogo));
    }
}