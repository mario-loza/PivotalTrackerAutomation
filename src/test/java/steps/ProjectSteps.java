package steps;

import core.selenium.WebDriverManager;
import core.utils.RestClient;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import org.junit.Assert;
import org.testng.annotations.BeforeTest;
import pivotal.entities.Project;
import pivotal.ui.components.*;
import pivotal.ui.pages.IntroductionPage;
import pivotal.ui.pages.PageTransporter;
import pivotal.ui.pages.ProjectDashboardPage;
import pivotal.ui.pages.ProjectsPage;

import java.util.Map;

/**
 * Created by Melvi Caballero.
 * Class to To project steps.
 */
public class ProjectSteps {

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
    private Project project;
    public ProjectSteps(Project project) {
        this.project = project;
    }

    @When("^I navigate to Project Dashboard page$")
    public void navigateToProjectDashboardPage() {
        projectDashboardPage = pageTransporter.navigateToProjectDashboardPage();
    }

    @And("^I create a new Project from Project Dashboard page with the following values$")
    public void createProjectFromProjectDashboard(Map<String, String> projectInformation) {
        project.setInformation(projectInformation);

        createProjectPopup = projectDashboardPage.pressCreateProjectButton();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    @And("^I create a new Project from Project Dashboard page with a duplicate project name$")
    public void createDuplicateProjectNameFromProjectDashboard(Map<String, String> projectInformation) {
        project.setInformation(projectInformation);

        createProjectPopup = projectDashboardPage.pressCreateProjectButton();
        createProjectPopup.createNewProject(project, Boolean.FALSE);
    }

    @And("^I create a new Project from Projects page with the following values$")
    public void createProjectFromProyectsPage(Map<String, String> projectInformation) {
        project.setInformation(projectInformation);

        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
        createProjectPopup = projectsDropDownPanel.pressCreateProjectLink();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    @And("^I create a new Project from the Projects panel from the top bar with the following values$")
    public void createProjectFromProjectsPanel(Map<String, String> projectInformation) {
        project.setInformation(projectInformation);

        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
        createProjectPopup = projectsDropDownPanel.pressCreateProjectLink();
        createProjectPopup.createNewProject(project, Boolean.TRUE);
    }

    @Then("^the Project page should be displayed the project name$")
    public void isDisplayedProjectNameInProjectPage() {
        topBarProject = new TopBarProject();
        Assert.assertEquals(topBarProject.GetCurrentProjectName(), project.getName());
    }

    @Then("^the Dashboard page should be displayed the Project name$")
    public void verifyIsProjectDisplayedInDashboardPage() {
        Assert.assertTrue(projectDashboardPage.projectNameIsListed(project.getName()));
    }

    @When("^I navigate to Projects page$")
    public void navigateToProjectsPage() {
        projectsPage = pageTransporter.navigateToProjectsPage();
    }

    @Then("^the Projects page should be displayed the Project name$")
    public void verifyIsProjectDisplayedInProjectPage() {
        Assert.assertTrue(projectsPage.projectNameIsListed(project.getName()));
    }

    @When("^I display the Projects panel from the top bar$")
    public void displayToProjectsMenuFromTopBar() {
        topBar = new TopBar();
        projectsDropDownPanel = topBar.pressProjectButton();
    }

    @Then("^the Projects panel should be displayed the Project name$")
    public void verifyIsProjectDisplayedInProjectsPanel() {
        Assert.assertTrue(projectsDropDownPanel.projectNameIsListed(project.getName()));
    }

    @When("^I navigate to Introduction page$")
    public void navigateToIntroductionPage() {
        introductionPage = pageTransporter.navigateToIntroductionPage();
    }

    @And("^I create a new Project from Introduction page with the name \"([^\"]*)\"$")
    public void createFirstProjectFromIntroductionPage(String projectName) {
        introductionPage.firstProject(projectName);
        this.project.setName(projectName);
    }

    @When("^sign out of the application$")
    public void displayToAccountPanelFromTopBar() {
        topBar = new TopBar();
        accountPanel = topBar.pressAccountPanelLink();
        accountPanel.pressSignOutLink();
    }

    @Then("^verify that the error message is displayed$")
    public void verifyErrorMessage(){
        Assert.assertTrue(createProjectPopup.isErrorMessage());
    }

    @Before(order=1, value="@deleteAllProject")
    public void beforeScenario() {
        RestClient rc = new RestClient();
        rc.deleteAllProjects();
    }

//    @After("@finalScenario")
//    public void clearcookies() {
//        WebDriverManager.getInstance().getWebDriver().manage().deleteAllCookies();
//    }

    @After("@finalScenario")
    public void closeTheApplication() {
        WebDriverManager.getInstance().getWebDriver().close();
    }

    @Before(order=2,value="@createProject")
    public void createProject() {
        // WebDriverManager.getInstance().getWebDriver().close();
        RestClient rc = new RestClient();
        rc.createProject("Test Project");
    }

}
