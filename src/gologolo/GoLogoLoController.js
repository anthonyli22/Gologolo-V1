import { AppsterGUIId, AppsterHTML } from "../appster/AppsterConstants.js";
import AppsterController from "../appster/AppsterController.js";
import GoLogoLoLogo from "../gologolo/GoLogoLoLogo.js";
import { GoLogoLoGUIId, GoLogoLoCallback } from "./GoLogoLoConstants.js";

export default class GoLogoLoController extends AppsterController {
  constructor() {
    super();
  }

  processEditText() {
    console.log("processEditText");
    this.model.updateText();
  }

  registerAppsterEventHandlers() {
    super.registerAppsterEventHandlers();
    this.registerEventHandler(
      GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER,
      AppsterHTML.CHANGE,
      this[GoLogoLoCallback.GOLOGOLO_PROCESS_CHANGE_TEXT_COLOR]
    );
    this.registerEventHandler(
      GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER,
      AppsterHTML.CHANGE,
      this[GoLogoLoCallback.GOLOGOLO_PROCESS_BACKGROUND_COLOR]
    );
    this.registerEventHandler(
      GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER,
      AppsterHTML.CHANGE,
      this[GoLogoLoCallback.GOLOGOLO_PROCESS_BORDER_COLOR]
    );
    this.registerEventHandler(
      GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER,
      AppsterHTML.CHANGE,
      this[GoLogoLoCallback.GOLOGOLO_PROCESS_RADIUS_SLIDER]
    );
    this.registerEventHandler(
      GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER,
      AppsterHTML.CHANGE,
      this[GoLogoLoCallback.GOLOGOLO_PROCESS_FONT_SIZE_SLIDER]
    );
    this.registerEventHandler(
      GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER,
      AppsterHTML.CHANGE,
      this[GoLogoLoCallback.GOLOGOLO_PROCESS_THICKNESS_SLIDER]
    );
    this.registerEventHandler(
      GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER,
      AppsterHTML.CHANGE,
      this[GoLogoLoCallback.GOLOGOLO_PROCESS_MARGIN_SLIDER]
    );
    this.registerEventHandler(
      GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER,
      AppsterHTML.CHANGE,
      this[GoLogoLoCallback.GOLOGOLO_PROCESS_PADDING_SLIDER]
    );
  }

  processEnterButton = () => {
    var a = document.getElementById(
      AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD
    ).value;
    // check if len of text is less than 1
    if (a.length < 1) {
      this.model.view.showIllegalNameModal();
    } else {
      var bool = false;
      for (let i = 0; i < this.model.recentWork.length; i++) {
        let name = this.model.recentWork[i];
        if (a === name.getName()) {
          this.model.view.showConfirmNameModal();
          bool = true;
        }
      }
      if (!bool) {
        var b = new GoLogoLoLogo(a);
        this.model.prependWork(b);
        this.model.view.goToEditScreen();
      }
    }
    //Clears textfield
    document.getElementById(
      AppsterGUIId.APPSTER_TEXT_INPUT_MODAL_TEXTFIELD
    ).value = "";
    this.model.view.hideCreateNewWorkModal(); //Hides text input dialog
  };

  processChangeTextColor = () => {
    console.log("change text color");
    var a = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER);
    //console.log(a);
    //console.log(this.model);
    this.model.recentWork[0].setTextColor(a.value);
    this.model.view.loadWorkStyle(this.model.recentWork[0]);
  };

  processBackgroundColor = () => {
    console.log("change background color");
    var a = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER
    );
    //console.log(a);
    //console.log(this.model);
    this.model.recentWork[0].setBackgroundColor(a.value);
    this.model.view.loadWorkStyle(this.model.recentWork[0]);
  };

  /**
   * Might need work!
   */
  processBorderColor = () => {
    console.log("change border color!!!");
    var a = document.getElementById(GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER);
    console.log(a.value);
    //console.log(this.model);
    this.model.recentWork[0].setBorderColor(a.value);
    this.model.view.loadWorkStyle(this.model.recentWork[0]);
  };

  processRadiusSlider = () => {
    console.log("processRadiusSlider");
    var a = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER
    );
    this.model.recentWork[0].setBorderRadius(a.value);
    this.model.view.loadWorkStyle(this.model.recentWork[0]);
  };

  processFontSizeSlider = () => {
    console.log("processFontSizeSlider");
    var a = document.getElementById(GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER);
    this.model.recentWork[0].setFontSize(a.value);
    this.model.view.loadWorkStyle(this.model.recentWork[0]);
  };

  processThicknessSlider = () => {
    console.log("processThicknessSlider");
    var a = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER
    );
    this.model.recentWork[0].setBorderThickness(a.value);
    this.model.view.loadWorkStyle(this.model.recentWork[0]);
  };

  processPaddingSlider = () => {
    console.log("processPaddingSlider");
    var a = document.getElementById(GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER);
    this.model.recentWork[0].setPadding(a.value);
    this.model.view.loadWorkStyle(this.model.recentWork[0]);
  };

  processMarginSlider = () => {
    console.log("processMarginSlider");
    var a = document.getElementById(GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER);
    this.model.recentWork[0].setMargin(a.value);
    this.model.view.loadWorkStyle(this.model.recentWork[0]);
  };
}
