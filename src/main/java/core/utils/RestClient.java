package core.utils;

import org.glassfish.jersey.client.authentication.HttpAuthenticationFeature;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

public class RestClient {
    private static final String REST_URI
            = "https://www.pivotaltracker.com/services/v5/";
    String token = "3479ea45399b9832f2dd04a49a55a79f";

    private Client client;

    public RestClient(){
        client = ClientBuilder.newClient();
        HttpAuthenticationFeature feature = HttpAuthenticationFeature.basic(Setup.getInstance().username,Setup.getInstance().password);
        client.register(feature);
    }

    public void deleteProject(Long id) {
         client
                .target(REST_URI)
                .path("projects")
                .path(String.valueOf(id))
                .request()
                .header("X-TrackerToken", Setup.getInstance().token)
                .delete();
    }

    public List<Long> getAllProjects() {
        List<Long> results = new ArrayList<>();

        Response response = client
                .target(REST_URI)
                .path("projects")
                .request(MediaType.APPLICATION_JSON)
                .header("X-TrackerToken", Setup.getInstance().token)
                .get();
        String listString= response.readEntity(String.class);

        JSONParser parser = new JSONParser();
        try{
            JSONArray  projects = (JSONArray) parser.parse(listString);
            Iterator<JSONObject> iterator = projects.iterator();
             // iterate through json array
            while (iterator.hasNext()) {
                // do something. Fetch fields in services array.
                results.add((Long)(iterator.next().get("id")));
            }
        }catch (Exception e){
          System.out.println(e.getMessage());
        }

        return results;
    }

    public void deleteAllProjects(){
        List<Long>  projects= getAllProjects();

        for(Long id : projects){
            deleteProject(id);
        }

    }

    public void createProject(String name) {
        Project project = new Project();
        project.setId(0);
        project.setName(name);

        client
                .target(REST_URI)
                .path("projects")
                .request(MediaType.APPLICATION_JSON)
                .header("X-TrackerToken", Setup.getInstance().token)
                .post(Entity.json("{ \"name\" : \""+name+"\"}"));
    }

public class Project{
        private int id;
        private String name;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}

}

