package steps;

import core.selenium.WebDriverManager;
import cucumber.api.DataTable;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import pivotal.ui.CreateProjectPopup;
import pivotal.ui.PageTransporter;
import pivotal.ui.ProjectDashboardPage;

import java.util.List;
import java.util.Map;

public class ProjectSteps {

    PageTransporter pageTransporter= PageTransporter.getInstance();

    //pages
    ProjectDashboardPage projectDashboardPage;
    CreateProjectPopup createProjectPopup;
   // ProjectPage projectPage;

    //entities
    //Project project;

    //@And
            //popolate Project entity
      //      project.setProjectInformation(table);
    //create project by ui
    @When("^I navigate to Project Dashboard page$")
    public void navigateToProjectDashboardPage(){
        projectDashboardPage = pageTransporter.navigateToProjectDashboardPage();
    }

    @And("^I create a new Project from Project Dashboard page with the following values$")
    public void createProject(DataTable dt){
        List<Map<String,String>> data = dt.asMaps(String.class,String.class);
        createProjectPopup = projectDashboardPage.pressCreateProjectButton();
        createProjectPopup.createNewProject(data.get(0).get("Project Name"), data.get(0).get("Account"), data.get(0).get("Project privacy"));
    }

    @Then("^the Project page should be displayed$")
    public void projectPageShouldBeDisplayed(){
        Assert.assertTrue(WebDriverManager.getInstance().getWebDriver().getCurrentUrl().contains("https://www.pivotaltracker.com/n/projects/"));
    }

    @Then("^the Project name \"([^\"]*)\" should be displayed in Project Dashboard page$")
    public void projectIsDisplayed(String projectName) {
        Assert.assertTrue(projectDashboardPage.projectNameIsListed(projectName) );
    }

   // @When("^I navigate to Projects page$")

    //@Then("^the Project name should be displayed in Projects page$")

}
