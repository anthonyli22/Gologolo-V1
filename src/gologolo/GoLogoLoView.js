import {
  GoLogoLoGUIClass,
  GoLogoLoGUIId,
  GoLogoLoText
} from "./GoLogoLoConstants.js";
import {
  AppsterHTML,
  AppsterSymbols,
  AppsterGUIId,
  AppsterGUIClass
} from "../appster/AppsterConstants.js";
import AppsterView from "../appster/AppsterView.js";

export default class GoLogoLoView extends AppsterView {
  constructor() {
    super();
  }

  loadRoot(appData) {
    let appsterRootDiv = document.getElementById(AppsterGUIId.APPSTER_ROOT_DIV);
    if (!appsterRootDiv) {
      // AN ERROR HAS OCCURED, PROVIDE FEEDBACK
      let errorMessage = this.getAppText(
        AppsterText.MISSING_ROOT_DIV_ERROR_TEXT
      );
      console.error(errorMessage);
      appsterRootDiv.innerHTML = errorMessage;
    } else {
      // LOAD TEXT FROM THE JSON FILE INTO THE APPROPRIATE UI CONTROLS
      this.loadAppsterText(appData);

      // LOAD THE APPSTER UI
      let appsterHomeScreenDiv = this.buildAppsterHomeScreenDiv();
      let appsterEditScreenDiv = this.buildAppsterEditScreenDiv();
      let appsterYesNoModal = this.buildAppsterYesNoModal();
      let appsterConfirmModal = this.buildAppsterConfirmModal();
      let appsterTextInputModal = this.buildAppsterTextInputModal();

      let appsterIllegalNameModal = this.buildAppsterIllegalNameModal(); //custom change
      let gologoEditTextModal = this.buildEditTextModal(); // ^

      appsterRootDiv.appendChild(appsterHomeScreenDiv);
      appsterRootDiv.appendChild(appsterEditScreenDiv);
      appsterRootDiv.appendChild(appsterYesNoModal);
      appsterRootDiv.appendChild(appsterConfirmModal);
      appsterRootDiv.appendChild(appsterTextInputModal);

      appsterRootDiv.appendChild(appsterIllegalNameModal);
      appsterRootDiv.appendChild(gologoEditTextModal);
      // HIDE THE THINGS THAT ARE NOT VISIBLE
      this.showElementWithId(AppsterGUIId.APPSTER_EDIT_SCREEN, false);
    }
  }
  fillAppWorkspace(workspace) {
    let colorPickerAttributes = [];
    colorPickerAttributes[AppsterHTML.TYPE] = AppsterHTML.COLOR;
    let rangeAttributes = [];
    rangeAttributes[AppsterHTML.TYPE] = AppsterHTML.RANGE;

    // FIRST MAKE THE TOOLBAR
    let toolbar = this.buildElement(
      AppsterHTML.DIV,
      GoLogoLoGUIId.GOLOGOLO_TOOLBAR
    );
    let editTextButton = this.buildElement(
      AppsterHTML.BUTTON,
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_BUTTON,
      [],
      [],
      GoLogoLoText.GOLOGOLO_EDIT_TEXT_TEXT
    );
    editTextButton.value = AppsterSymbols.EDIT; //changed from .innerHTML to .value
    let fontSizeSlider = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER,
      [],
      rangeAttributes
    );
    let textColorPicker = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER,
      [],
      colorPickerAttributes
    );
    let backgroundColorPicker = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER,
      [],
      colorPickerAttributes
    );
    let borderColorPicker = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER,
      [],
      colorPickerAttributes
    );
    let borderRadiusSlider = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER,
      [],
      rangeAttributes
    );
    let borderThicknessSlider = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_BORDER_THICKNESS_SLIDER,
      [],
      rangeAttributes
    );
    let paddingSlider = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER,
      [],
      rangeAttributes
    );
    let marginSlider = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER,
      [],
      rangeAttributes
    );
    let textDiv = this.buildElement(
      AppsterHTML.DIV,
      GoLogoLoGUIId.GOLOGOLO_TEXT
    );
    let promptClass = [GoLogoLoGUIClass.GOLOGOLO_CONTROL_PROMPT];
    toolbar.appendChild(editTextButton);
    toolbar.appendChild(this.buildElement(AppsterHTML.BR));
    toolbar.appendChild(
      this.buildElement(
        AppsterHTML.SPAN,
        "",
        promptClass,
        [],
        GoLogoLoText.GOLOGOLO_FONT_SIZE_TEXT
      )
    );
    toolbar.appendChild(fontSizeSlider);
    toolbar.appendChild(this.buildElement(AppsterHTML.BR));
    toolbar.appendChild(
      this.buildElement(
        AppsterHTML.SPAN,
        "",
        promptClass,
        [],
        GoLogoLoText.GOLOGOLO_TEXT_COLOR_TEXT
      )
    );
    toolbar.appendChild(textColorPicker);
    toolbar.appendChild(this.buildElement(AppsterHTML.BR));
    toolbar.appendChild(
      this.buildElement(
        AppsterHTML.SPAN,
        "",
        promptClass,
        [],
        GoLogoLoText.GOLOGOLO_BACKGROUND_COLOR_TEXT
      )
    );
    toolbar.appendChild(backgroundColorPicker);
    toolbar.appendChild(this.buildElement(AppsterHTML.BR));
    toolbar.appendChild(
      this.buildElement(
        AppsterHTML.SPAN,
        "",
        promptClass,
        [],
        GoLogoLoText.GOLOGOLO_BORDER_COLOR_TEXT
      )
    );
    toolbar.appendChild(borderColorPicker);
    toolbar.appendChild(this.buildElement(AppsterHTML.BR));
    toolbar.appendChild(
      this.buildElement(
        AppsterHTML.SPAN,
        "",
        promptClass,
        [],
        GoLogoLoText.GOLOGOLO_BORDER_RADIUS_TEXT
      )
    );
    toolbar.appendChild(borderRadiusSlider);
    toolbar.appendChild(this.buildElement(AppsterHTML.BR));
    toolbar.appendChild(
      this.buildElement(
        AppsterHTML.SPAN,
        "",
        promptClass,
        [],
        GoLogoLoText.GOLOGOLO_BORDER_THICKNESS_TEXT
      )
    );
    toolbar.appendChild(borderThicknessSlider);
    toolbar.appendChild(this.buildElement(AppsterHTML.BR));
    toolbar.appendChild(
      this.buildElement(
        AppsterHTML.SPAN,
        "",
        promptClass,
        [],
        GoLogoLoText.GOLOGOLO_PADDING_TEXT
      )
    );
    toolbar.appendChild(paddingSlider);
    toolbar.appendChild(this.buildElement(AppsterHTML.BR));
    toolbar.appendChild(
      this.buildElement(
        AppsterHTML.SPAN,
        "",
        promptClass,
        [],
        GoLogoLoText.GOLOGOLO_MARGIN_TEXT
      )
    );
    toolbar.appendChild(marginSlider);

    workspace.appendChild(toolbar);
    workspace.appendChild(textDiv);
    return workspace;
  }

  loadWork(work) {
    let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
    textDiv.innerHTML = work.getText();
    let fontSizeSlider = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_FONT_SIZE_SLIDER
    );
    fontSizeSlider.value = work.getFontSize();
    let textColorPicker = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_TEXT_COLOR_PICKER
    );
    textColorPicker.value = work.getTextColor();
    let backgroundColorPicker = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_BACKGROUND_COLOR_PICKER
    );
    backgroundColorPicker.value = work.getBackgroundColor();
    let borderColorPicker = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_BORDER_COLOR_PICKER
    );
    borderColorPicker.value = work.getBorderColor();
    let borderRadiusSlider = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER
    );
    borderRadiusSlider.value = work.getBorderRadius();
    let borderThicknessSlider = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_BORDER_RADIUS_SLIDER
    );
    borderThicknessSlider.value = work.getBorderThickness();
    let paddingSlider = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_PADDING_SLIDER
    );
    paddingSlider.value = work.getPadding();
    let marginSlider = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_MARGIN_SLIDER
    );
    marginSlider.value = work.getMargin();
    this.loadWorkStyle(work);
  }

  loadWorkStyle(work) {
    let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
    textDiv.style.fontSize = work.getFontSize() + "px";
    textDiv.style.color = work.getTextColor();
    textDiv.style.backgroundColor = work.getBackgroundColor();
    textDiv.style.borderColor = work.getBorderColor();
    textDiv.style.borderRadius = work.getBorderRadius() + "px";
    textDiv.style.borderWidth = work.getBorderThickness() + "px";
    textDiv.style.margin = work.getMargin() + "px";
    textDiv.style.padding = work.getPadding() + "px";
  }

  addListItem(initText) {
    let textList = document.getElementById(RTA_GUIId.RTA_TEXT_LIST);
    let listItemCount = textList.childNodes.length;
    let newListItem = this.buildElement(
      AppsterHTML.LI,
      RTA_GUIId.RTA_TEXT_LIST_ITEM + listItemCount
    );
    newListItem.innerHTML = initText;
    textList.appendChild(newListItem);
  }

  appendLetter(listItemId, letterToAppend) {
    let textList = document.getElementById(listItemId);
    textList.innerHTML += textList.innerHTML + letterToAppend;
  }

  //NEW STUFF
  setupHandlers() {}

  buildEditTextModal() {
    let editTextModal = this.buildElement(
      AppsterHTML.DIV,
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL,
      [AppsterGUIClass.APPSTER_MODAL],
      [],
      null,
      AppsterGUIClass.MODAL_ANIMATION_LEFT
    );
    let editTextFrame = this.buildElement(
      AppsterHTML.DIV,
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_FRAME,
      [AppsterGUIClass.APPSTER_MODAL_FRAME]
    );
    let header = this.buildElement(
      AppsterHTML.HEADER,
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_HEADER,
      [AppsterGUIClass.APPSTER_MODAL_HEADER]
    );
    let section = this.buildElement(
      AppsterHTML.SECTION,
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_SECTION,
      [AppsterGUIClass.APPSTER_MODAL_SECTION]
    );
    let p = this.buildElement(AppsterHTML.P);
    let strong = this.buildElement(
      AppsterHTML.STRONG,
      "",
      [],
      [],
      GoLogoLoText.GOLOGOLO_EDIT_TEXT_MODAL_PROMPT_TEXT
    );
    let textFieldAttributes = [];
    textFieldAttributes[AppsterHTML.TYPE] = AppsterHTML.TEXT;
    let textField = this.buildElement(
      AppsterHTML.INPUT,
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_TEXTFIELD,
      [AppsterGUIClass.APPSTER_MODAL_TEXTFIELD],
      textFieldAttributes
    );
    let enterButton = this.buildElement(
      AppsterHTML.BUTTON,
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_ENTER_BUTTON,
      [AppsterGUIClass.APPSTER_MODAL_BUTTON],
      [],
      GoLogoLoText.GOLOGOLO_EDIT_TEXT_MODAL_ENTER_BUTTON_TEXT
    );
    let cancelButton = this.buildElement(
      AppsterHTML.BUTTON,
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL_CANCEL_BUTTON,
      [AppsterGUIClass.APPSTER_MODAL_BUTTON],
      [],
      GoLogoLoText.GOLOGOLO_EDIT_TEXT_MODAL_CANCEL_BUTTON_TEXT
    );
    let footer = this.buildElement(
      AppsterHTML.FOOTER,
      "",
      [AppsterGUIClass.APPSTER_MODAL_FOOTER],
      [],
      GoLogoLoText.GOLOGOLO_EDIT_TEXT_MODAL_FOOTER_TEXT
    );
    p.appendChild(strong);
    section.appendChild(p);
    editTextFrame.appendChild(header);
    editTextFrame.appendChild(section);
    section.appendChild(textField);
    section.appendChild(enterButton);
    section.appendChild(cancelButton);
    editTextFrame.appendChild(footer);
    editTextModal.appendChild(editTextFrame);
    return editTextModal;
  }

  updateText(work) {
    let textDiv = document.getElementById(GoLogoLoGUIId.GOLOGOLO_TEXT);
    textDiv.style.text = work.getText();
  }

  showEditTextModal() {
    let dialog = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL
    );
    dialog.classList.add(AppsterGUIClass.IS_VISIBLE);
  }

  hideEditTextModal() {
    let dialog = document.getElementById(
      GoLogoLoGUIId.GOLOGOLO_EDIT_TEXT_MODAL
    );
    dialog.classList.remove(AppsterGUIClass.IS_VISIBLE);
  }
}
