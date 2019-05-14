$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feature/project.feature");
formatter.feature({
  "line": 1,
  "name": "Project management",
  "description": "",
  "id": "project-management",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7193404063,
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
  "name": "I log in with username \"melvi.caballero@fundacion-jala.org\" and password \"control123*\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "melvi.caballero@fundacion-jala.org",
      "offset": 24
    },
    {
      "val": "control123*",
      "offset": 74
    }
  ],
  "location": "LoginSteps.LogIn(String,String)"
});
formatter.result({
  "duration": 8496527354,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Create a new project the first time",
  "description": "",
  "id": "project-management;create-a-new-project-the-first-time",
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
  "duration": 653651035,
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
  "duration": 5707731981,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 89686340,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 1286164115,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 27647194,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 1129911689,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 21878651,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 196449189,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 23421907,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 680235828,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1018866805,
  "status": "passed"
});
formatter.before({
  "duration": 892474270,
  "status": "passed"
});
formatter.before({
  "duration": 949338367,
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
  "name": "I log in with username \"melvi.caballero@fundacion-jala.org\" and password \"control123*\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "melvi.caballero@fundacion-jala.org",
      "offset": 24
    },
    {
      "val": "control123*",
      "offset": 74
    }
  ],
  "location": "LoginSteps.LogIn(String,String)"
});
formatter.result({
  "duration": 2455932511,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Create a new project when user has at least 1 project",
  "description": "",
  "id": "project-management;create-a-new-project-when-user-has-at-least-1-project",
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
  "duration": 735731602,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "duration": 2604502365,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 555655775,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 964572526,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 22865959,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 765046212,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 20409208,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 157922830,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 20148514,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 692298142,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 996401487,
  "status": "passed"
});
formatter.before({
  "duration": 1336478014,
  "status": "passed"
});
formatter.before({
  "duration": 751929177,
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
  "name": "I log in with username \"melvi.caballero@fundacion-jala.org\" and password \"control123*\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "melvi.caballero@fundacion-jala.org",
      "offset": 24
    },
    {
      "val": "control123*",
      "offset": 74
    }
  ],
  "location": "LoginSteps.LogIn(String,String)"
});
formatter.result({
  "duration": 2385645032,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Create a new project when user has at least one project from project page",
  "description": "",
  "id": "project-management;create-a-new-project-when-user-has-at-least-one-project-from-project-page",
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
  "duration": 701102423,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProyectsPage(String,String\u003e)"
});
formatter.result({
  "duration": 2224095529,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 617655668,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 759103588,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 19946274,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 704636509,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 22740945,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 196621988,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 22159824,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 764965572,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1058892474,
  "status": "passed"
});
formatter.before({
  "duration": 1261532606,
  "status": "passed"
});
formatter.before({
  "duration": 727474308,
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
  "name": "I log in with username \"melvi.caballero@fundacion-jala.org\" and password \"control123*\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "melvi.caballero@fundacion-jala.org",
      "offset": 24
    },
    {
      "val": "control123*",
      "offset": 74
    }
  ],
  "location": "LoginSteps.LogIn(String,String)"
});
formatter.result({
  "duration": 2350398891,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Create a new project when user has at least one project from the top bar\u0027s projects DropDown Panel",
  "description": "",
  "id": "project-management;create-a-new-project-when-user-has-at-least-one-project-from-the-top-bar\u0027s-projects-dropdown-panel",
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
  "duration": 714773274,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createProjectFromProjectsPanel(String,String\u003e)"
});
formatter.result({
  "duration": 2205771445,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.isDisplayedProjectNameInProjectPage()"
});
formatter.result({
  "duration": 658203150,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 857499490,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInDashboardPage()"
});
formatter.result({
  "duration": 22295504,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectsPage()"
});
formatter.result({
  "duration": 760144658,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectPage()"
});
formatter.result({
  "duration": 23281533,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToProjectsMenuFromTopBar()"
});
formatter.result({
  "duration": 156093280,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyIsProjectDisplayedInProjectsPanel()"
});
formatter.result({
  "duration": 21539877,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.navigateToProjectDashboardPage()"
});
formatter.result({
  "duration": 695485773,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.displayToAccountPanelFromTopBar()"
});
formatter.result({
  "duration": 1049660245,
  "status": "passed"
});
formatter.before({
  "duration": 1268090484,
  "status": "passed"
});
formatter.before({
  "duration": 1095649443,
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
  "name": "I log in with username \"melvi.caballero@fundacion-jala.org\" and password \"control123*\"",
  "keyword": "Given "
});
formatter.match({
  "arguments": [
    {
      "val": "melvi.caballero@fundacion-jala.org",
      "offset": 24
    },
    {
      "val": "control123*",
      "offset": 74
    }
  ],
  "location": "LoginSteps.LogIn(String,String)"
});
formatter.result({
  "duration": 2324757888,
  "status": "passed"
});
formatter.scenario({
  "line": 71,
  "name": "Create a new project with a duplicate project name",
  "description": "",
  "id": "project-management;create-a-new-project-with-a-duplicate-project-name",
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
  "duration": 752514138,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.createDuplicateProjectNameFromProjectDashboard(String,String\u003e)"
});
formatter.result({
  "duration": 655716959,
  "status": "passed"
});
formatter.match({
  "location": "ProjectSteps.verifyErrorMessage()"
});
formatter.result({
  "duration": 291396337,
  "status": "passed"
});
formatter.after({
  "duration": 95798350,
  "status": "passed"
});
});