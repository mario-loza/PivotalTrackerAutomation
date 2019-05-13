package pivotal.ui.components;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import pivotal.ui.components.TopBar;

import java.time.Duration;

/**
 * Created by Melvi Caballero.
 * Class to Top Bar project component.
 */
public class TopBarProject extends TopBar {

    @FindBy(xpath="//span[@class=\"raw_context_name\"]")
    protected WebElement projectName;

    /**
     * Get the current Project Name.
     * @return the project name.
     */
    public String GetCurrentProjectName(){
        return projectName.getText();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.withTimeout( Duration.ofSeconds(10)) .until(ExpectedConditions.visibilityOf(projectName));
    }
}
