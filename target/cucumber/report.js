$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/project.feature");
formatter.feature({
  "line": 1,
  "name": "Project management in Pivotal Tracker",
  "description": "",
  "id": "project-management-in-pivotal-tracker",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1976133953,
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
  "duration": 13822051261,
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
  "duration": 664240353,
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
  "duration": 6088198475,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 111260255,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 1032834161,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 26872769,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 1240577486,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 22148712,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 196819794,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 21442578,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 901990317,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1358988679,
  "status": "passed"
});
formatter.after({
  "duration": 78933,
  "status": "passed"
});
formatter.before({
  "duration": 1269535377,
  "status": "passed"
});
formatter.before({
  "duration": 781470107,
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
  "duration": 2505594458,
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
  "duration": 1092791546,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "duration": 2562768267,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 682439836,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 889424546,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 23190634,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 749109546,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 20931858,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 192088911,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 21176338,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 752931203,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1008914781,
  "status": "passed"
});
formatter.after({
  "duration": 24320,
  "status": "passed"
});
formatter.before({
  "duration": 1377581549,
  "status": "passed"
});
formatter.before({
  "duration": 777348930,
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
  "duration": 2443864699,
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
  "duration": 791352995,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProyectsPage(String,String\u003e)"
});
formatter.result({
  "duration": 2171247506,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 741280633,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 805223940,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 20587111,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 779707545,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 22093672,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 174080575,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 26773783,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 762627637,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 953980548,
  "status": "passed"
});
formatter.after({
  "duration": 25173,
  "status": "passed"
});
formatter.before({
  "duration": 4272418365,
  "status": "passed"
});
formatter.before({
  "duration": 796898387,
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
  "duration": 2517105508,
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
  "duration": 677909485,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectsPanel(String,String\u003e)"
});
formatter.result({
  "duration": 2213071969,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 649505835,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 850739926,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 21553938,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 783993415,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 19730363,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 163448033,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 20580711,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 696347901,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 961779168,
  "status": "passed"
});
formatter.after({
  "duration": 25600,
  "status": "passed"
});
formatter.before({
  "duration": 1187982241,
  "status": "passed"
});
formatter.before({
  "duration": 3778427971,
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
  "duration": 2394758310,
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
  "duration": 722387390,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createDuplicateProjectNameFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "duration": 693032698,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 277221356,
  "status": "passed"
});
formatter.after({
  "duration": 146751272,
  "status": "passed"
});
formatter.after({
  "duration": 108800,
  "status": "passed"
});
});