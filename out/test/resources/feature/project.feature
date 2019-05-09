Feature:  Project management

  @Project
  Scenario: Create a new project when user has at least 1 project
    Given I log in with username "melvi.caballero@gmail.com" and password "control123*"
    When I navigate to Project Dashboard page
    And I create a new Project from Project Dashboard page with the following values
      | Project Name    | Account      |Project privacy|
      | Test Project    | Untitled     |Private        |
    Then the Project page should be displayed
    When I navigate to Project Dashboard page
    Then the Project name "Test Project" should be displayed in Project Dashboard page
    When I navigate to Projects page
    Then the Project name "Test Project" should be displayed in Projects page
    When I display the Projects menu from the top bar
    Then the Project name "Test Project" should be displayed in the Projects menu

