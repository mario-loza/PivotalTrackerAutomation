package pivotal.ui.components;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.pages.BasePage;

public class TopBar extends BasePage {

    @FindBy(xpath="//button[@class=\"tc_projects_dropdown_link tc_context_name\"]")
    private WebElement projectDropDownButton;

    @FindBy(css = ".project_name")
    private WebElement lastProject;

    @FindBy(css = ".wrapper h1")
    private WebElement labelProjectsH1;

    @FindBy(xpath="//div[@class=\"tc_header_text_logo\"]")
    private WebElement headerTextLogo;

    @FindBy(xpath="//button[@aria-label=\"Profile Dropdown\"]")
    private WebElement currentAccount;



    public ProjectsDropDownPanel pressProjectButton(){
        projectDropDownButton.click();
        return new ProjectsDropDownPanel();
    }

    public AccountPanel pressAccountPanelLink(){
        currentAccount.click();
        return new AccountPanel();
    }


    @Override
    public void waitUntilPageObjectIsLoaded() {
         wait.until(ExpectedConditions.visibilityOf(headerTextLogo));
    }
}
