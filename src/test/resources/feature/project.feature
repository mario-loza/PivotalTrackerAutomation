Feature:  Project management
  Background:
    Given I log in with username "melvi.caballero@gmail.com" and password "control123*"

  @deleteAllProject
  Scenario: Create a new project the first time
    When I navigate to Introduction page
    And I create a new Project from Introduction page with the name "First Project"
    Then the Project page should be displayed the project name
    When I navigate to Project Dashboard page
    Then the Dashboard page should be displayed the Project name
    When I navigate to Projects page
    Then the Projects page should be displayed the Project name
    When I display the Projects panel from the top bar
    Then the Projects panel should be displayed the Project name
    When I navigate to Project Dashboard page
    Then sign out of the application

  @deleteAllProject @createProject
  Scenario: Create a new project when user has at least 1 project
    When I navigate to Project Dashboard page
    And I create a new Project from Project Dashboard page with the following values
      |Project Name   |Test Project1|
      |Account        |Untitled    |
      |Project Privacy|Private     |
    Then the Project page should be displayed the project name
    When I navigate to Project Dashboard page
    Then the Dashboard page should be displayed the Project name
    When I navigate to Projects page
    Then the Projects page should be displayed the Project name
    When I display the Projects panel from the top bar
    Then the Projects panel should be displayed the Project name
    When I navigate to Project Dashboard page
    Then sign out of the application

  @deleteAllProject @createProject
  Scenario: Create a new project when user has at least one project from project page
    When I navigate to Projects page
    And I create a new Project from Projects page with the following values
      |Project Name   |Test Project2|
      |Account        |Untitled    |
      |Project Privacy|Private     |
    Then the Project page should be displayed the project name
    When I navigate to Project Dashboard page
    Then the Dashboard page should be displayed the Project name
    When I navigate to Projects page
    Then the Projects page should be displayed the Project name
    When I display the Projects panel from the top bar
    Then the Projects panel should be displayed the Project name
    When I navigate to Project Dashboard page
    Then sign out of the application

  @deleteAllProject @createProject
  Scenario: Create a new project when user has at least one project from the top bar's projects DropDown Panel
    When I navigate to Project Dashboard page
    And I create a new Project from the Projects panel from the top bar with the following values
      |Project Name   |Test Project3|
      |Account        |Untitled    |
      |Project Privacy|Private     |
    Then the Project page should be displayed the project name
    When I navigate to Project Dashboard page
    Then the Dashboard page should be displayed the Project name
    When I navigate to Projects page
    Then the Projects page should be displayed the Project name
    When I display the Projects panel from the top bar
    Then the Projects panel should be displayed the Project name
    When I navigate to Project Dashboard page
    Then sign out of the application

  @deleteAllProject @finalScenario @createProject
  Scenario: Create a new project with a duplicate project name
    When I navigate to Project Dashboard page
    And I create a new Project from Project Dashboard page with a duplicate project name
      |Project Name   |Test Project|
      |Account        |Untitled    |
      |Project Privacy|Private     |
    Then verify that the error message is displayed