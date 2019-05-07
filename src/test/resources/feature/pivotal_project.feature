Feature: Pivotal Project

  Scenario: Create a new Project when user has at least 1 proyect
    Given I Open the Pivotal Application
    And I login into the Pivotal Application
    When I create a project
    And I navigate to the Pivotal Dashboard page
    Then The project name should be displayed

  Scenario: Create a new Project when user has at least 1 proyect
    Given I login in with username "melvi.caballero" and password "control123*"
    When I navigate to Project Dashboard page with the following t
    And I navigate to the Pivotal Dashboard page
    Then The project name should be displayed
