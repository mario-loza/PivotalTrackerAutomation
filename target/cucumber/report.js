$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/project.feature");
formatter.feature({
  "line": 1,
  "name": "Project management in Pivotal Tracker",
  "description": "",
  "id": "project-management-in-pivotal-tracker",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1959372338,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 12809526877,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new project the first time",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-the-first-time",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@deleteAllProject"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I navigate to Introduction page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I create a new Project from Introduction page with the name \"First Project\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "the Project page should be displayed the project name",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "the Dashboard page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "the Projects page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "I display the Projects panel from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the Projects panel should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "sign out of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToIntroductionPage()"
});
formatter.result({
  "duration": 638828918,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First Project",
      "offset": 61
    }
  ],
  "location": "ProjectSteps.createFirstProjectFromIntroductionPage(String)"
});
formatter.result({
  "duration": 5859655133,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 139181773,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 2142376229,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 23706900,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 721089895,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 17531749,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 155749253,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 19441937,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 695353767,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 986025375,
  "status": "passed"
});
formatter.after({
  "duration": 381867,
  "status": "passed"
});
formatter.before({
  "duration": 968255119,
  "status": "passed"
});
formatter.before({
  "duration": 836580554,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 2368427408,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Create a new project when user has at least 1 project",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-when-user-has-at-least-1-project",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@deleteAllProject"
    },
    {
      "line": 19,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I create a new Project from Project Dashboard page with the following values",
  "rows": [
    {
      "cells": [
        "Project Name",
        "Test Project1"
      ],
      "line": 23
    },
    {
      "cells": [
        "Account",
        "Untitled"
      ],
      "line": 24
    },
    {
      "cells": [
        "Project Privacy",
        "Private"
      ],
      "line": 25
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "the Project page should be displayed the project name",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "the Dashboard page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "the Projects page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 31,
  "name": "I display the Projects panel from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "the Projects panel should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "sign out of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 889604173,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "duration": 2305078447,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 707308976,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 849863125,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 18450789,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 808594610,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 17175908,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 129696964,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 17141775,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 755732698,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 935068958,
  "status": "passed"
});
formatter.after({
  "duration": 249601,
  "status": "passed"
});
formatter.before({
  "duration": 1270171537,
  "status": "passed"
});
formatter.before({
  "duration": 789220940,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 2269525137,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Create a new project when user has at least one project from project page",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-when-user-has-at-least-one-project-from-project-page",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@deleteAllProject"
    },
    {
      "line": 36,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I create a new Project from Projects page with the following values",
  "rows": [
    {
      "cells": [
        "Project Name",
        "Test Project2"
      ],
      "line": 40
    },
    {
      "cells": [
        "Account",
        "Untitled"
      ],
      "line": 41
    },
    {
      "cells": [
        "Project Privacy",
        "Private"
      ],
      "line": 42
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "the Project page should be displayed the project name",
  "keyword": "Then "
});
formatter.step({
  "line": 44,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "the Dashboard page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 46,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "the Projects page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 48,
  "name": "I display the Projects panel from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 49,
  "name": "the Projects panel should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 50,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "sign out of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 725649259,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProyectsPage(String,String\u003e)"
});
formatter.result({
  "duration": 2359062493,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 945102886,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 829442415,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 15173560,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 726110059,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 16778254,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 124835947,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 15002893,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 704556974,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 929497113,
  "status": "passed"
});
formatter.after({
  "duration": 234240,
  "status": "passed"
});
formatter.before({
  "duration": 1441432270,
  "status": "passed"
});
formatter.before({
  "duration": 801255510,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 2336866847,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Create a new project when user has at least one project from the top bar\u0027s projects DropDown Panel",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-when-user-has-at-least-one-project-from-the-top-bar\u0027s-projects-dropdown-panel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@deleteAllProject"
    },
    {
      "line": 53,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 56,
  "name": "I create a new Project from the Projects panel from the top bar with the following values",
  "rows": [
    {
      "cells": [
        "Project Name",
        "Test Project3"
      ],
      "line": 57
    },
    {
      "cells": [
        "Account",
        "Untitled"
      ],
      "line": 58
    },
    {
      "cells": [
        "Project Privacy",
        "Private"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "the Project page should be displayed the project name",
  "keyword": "Then "
});
formatter.step({
  "line": 61,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "the Dashboard page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 63,
  "name": "I navigate to Projects page",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "the Projects page should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "I display the Projects panel from the top bar",
  "keyword": "When "
});
formatter.step({
  "line": 66,
  "name": "the Projects panel should be displayed the Project name",
  "keyword": "Then "
});
formatter.step({
  "line": 67,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 68,
  "name": "sign out of the application",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 709910793,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectsPanel(String,String\u003e)"
});
formatter.result({
  "duration": 2057571889,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 873504319,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 865649805,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 16091320,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 796913747,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 15941561,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 122706452,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 15857506,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 655285466,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 880598938,
  "status": "passed"
});
formatter.after({
  "duration": 242774,
  "status": "passed"
});
formatter.before({
  "duration": 1246434771,
  "status": "passed"
});
formatter.before({
  "duration": 794582439,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I log in with username and password",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.LogIn()"
});
formatter.result({
  "duration": 2315295843,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Create a new project with a duplicate project name",
  "description": "",
  "id": "project-management-in-pivotal-tracker;create-a-new-project-with-a-duplicate-project-name",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 70,
      "name": "@deleteAllProject"
    },
    {
      "line": 70,
      "name": "@finalScenario"
    },
    {
      "line": 70,
      "name": "@createProject"
    }
  ]
});
formatter.step({
  "line": 72,
  "name": "I navigate to Project Dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I create a new Project from Project Dashboard page with a duplicate project name",
  "rows": [
    {
      "cells": [
        "Project Name",
        "Test Project"
      ],
      "line": 74
    },
    {
      "cells": [
        "Account",
        "Untitled"
      ],
      "line": 75
    },
    {
      "cells": [
        "Project Privacy",
        "Private"
      ],
      "line": 76
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 77,
  "name": "verify that the error message is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 696218621,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createDuplicateProjectNameFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "duration": 531640774,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 258994141,
  "status": "passed"
});
formatter.after({
  "duration": 140563747,
  "status": "passed"
});
formatter.after({
  "duration": 505600,
  "status": "passed"
});
});