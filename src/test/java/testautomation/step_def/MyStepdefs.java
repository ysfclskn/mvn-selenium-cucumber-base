package testautomation.step_def;

import io.cucumber.java.en.Then;
import testautomation.pages.HomePage;

public class MyStepdefs {

    HomePage homePage = new HomePage();
    @Then("verify google homepage")
    public void verifyGoogleHomepage() {
        homePage.verifyGoogleLogo();
    }
}
