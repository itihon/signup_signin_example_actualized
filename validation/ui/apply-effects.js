import { applyAccess, applyOutline, applyBox, renderFirstError } from 'isomorphic-validation/ui';

const errMsgEID = 'ERROR_MSG';

const errMsg = {
  false: { value: renderFirstError('err'), delay: 2000 },
  position: 'BELOW_CENTER',
  mode: 'MAX_SIDE',
  style: {
    color: 'firebrick',
    fontSize: '12px',
  }
};

const applyEffects = (validationProfile) => {
  const [form, groupingValidation] = validationProfile;
  
  groupingValidation.validations.forEach(
    (validation, idx) => validation
      .client
      .validated(applyOutline(form[idx].parentNode))
      .changed(applyOutline(form[idx].parentNode)) // needed for glued validations
      .started(applyBox(form[idx].parentNode, errMsgEID))
      .validated(applyBox(errMsg, form[idx].parentNode, errMsgEID))
  );

  groupingValidation
    .client
    .changed(applyAccess(form.submitBtn));

  form.addEventListener('input', groupingValidation);
};

export default applyEffects;