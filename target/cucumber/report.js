$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/project.feature");
formatter.feature({
  "line": 1,
  "name": "Project management in Pivotal Tracker",
  "description": "",
  "id": "project-management-in-pivotal-tracker",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3001041068,
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
  "duration": 22606453424,
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
  "duration": 956767963,
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
  "duration": 11607257265,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 83069937,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 977699394,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 27845997,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 1543362171,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 23262313,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 197821182,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 24035434,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 631028165,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1176062444,
  "status": "passed"
});
formatter.after({
  "duration": 78080,
  "status": "passed"
});
formatter.before({
  "duration": 895044604,
  "status": "passed"
});
formatter.before({
  "duration": 918113637,
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
  "duration": 3235361055,
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
  "duration": 923725588,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "duration": 3113117110,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 916162062,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 883309554,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 22123538,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 848825471,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 23464980,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 170367292,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 28575171,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 790234701,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1079211588,
  "status": "passed"
});
formatter.after({
  "duration": 24747,
  "status": "passed"
});
formatter.before({
  "duration": 1320515687,
  "status": "passed"
});
formatter.before({
  "duration": 1221482856,
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
  "duration": 2765224759,
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
  "duration": 821098941,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProyectsPage(String,String\u003e)"
});
formatter.result({
  "duration": 2329978308,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 707077296,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 964075916,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 20412604,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 793520891,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 19643323,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 153309145,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 23884393,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 746102823,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1087447542,
  "status": "passed"
});
formatter.after({
  "duration": 28160,
  "status": "passed"
});
formatter.before({
  "duration": 1902687917,
  "status": "passed"
});
formatter.before({
  "duration": 809663837,
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
  "duration": 2653647491,
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
  "duration": 669464464,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectsPanel(String,String\u003e)"
});
formatter.result({
  "duration": 2263239905,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 790753101,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 875751147,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 25049194,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 806297008,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 21651645,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 168586811,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 22690580,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 713008396,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1061500212,
  "status": "passed"
});
formatter.after({
  "duration": 24747,
  "status": "passed"
});
formatter.before({
  "duration": 1238969804,
  "status": "passed"
});
formatter.before({
  "duration": 1217228985,
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
  "duration": 2660331657,
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
  "duration": 807980636,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createDuplicateProjectNameFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "duration": 693091152,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 254012377,
  "status": "passed"
});
formatter.after({
  "duration": 191798777,
  "status": "passed"
});
formatter.after({
  "duration": 37973,
  "status": "passed"
});
});