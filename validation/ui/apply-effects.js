import { Validation } from 'isomorphic-validation';
import { applyAccess, applyOutline, applyBox, renderFirstError } from 'isomorphic-validation/ui';

const delayedOutline = {
  false: { delay: 2000, value: '2px solid lightpink' },
  true: { delay: 500, value: '' },
};

const delayedAccess = {
  true: { delay: 600 },
};

const changedOutline = {
  false: { value: '2px solid lightpink' },
  true: { delay: 500, value: '' },
};

const editIcon = {
  false: { value: '🖊' },
  true: { value: '🖊' },
  position: 'LEVEL_RIGHT',
};

const validIcon = {
  false: { delay: 1000, value: '' },
  true: { delay: 500, value: '✔' },
  position: 'LEVEL_RIGHT_BESIDE',
  style: { color: 'green', left: '-8px' },
};

const errMsg = {
  false: { delay: 2000, value: renderFirstError('err') },
  position: 'BELOW_CENTER',
  mode: 'MAX_SIDE',
  style: { color: 'firebrick', fontSize: '12px', padding: '4px' },
};

const applyEffects = (validationProfile) => {
  const [form, groupingValidation] = validationProfile;

  form.addEventListener(
    'input',
    Validation.group(
      groupingValidation.validations.map(
        (validation, idx) => {

          const iconEID = form[idx].name + 'icon';
          const errMsgEID = form[idx].name + 'error';
        
          return validation
            .client
            .validated(applyOutline(form[idx].parentNode, delayedOutline))
            .changed(applyOutline(form[idx].parentNode, delayedOutline)) // needed for glued validations
            .changed(applyOutline(form[idx].parentNode, changedOutline))
            .started(applyBox(form[idx].parentNode, editIcon, iconEID))
            .validated(applyBox(form[idx].parentNode, validIcon, iconEID))
            .changed(applyBox(form[idx].parentNode, validIcon, iconEID)) // needed for glued validations
            .validated(applyBox(form[idx].parentNode, errMsg, errMsgEID))
            .changed(applyBox(form[idx].parentNode, errMsg, errMsgEID)); // nedded for glued validations
        }
      )
    )
    .client
    .changed(applyAccess(form.submitBtn, delayedAccess))
  );
};

export default applyEffects;