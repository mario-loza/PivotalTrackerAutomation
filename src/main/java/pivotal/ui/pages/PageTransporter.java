package pivotal.ui.pages;

import core.selenium.WebDriverManager;
import core.utils.Logs;
import org.apache.log4j.Logger;
import pivotal.utils.Setup;
import org.openqa.selenium.WebDriver;
import pivotal.ui.components.ProjectsDropDownPanel;

import java.net.MalformedURLException;
import java.net.URL;

public class PageTransporter {

    private static PageTransporter instance;
    /**
     * It creates to follow up the instruction of the class
     */
    private Logger log = Logs.getInstance().getLog();
    private String baseURL = Setup.getInstance().urlBasePath;
    private WebDriver webDriver;

    /**
     * Constructor of page transporter.
     */
    protected PageTransporter() {
        log.info("Initialize the PageTransporter class");
        initialize();
    }

    /**
     * Gets instance of SelectSiteUserConfig.
     *
     * @return the instance or a new instance.
     */
    public static PageTransporter getInstance() {
        if (instance == null) {
            instance = new PageTransporter();
        }
        return instance;
    }

    /**
     * Initializes page transporter.
     */
    private void initialize() {
        log.info("Initialize the webDriver");
        webDriver = WebDriverManager.getInstance().getWebDriver();
    }

    /**
     * Goes to the given URL.
     *
     * @param url - Site's URL.
     */
    private void goToURL(final String url) {
        try {
            webDriver.navigate().to(new URL(url));
        } catch (MalformedURLException e) {
            e.printStackTrace();
        }
    }

    /**
     * Navigate to Login Page.
     *
     * @return New instance of LoginPage.
     */
    public LoginPage navigateToLoginPage() {
        log.info("Navigate in Log in page");
        goToURL(baseURL.concat("signin"));
        return new LoginPage();
    }

    public ProjectDashboardPage navigateToProjectDashboardPage() {
        log.info("Navigate in dashboard page");
        goToURL(baseURL.concat("dashboard"));
        return new ProjectDashboardPage();
    }

    public ProjectsPage navigateToProjectsPage() {
        log.info("Navigate in projects page");
        goToURL(baseURL.concat("projects"));
        return new ProjectsPage();
    }

    public ProjectsDropDownPanel navigateToProjectsDropDownPanel() {
        log.info("Navigate in DropDownPanel page");
        goToURL(baseURL.concat("DropDownPanel"));
        return new ProjectsDropDownPanel();
    }

    public IntroductionPage navigateToIntroductionPage() {
        log.info("Navigate in introduction page");
        goToURL(baseURL.concat("introduction"));
        return new IntroductionPage();
    }
}
