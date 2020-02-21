import { AppsterGUIId } from "../appster/AppsterConstants.js";
import AppsterController from "../appster/AppsterController.js";
import GoLogoLoLogo from "../gologolo/GoLogoLoLogo.js";

export default class GoLogoLoController extends AppsterController {
  constructor() {
    super();
  }

  processEditText() {
    this.model.updateText();
  }

  processEnterButton = () => {
    var a = document.getElementById(
      AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD
    ).value;
    // check if len of text is less than 1
    if (a.length < 1) {
      this.model.view.showIllegalNameModal();
    }
    for (let i = 0; i < this.model.recentWork.length; i++) {
      let name = this.model.recentWork[i];
      if (a === name.getName()) {
        this.model.view.showConfirmNameModal();
      }
    }
    var b = new GoLogoLoLogo(a);
    this.model.prependWork(b);
    //Clears textfield
    document.getElementById(
      AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD
    ).value = "";
    this.model.view.hideCreateNewWorkModal(); //Hides text input dialog
  };
}
