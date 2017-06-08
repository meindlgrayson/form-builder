var signUp = document.querySelector('#sign-up');

for (i = 0; i < formData.length; i++){
  if(formData[i].type == 'select'){
    console.log('select');
    var newSelect = document.createElement('select');
    newSelect.id = formData[i].id;
    newSelect.label = formData[i].label;
    signUp.appendChild(newSelect);
    for(j = 0; j < formData[i].options.length; j++){
      console.log('working');
      var newOption = document.createElement('option');
      newOption.label = formData[i].options[j].label;
      newOption.value = formData[i].options[j].value;
      newSelect.appendChild(newOption);
    }
  } else {
    var newField = document.createElement('input');
      newField.type = formData[i].type;
      newField.label = formData[i].label;
      newField.className = 'fa';
      newField.placeholder = formData[i].label;
      // newField.placeholder = formData[i].icon[1];
      newField.id = formData[i].id;
      newField.icon = formData[i].icon;
      newField.options = formData[i].option;
      signUp.appendChild(newField);
  }
}
