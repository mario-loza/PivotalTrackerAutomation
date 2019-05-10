package pivotal.entities;

import java.util.Map;

public class Project {
    String name;
    String account;
    String privacy;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPrivacy() {
        return privacy;
    }

    public void setPrivacy(String privacy) {
        this.privacy = privacy;
    }

    public void setInformation(final Map<String, String> projectInformation) {
        setName(projectInformation.get("Project Name"));
        setAccount(projectInformation.get("Account"));
        setPrivacy(projectInformation.get("Project Privacy"));
    }
}
