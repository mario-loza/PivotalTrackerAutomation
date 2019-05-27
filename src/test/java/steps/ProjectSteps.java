package steps;

import core.utils.Logs;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import org.apache.log4j.Logger;
import org.junit.Assert;
import pivotal.entities.Project;
import pivotal.ui.components.CreateProjectPopup;
import pivotal.ui.components.TopBar;
import pivotal.ui.components.TopBarProject;
import pivotal.ui.components.ProjectsDropDownPanel;
import pivotal.ui.components.AccountPanel;
import pivotal.ui.pages.IntroductionPage;
import pivotal.ui.pages.PageTransporter;
import pivotal.ui.pages.ProjectDashboardPage;
import pivotal.ui.pages.ProjectsPage;

import java.util.Map;

/**
 * Created by Melvi Caballero.
 * Class to project steps.
 */
public class ProjectSteps {

    private PageTransporter pageTransporter = PageTransporter.getInstance();
    //pages
    private ProjectDashboardPage projectDashboardPage;
    private CreateProjectPopup createProjectPopup;
    private ProjectsPage projectsPage;
    private TopBar topBar;
    private TopBarProject topBarProject;
    private ProjectsDropDownPanel projectsDropDownPanel;
    private AccountPanel accountPanel;
    private IntroductionPage introductionPage;
    /**
     * It creates to follow up the instruction of the class.
     */
    private Logger log = Logs.getInstance().getLog();
    //DI (Cucumber Dependency Injection)
    private Project project;

    /**
     * constructor.
     *
     * @param project project
     */
    public ProjectSteps(final Project project) {
        this.project = project;
    }

    /**
     * navigateToProjectDashboardPage.
     */
    @When("^I navigate to Project Dashboard page$")
    public void navigateToProjectDashboardPage() {
        log.info("Running step I navigate to Project Dashboard page.");
        projectDashboardPage = pageTransporter.navigateToProjectDashboardPage();
    }

    /**
     * createProjectFromProjectDashboard.
     *
     * @param projectInformation project
     */
    @And("^I create a new Project from Project Dashboard page with the following values$")
    public void createProjectFromProjectDashboard(final Map<String, String> projectInformation) {
        log.info("Running step I create a new Project from Project Dashboard page with the following values.");
        project.setInformation(projectInformation);

        createProjectPopup = projectDashboardPage.pressCreateProjectButton();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    /**
     * createDuplicateProjectNameFromProjectDashboard.
     *
     * @param projectInformation project
     */
    @And("^I create a new Project from Project Dashboard page with a duplicate project name$")
    public void createDuplicateProjectNameFromProjectDashboard(final Map<String, String> projectInformation) {
        log.info("Running step I create a new Project from Project Dashboard page with a duplicate project name.");
        project.setInformation(projectInformation);

        createProjectPopup = projectDashboardPage.pressCreateProjectButton();
        createProjectPopup.createNewProject(project, Boolean.FALSE);
    }

    /**
     * createProjectFromProyectsPage.
     *
     * @param projectInformation project
     */
    @And("^I create a new Project from Projects page with the following values$")
    public void createProjectFromProyectsPage(final Map<String, String> projectInformation) {
        log.info("Running steps I create a new Project from Projects page with the following values.");
        project.setInformation(projectInformation);

        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
        createProjectPopup = projectsDropDownPanel.pressCreateProjectLink();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    /**
     * createProjectFromProjectsPanel.
     *
     * @param projectInformation project
     */
    @And("^I create a new Project from the Projects panel from the top bar with the following values$")
    public void createProjectFromProjectsPanel(final Map<String, String> projectInformation) {
        log.info("Running step I create a new Project from the Projects panel"
                + " from the top bar with the following values.");
        project.setInformation(projectInformation);

        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
        createProjectPopup = projectsDropDownPanel.pressCreateProjectLink();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    /**
     * isDisplayedProjectNameInProjectPage.
     */
    @Then("^the Project page should be displayed the project name$")
    public void isDisplayedProjectNameInProjectPage() {
        log.info("Running step the Project page should be displayed the project name.");
        topBarProject = new TopBarProject();
        Assert.assertEquals(topBarProject.getCurrentProjectName(), project.getName());
    }

    /**
     * verifyIsProjectDisplayedInDashboardPage.
     */
    @Then("^the Dashboard page should be displayed the Project name$")
    public void verifyIsProjectDisplayedInDashboardPage() {
        log.info("Running step the Dashboard page should be displayed the Project name.");
        Assert.assertTrue(projectDashboardPage.projectNameIsListed(project.getName()));
    }

    /**
     * navigateToProjectsPage.
     */
    @When("^I navigate to Projects page$")
    public void navigateToProjectsPage() {
        log.info("Running step I navigate to Projects page.");
        projectsPage = pageTransporter.navigateToProjectsPage();
    }

    /**
     * verifyIsProjectDisplayedInProjectPage.
     */
    @Then("^the Projects page should be displayed the Project name$")
    public void verifyIsProjectDisplayedInProjectPage() {
        log.info("Running step the Projects page should be displayed the Project name.");
        Assert.assertTrue(projectsPage.projectNameIsListed(project.getName()));
    }

    /**
     * displayToProjectsMenuFromTopBar.
     */
    @When("^I display the Projects panel from the top bar$")
    public void displayToProjectsMenuFromTopBar() {
        log.info("Running step I display the Projects panel from the top bar.");
        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
    }

    /**
     * verifyIsProjectDisplayedInProjectsPanel.
     */
    @Then("^the Projects panel should be displayed the Project name$")
    public void verifyIsProjectDisplayedInProjectsPanel() {
        log.info("Running step the Projects panel should be displayed the Project name.");
        Assert.assertTrue(projectsDropDownPanel.projectNameIsListed(project.getName()));
    }

    /**
     * navigateToIntroductionPage.
     */
    @When("^I navigate to Introduction page$")
    public void navigateToIntroductionPage() {
        log.info("Running step I navigate to Introduction page.");
        introductionPage = pageTransporter.navigateToIntroductionPage();
    }

    /**
     * createFirstProjectFromIntroductionPage.
     *
     * @param projectName project name
     */
    @And("^I create a new Project from Introduction page with the name \"([^\"]*)\"$")
    public void createFirstProjectFromIntroductionPage(final String projectName) {
        log.info("Running step I create a new Project from Introduction page with the name " + projectName);
        introductionPage.firstProject(projectName);
        this.project.setName(projectName);
    }

    /**
     * displayToAccountPanelFromTopBar.
     */
    @When("^sign out of the application$")
    public void displayToAccountPanelFromTopBar() {
        log.info("Running step sign out of the application.");
        topBar = new TopBar();
        accountPanel = topBar.pressAccountPanelLink();
        accountPanel.pressSignOutLink();
    }

    /**
     * verifyErrorMessage.
     */
    @Then("^verify that the error message is displayed$")
    public void verifyErrorMessage() {
        log.info("Running step verify that the error message is displayed.");
        Assert.assertTrue(createProjectPopup.isErrorMessage());
    }
}
