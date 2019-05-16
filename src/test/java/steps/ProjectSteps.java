package steps;

import core.utils.Logs;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import org.apache.log4j.Logger;
import org.junit.Assert;
import pivotal.entities.Project;
import pivotal.ui.components.*;
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

    /** It creates to follow up the instruction of the class*/
    private Logger log = Logs.getInstance().getLog();

    PageTransporter pageTransporter = PageTransporter.getInstance();
    //pages
    ProjectDashboardPage projectDashboardPage;
    CreateProjectPopup createProjectPopup;
    ProjectsPage projectsPage;
    TopBar topBar;
    TopBarProject topBarProject;
    ProjectsDropDownPanel projectsDropDownPanel;
    AccountPanel accountPanel;
    IntroductionPage introductionPage;
    //DI (Cucumber Dependency Injection)
    private Project project;
    public ProjectSteps(Project project) {
        this.project = project;
    }

    @When("^I navigate to Project Dashboard page$")
    public void navigateToProjectDashboardPage() {
        log.info("Running step I navigate to Project Dashboard page.");
        projectDashboardPage = pageTransporter.navigateToProjectDashboardPage();
    }

    @And("^I create a new Project from Project Dashboard page with the following values$")
    public void createProjectFromProjectDashboard(Map<String, String> projectInformation) {
        log.info("Running step I create a new Project from Project Dashboard page with the following values.");
        project.setInformation(projectInformation);

        createProjectPopup = projectDashboardPage.pressCreateProjectButton();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    @And("^I create a new Project from Project Dashboard page with a duplicate project name$")
    public void createDuplicateProjectNameFromProjectDashboard(Map<String, String> projectInformation) {
        log.info("Running step I create a new Project from Project Dashboard page with a duplicate project name.");
        project.setInformation(projectInformation);

        createProjectPopup = projectDashboardPage.pressCreateProjectButton();
        createProjectPopup.createNewProject(project, Boolean.FALSE);
    }

    @And("^I create a new Project from Projects page with the following values$")
    public void createProjectFromProyectsPage(Map<String, String> projectInformation) {
        log.info("Running steps I create a new Project from Projects page with the following values.");
        project.setInformation(projectInformation);

        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
        createProjectPopup = projectsDropDownPanel.pressCreateProjectLink();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    @And("^I create a new Project from the Projects panel from the top bar with the following values$")
    public void createProjectFromProjectsPanel(Map<String, String> projectInformation) {
        log.info("Running step I create a new Project from the Projects panel from the top bar with the following values.");
        project.setInformation(projectInformation);

        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
        createProjectPopup = projectsDropDownPanel.pressCreateProjectLink();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    @Then("^the Project page should be displayed the project name$")
    public void isDisplayedProjectNameInProjectPage() {
        log.info("Running step the Project page should be displayed the project name.");
        topBarProject = new TopBarProject();
        Assert.assertEquals(topBarProject.GetCurrentProjectName(), project.getName());
    }

    @Then("^the Dashboard page should be displayed the Project name$")
    public void verifyIsProjectDisplayedInDashboardPage() {
        log.info("Running step the Dashboard page should be displayed the Project name.");
        Assert.assertTrue(projectDashboardPage.projectNameIsListed(project.getName()));
    }

    @When("^I navigate to Projects page$")
    public void navigateToProjectsPage() {
        log.info("Running step I navigate to Projects page.");
        projectsPage = pageTransporter.navigateToProjectsPage();
    }

    @Then("^the Projects page should be displayed the Project name$")
    public void verifyIsProjectDisplayedInProjectPage() {
        log.info("Running step the Projects page should be displayed the Project name.");
        Assert.assertTrue(projectsPage.projectNameIsListed(project.getName()));
    }

    @When("^I display the Projects panel from the top bar$")
    public void displayToProjectsMenuFromTopBar() {
        log.info("Running step I display the Projects panel from the top bar.");
        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
    }

    @Then("^the Projects panel should be displayed the Project name$")
    public void verifyIsProjectDisplayedInProjectsPanel() {
        log.info("Running step the Projects panel should be displayed the Project name.");
        Assert.assertTrue(projectsDropDownPanel.projectNameIsListed(project.getName()));
    }

    @When("^I navigate to Introduction page$")
    public void navigateToIntroductionPage() {
        log.info("Running step I navigate to Introduction page.");
        introductionPage = pageTransporter.navigateToIntroductionPage();
    }

    @And("^I create a new Project from Introduction page with the name \"([^\"]*)\"$")
    public void createFirstProjectFromIntroductionPage(String projectName) {
        log.info("Running step I create a new Project from Introduction page with the name "+projectName);
        introductionPage.firstProject(projectName);
        this.project.setName(projectName);
    }

    @When("^sign out of the application$")
    public void displayToAccountPanelFromTopBar() {
        log.info("Running step sign out of the application.");
        topBar = new TopBar();
        accountPanel = topBar.pressAccountPanelLink();
        accountPanel.pressSignOutLink();
    }

    @Then("^verify that the error message is displayed$")
    public void verifyErrorMessage(){
        log.info("Running step verify that the error message is displayed.");
        Assert.assertTrue(createProjectPopup.isErrorMessage());
    }
}
