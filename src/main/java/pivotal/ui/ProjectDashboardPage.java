package pivotal.ui;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.util.List;

public class ProjectDashboardPage extends BasePage{

    @FindBy(id="create-project-button")
    private WebElement createButton;

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.until(ExpectedConditions.visibilityOf(createButton));
    }

    public CreateProjectPopup pressCreateProjectButton(){
        createButton.click();
        return new CreateProjectPopup();
    }

    public boolean projectNameIsListed(String projectName){
        List<WebElement> projects = driver.findElements(By.xpath("//a[@data-aid=\"project-name\" and text()=\""+projectName+"\"]"));
        return projects.size() >0;
    }
}
