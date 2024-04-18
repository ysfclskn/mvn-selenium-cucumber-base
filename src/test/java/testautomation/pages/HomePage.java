package testautomation.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import testautomation.utils.Driver;

public class HomePage {

    public HomePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(css = "img[alt='Google']")
    public WebElement googleLogo;

    public void verifyGoogleLogo() {
        googleLogo.isDisplayed();
    }

}