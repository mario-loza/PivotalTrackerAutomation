package pivotal.ui.components;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;

import java.time.Duration;

/**
 * Created by Melvi Caballero.
 * Class to Top Bar project component.
 */
public class TopBarProject extends TopBar {

    public static final int SECONDS = 10;
    @FindBy(xpath = "//span[@class=\"raw_context_name\"]")
    protected WebElement projectName;

    /**
     * Get the current Project Name.
     *
     * @return the project name.
     */
    public String getCurrentProjectName() {
        return projectName.getText();
    }

    @Override
    public void waitUntilPageObjectIsLoaded() {
        wait.withTimeout(Duration.ofSeconds(SECONDS)).until(ExpectedConditions.visibilityOf(projectName));
    }
}
