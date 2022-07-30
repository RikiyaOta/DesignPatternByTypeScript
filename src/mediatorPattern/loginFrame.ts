import { Mediator } from "./mediator.js";
import { ColleagueButton } from "./colleagueButton.js";
import { ColleagueTextField } from "./colleagueTextField.js";
import { ColleagueCheckbox } from "./colleagueCheckbox.js";

export class LoginFrame implements Mediator {
  private guestCheckbox: ColleagueCheckbox;
  private loginCheckbox: ColleagueCheckbox;
  private usernameInput: ColleagueTextField;
  private passwordInput: ColleagueTextField;
  private signinButton: ColleagueButton;
  private cancelButton: ColleagueButton;

  constructor() {
    this.guestCheckbox = new ColleagueCheckbox("checkbox-guest", true);
    this.loginCheckbox = new ColleagueCheckbox("checkbox-login", false);
    this.usernameInput = new ColleagueTextField("username");
    this.passwordInput = new ColleagueTextField("password");
    this.signinButton = new ColleagueButton("signin");
    this.cancelButton = new ColleagueButton("cancel");
    this.setupColleagues();
    this.colleagueChanged();
  }

  setupColleagues() {
    this.guestCheckbox.setMediator(this);
    this.loginCheckbox.setMediator(this);
    this.usernameInput.setMediator(this);
    this.passwordInput.setMediator(this);
    this.signinButton.setMediator(this);
    this.cancelButton.setMediator(this);
  }

  colleagueChanged() {
    if (this.guestCheckbox.isChecked()) {
      this.usernameInput.setColleagueEnabled(false);
      this.passwordInput.setColleagueEnabled(false);
      this.signinButton.setColleagueEnabled(true);
    } else {
      this.usernameInput.setColleagueEnabled(true);
      this.userpassChanged();
    }
  }

  private userpassChanged() {
    if (this.usernameInput.getText().length > 0) {
      this.passwordInput.setColleagueEnabled(true);
      if (this.passwordInput.getText().length > 0) {
        this.signinButton.setColleagueEnabled(true);
      } else {
        this.signinButton.setColleagueEnabled(false);
      }
    } else {
      this.passwordInput.setColleagueEnabled(false);
      this.signinButton.setColleagueEnabled(false);
    }
  }
}
