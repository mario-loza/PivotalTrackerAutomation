Feature: Pivotal Project

  Scenario: Create a new Project
    Given I Open the Pivotal Application
    And I login into the Pivotal Application
    When I create a project
    And I navigate to the Pivotal Dashboard page
    Then The project name should be displayed
