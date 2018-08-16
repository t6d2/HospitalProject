
function CloneBtnPerson(entry, isNewPatient) {

  var container = document.getElementById('id_btns_container')
  let item = document.getElementById('id_btn_person_0');
  cloneItem = item.cloneNode(true);
  cloneItem.setAttribute('href', "#content-btn_person_" + entry.id)
  cloneItem.id= "id_btn_person_" + entry.id
  container.appendChild(cloneItem);

  UpdateButtonPerson(entry, 0)

  item = document.getElementById('id_content-btn_person_0');
  cloneItem = item.cloneNode(true);
  cloneItem.setAttribute('id', "id_content-btn_person_" + entry.id);
  container.appendChild(cloneItem);

  contentPatientElement = document.body.querySelector('#id_content-btn_person_' + entry.id)
  contentPatientElement.querySelector('#id_photoFile_0').setAttribute('id', 'id_photoFile_' + entry.id)
  contentPatientElement.querySelector('a').setAttribute('href', '#id_photoFile_' + entry.id)
  contentPatientElement.querySelector('a').setAttribute('onclick', "document.getElementById('id_photoFile_" + entry.id + "').click(); return false")
  contentPatientElement.querySelector('a').childNodes[1].setAttribute('src', entry.imgSource)
  contentPatientElement.querySelector('#id_form_patient_0').setAttribute('id', 'id_form_patient_' + entry.id)
  contentPatientElement.querySelector('#id_button_add_service_0').setAttribute('id', 'id_button_add_service_' + entry.id)

  //remove default service
  contentPatientElement.querySelector('#id_btn_service_0_0').remove()
  contentPatientElement.querySelector('#id_content-btn_service_0_0').remove()
  
    UpdatePersonFieldsPage(entry)
   
  if(isNewPatient){
    var elem = document.getElementById('id_content-btn_person_' + entry.id);
    document.getElementById(elem.id).style.display = 'block';
    elem = document.getElementById('id_btn_person_' + entry.id);
    document.getElementById(elem.id).style.display = 'inline-flex';
    document.getElementById(elem.id).className = 'btn_btn-person active'
    // elem = document.getElementById('id_button_add_service_' + entry.id);
    document.getElementById('id_button_add_service_' + entry.id).style.display = 'none';
    

  }
}

function UpdateButtonPerson(entry, idCurrent) {

  let contentPatientElement = document.body.querySelector('#id_btn_person_' + entry.id)

  let elementToModify = contentPatientElement.querySelector('#p_id_fullName_' + idCurrent);
  elementToModify.innerHTML = entry.fullName
  elementToModify.setAttribute('id', 'p_id_fullName_' + entry.id)
  var month = (1 + entry.birthDate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  var day = entry.birthDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  var dateString = day + "/" + month + "/" + entry.birthDate.getFullYear()
  elementToModify = contentPatientElement.querySelector('#p_id_birthDate_' + idCurrent);
  elementToModify.innerHTML = dateString
  elementToModify.setAttribute('id', 'p_id_birthDate_' + entry.id)
  elementToModify = contentPatientElement.querySelector('#p_id_servicesNumber_' + idCurrent);
  elementToModify.innerHTML = entry.servicesNumber
  elementToModify.setAttribute('id', 'p_id_servicesNumber_' + entry.id)

}

function UpdatePersonFieldsPage(entry){

  for(var key in entry){

    let elementCreated = document.body.querySelector('#id_content-btn_person_' + entry.id).querySelector('.class_input_' + key);
    if(elementCreated != null){

      if(key == 'birthDate'){
        month = (1 + entry[key].getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        day = entry[key].getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        dateString = entry[key].getFullYear() + "-" + month + "-" + day
        elementCreated.setAttribute('value', dateString)
      } else if(key != 'imgSource'){
        elementCreated.setAttribute('value', entry[key])
      }
      elementCreated.id = 'id_' + key + '_' + entry.id

    }
  }

  let $div =  document.body.querySelector('#id_content-btn_person_' + entry.id).querySelector('#id_btn_patient_update_0')
  $div.setAttribute('id', 'id_btn_patient_update_' + entry.id)
  
}

function CloneServices(entry) {

  // remove all services
  let $contenitor = $("#id_content-btn_person_" + entry.id).find("button[id^='id_btn_service_']")
  if($contenitor.length > 0){
    $contenitor.remove()
  }
  $contenitor = $("#id_content-btn_person_" + entry.id).find("div[id^='id_content-btn_service_']")
  if($contenitor.length > 0){
    $contenitor.remove()
  }

  if(entry.servicesNumber == 0){
    return
  }
 
  //create first service from default 0_0
  let elementCloned = $('#id_btn_service_0_0').clone(true).attr('id', 'id_btn_service_' + entry.id + '_' + 1)

  $('#id_content-btn_person_' + entry.id).append(elementCloned)
  document.getElementById('id_btn_service_' + entry.id + '_' + 1).setAttribute('href', '#id_content-btn_service_' + entry.id + '_' + 1)
  document.getElementById('id_btn_service_' + entry.id + '_' + 1).innerHTML = "Servizio " + 1
 
  $('#id_content-btn_person_' + entry.id).append($('#id_content-btn_service_0_0').clone(true).attr('id', 'id_content-btn_service_' + entry.id + '_' + 1))
  elements = $('#id_content-btn_service_' + entry.id + '_' + 1).find('*[id$=_0_0]');
  for(let j = 0; j < elements.length; j++){
    elements[j].id = elements[j].id.replace('_0_0', '_' + entry.id + '_' + 1)
  }
  
  AddListener(document.getElementById("id_btn_service_" + entry.id + "_" + 1))

  LoadServiceDetail(entry, 1)

  //clone services if > 1
  if (entry.servicesNumber > 1) {
    for (let i=2; i <= entry.servicesNumber; i++){
      $('#id_btn_service_' + entry.id + '_' + (i-1)).clone(true).attr('id', 'id_btn_service_' + entry.id + '_' + i).insertAfter('#id_content-btn_service_' + entry.id + '_' + (i-1));
      document.getElementById('id_btn_service_' + entry.id + '_' + i).setAttribute('href', '#id_content-btn_service_' + entry.id + '_' + i)
      document.getElementById('id_btn_service_' + entry.id + '_' + i).innerHTML = "Servizio " + i

      $('#id_content-btn_service_' + entry.id + '_' + (i-1)).clone(true).attr('id', 'id_content-btn_service_' + entry.id + '_' + i).insertAfter('#id_btn_service_' + entry.id + '_' + i);
      elements = $('#id_content-btn_service_' + entry.id + '_' + i).find('*[id$=_' + entry.id + '_' + (i-1) + ']');
      for(let j = 0; j < elements.length; j++){
        elements[j].id = elements[j].id.replace('_' + entry.id + '_' + (i-1) , '_' + entry.id + '_' + i)
      }
      AddListener(document.getElementById("id_btn_service_" + entry.id + "_" + i))

      LoadServiceDetail(entry, i)

    }
  }
}

function LoadServiceDetail(entry, serviceNumber) {

  // $("#id_select_service_" + entry.id + "_" + serviceNumber + " option:contains(" + entry.servicesList[serviceNumber-1].dptName  +")").attr("selected", true)
  
  month = (1 + entry.servicesList[serviceNumber-1].serviceDate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  day = entry.servicesList[serviceNumber-1].serviceDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  dateString = entry.servicesList[serviceNumber-1].serviceDate.getFullYear() + "-" + month + "-" + day
  
  if(entry.servicesList[serviceNumber-1].serviceType == "visita") {
    $("#id_select_service_" + entry.id + "_" + serviceNumber + " > optgroup[id='id_optGroup_visits']")
    .find("option:contains(" + entry.servicesList[serviceNumber-1].dptName  +")")
      .attr("selected","selected");
    document.body.querySelector('#id_visitDate_' + entry.id + '_' + serviceNumber)
      .setAttribute('value', dateString)
    document.body.querySelector('#id_visitNotes_' + entry.id + '_' + serviceNumber)
      .value = entry.servicesList[serviceNumber-1].serviceNotes
    $("#id_visitConditions_" + entry.id + "_" + serviceNumber + " option:contains(" + entry.servicesList[serviceNumber-1].serviceConditions  +")").attr("selected", true)
    
  } else {
    $("#id_select_service_" + entry.id + "_" + serviceNumber + " > optgroup[id='id_optGroup_surgeries']")
    .find("option:contains(" + entry.servicesList[serviceNumber-1].dptName  +")")
      .attr("selected","selected");
    document.body.querySelector('#id_surgeryDate_' + entry.id + '_' + serviceNumber)
      .setAttribute('value', dateString)
    elementCreated = document.body.querySelector('#id_surgeryNotes_' + entry.id + '_' + serviceNumber)
      .value =  entry.servicesList[serviceNumber-1].serviceNotes
    $("#id_surgeryConditions_" + entry.id + "_" + serviceNumber + " option:contains(" + entry.servicesList[serviceNumber-1].serviceConditions  +")").attr("selected", true)

  }

  //set selectedItem service 
  $("#id_select_service_" + entry.id + "_" + serviceNumber).change(); 
  // set selectedItem doctor
  let doctorCompletName = doctors.find(item=>item.id==entry.servicesList[serviceNumber-1].doctorId).completeName;
  $("#id_select_doctor_" + entry.id + "_" + serviceNumber + " option:contains(" + doctorCompletName  +")").attr("selected", true)

}

function ServicesSelectPopulate () {

  let depArray = Array.from(departments)
  for(i = 0; i < depArray.length; i++) {
    let option = document.createElement("option")
    option.setAttribute('Value', depArray[i].id)
    option.text = depArray[i].dptName;
    document.body.querySelector('#id_optGroup_visits').appendChild(option);

    if(depArray[i].surgeryDoctorsList.length > 0){
      option = document.createElement("option")
      option.setAttribute('Value', depArray[i].id)
      option.text = depArray[i].dptName;
      document.body.querySelector('#id_optGroup_surgeries').appendChild(option);
    }
  }
}

function DoctorsSelectPopulate (doctorsArraySelect, id_content_service) {

  //remove all options 
   let $div = document.body.querySelector('#' + id_content_service).querySelector('#id_optGroup_doctors')
  $($div).find("option").remove()
  //populate
  let depArray = Array.from(departments)
  for(i = 0; i < doctorsArraySelect.length; i++) {
    let option = document.createElement("option")
    option.setAttribute('Value', doctorsArraySelect[i][0])
    option.text = doctorsArraySelect[i][1]
    $div.appendChild(option)
  }
  $(document.body.querySelector('#' + id_content_service).querySelector('select[id^="id_select_doctor_"]')).val(null)
}

function UpdatePatientObjectData(inputArray, idPatient) {
  
  var patientToUpdate = patients.find(item=>item.id==idPatient);
  for(var i in inputArray)
    patientToUpdate[inputArray[i].name] = inputArray[i].value

    var dateObject = new Date(patientToUpdate.birthDate);
    patientToUpdate.birthDate = dateObject

  UpdateButtonPerson(patientToUpdate, idPatient)
}

function UpdatePatientObjectServiceData(inputArray, idPatient, idService) {

  var patientToUpdate = patients.find(item=>item.id==idPatient);
  // var serviceToUpdate = patientToUpdate.servicesList.find(item=>item.serviceId==idService);
  for(var i in inputArray)
    patientToUpdate.servicesList[idService-1][inputArray[i].name] = inputArray[i].value

  var dateObject = new Date(patientToUpdate.servicesList[idService-1].serviceDate);
  patientToUpdate.servicesList[idService-1].serviceDate = dateObject

}

function CreateNewPatient(){

  let newPatientId= Math.max(...patients.map(o => o.id)) + 1
  patients.push(new Patient(newPatientId, '','', '', new Date(), '', '', '','', 0, 'images/patients_photos/.jpg' ));

  CloneBtnPerson(patients[patients.length-1], true)

  AddListener(document.getElementById("id_btn_person_" + newPatientId))
  console.log(0,patients)
}

function CreateNewService(patientID) {
  
  patientIndex = patients.findIndex(x => x.id == patientId)
  console.log(patientID, patientIndex)
  let newSeviceId= Math.max(...patients[patientIndex].servicesList.map(o => o.serviceId)) + 1
  console.log(newSeviceId)
}

// main
var departments = []
departments.push(new Department(0,'generale', [25, 26, 27, 28], []))
departments.push(new Department(1,'cardiologia', [1, 2, 3], [2,3]))
departments.push(new Department(2,'dermatologia', [4, 5], []))
departments.push(new Department(3,'geriatria',  [18, 19], []))
departments.push(new Department(4,'neurologia', [20,21], [21]))
departments.push(new Department(5,'nefrologia', [16, 17], []))
departments.push(new Department(6,'oculistica', [6, 7, 8], [6,7]))
departments.push(new Department(7,'oncologia', [9, 10], []))
departments.push(new Department(8,'ortopedia',[22, 23, 24],[22, 23]))
departments.push(new Department(9,'otorinolaringoiatria', [11, 12, 13],[12, 13]))
departments.push(new Department(10,'pneumologia', [14, 15], []))

var doctors = []
doctors.push(new Doctor(1, 'Dott.','Albino', 'Arnaldi', 'cardiologia'))
doctors.push(new Doctor(2, 'Prof.','Bruno', 'Brunetti', 'cardiologia'))
doctors.push(new Doctor(3, 'Dott.ssa','Carla', 'Carlini', 'cardiologia'))
doctors.push(new Doctor(4, 'Dott.ssa','Daniela', 'Dandini', 'dermatolgia'))
doctors.push(new Doctor(5, 'Dott.ssa','Enrico', 'Ellero', 'dermatolgia'))
doctors.push(new Doctor(6, 'Dott','Elio', 'Evani', 'oculistica'))
doctors.push(new Doctor(7, 'Prof.','Fabrizio', 'Folli', 'oculistica'))
doctors.push(new Doctor(8, 'Dott.ssa','Gabriella', 'Gatti', 'oculistica'))
doctors.push(new Doctor(9, 'Dott.','Ivano', 'Ius', 'oncologia'))
doctors.push(new Doctor(10, 'Dott.','Lorenzo', 'Limi', 'oncologia'))
doctors.push(new Doctor(11, 'Dott.','Mauro', 'Milani', 'otorinolaringoiatria'))
doctors.push(new Doctor(12, 'Dott.','Nevio', 'Nuvo', 'otorinolaringoiatria'))
doctors.push(new Doctor(13, 'Prof.','Ottorino', 'Olli', 'otorinolaringoiatria'))
doctors.push(new Doctor(14, 'Dott.','Piero', 'Pezzi', 'pneumologia'))
doctors.push(new Doctor(15, 'Dott.ssa','Paola', 'Poletti', 'pneumologia'))
doctors.push(new Doctor(16, 'Dott.ssa','Roberta', 'Renzulli', 'nefrologia'))
doctors.push(new Doctor(17, 'Dott.','Sandro', 'Soleri', 'nefrologia'))
doctors.push(new Doctor(18, 'Dott.','Toni', 'Timi', 'geriatria'))
doctors.push(new Doctor(19, 'Dott.','Umberto', 'Ullu', 'geriatria'))
doctors.push(new Doctor(20, 'Dott.','Valerio', 'Valeri', 'neurologia'))
doctors.push(new Doctor(21, 'Dott.','Zeno', 'Zani', 'neurologia'))
doctors.push(new Doctor(22, 'Dott.','Artemio', 'Arti', 'ortopedia'))
doctors.push(new Doctor(23, 'Prof.','Manlio', 'Manin', 'ortopedia'))
doctors.push(new Doctor(24, 'Dott.','Piero', 'Podi', 'ortopedia'))
doctors.push(new Doctor(25, 'Dott.','Alessio', 'Albi', 'generale'))
doctors.push(new Doctor(26, 'Dott.','Carlo', 'Cori', 'generale'))
doctors.push(new Doctor(27, 'Dott.','Danilo', 'Dondi', 'generale'))
doctors.push(new Doctor(28, 'Dott.','Fabio', 'Fabi', 'generale'))

var patients = [];
patients.push(new Patient(1,'Mario','Rossi', 'maschio',new Date("1973-10-21"), 'Piazza Garibaldi',11,'Udine',33100, 2, 'images/patients_photos/mario_rossi.jpg' ));
patients.push(new Patient(2, 'Andrea','Bianchi', 'maschio',new Date("1980-03-23"), 'Via Roma',10,'Udine',33100, 1, 'images/patients_photos/andrea_bianchi.jpg' ));
patients.push(new Patient(3, 'Anna','Rosi', 'femmina',new Date("1982-04-11"), 'Via Matteotti',13,'Cividale del Friuli',33043, 3, 'images/patients_photos/anna_rosi.jpg' ));

patients[0].addService(new PatientService(1, 'oculistica', 7, 'visita','Buona salute',new Date("2018-00-15"), 'Miopia, prescrizione occhiali', ''))
patients[0].addService(new PatientService(2, 'oculistica', 6, 'visita','Qualche acciacco', new Date("2018-03-20"), 'Irritazione continua agli occhi, prescritte gocce giornaliere',''))
patients[1].addService(new PatientService(1, 'generale', 26,'visita','Salute cagionevole',new Date("2018-02-04"), 'Pressione alta prescritte pillole - giramenti di testa dovuti alla cervicale ', ''))
patients[2].addService(new PatientService(1, 'ortopedia', 23,'visita','Buona salute',new Date("2018-02-07"), 'Ginocchio in condizioni critiche prevedere intervento', ''))
patients[2].addService(new PatientService(2, 'nefrologia', 16,'visita','Qualche acciacco',new Date("2018-04-11"), 'Dolori persistenti zona renale - prescritta ecografia', ''))
patients[2].addService(new PatientService(3, 'cardiologia', 3,'intervento','Complicazioni',new Date("2018-07-20"), 'Eseguito intervento con bypass - anestesia più lunga del previsto dovuta a complicaziioni . Prognosi riservata', ''))
patients.sort(dynamicSort("fullName"));

 // populate dropdown services
 ServicesSelectPopulate()
// create person section
for(entry of patients)
  CloneBtnPerson(entry, false)

var elem = document.getElementById('id_content-btn_person_0');
document.getElementById(elem.id).style.display = 'none';
elem = document.getElementById('id_btn_person_0');
document.getElementById(elem.id).style.display = 'none';

var buttonClasses =  Array.from(document.getElementsByClassName("btn_btn-person"))
for (let i = 0; i < buttonClasses.length; i++) 
  AddListener(buttonClasses[i])
 // end main 


function AddListener($elem) {
  $elem.addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;

    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
        content.style.display = "block";
    }
  })
}

$('select[id^=id_select_service_]').on('change', function(){
  var selected = $("option:selected", this);
  let idPatient = this.id.substring(/\d/.exec(this.id).index, (this.id).lastIndexOf('_'))
  let idService = this.id.substring((this.id).lastIndexOf('_') + 1)

  selected.parent()[0].label=="Visite"?$("tr[id^='id_tr_visit_" + idPatient + '_' + idService + "']").show(): $("tr[id='id_tr_visit_" + idPatient + '_' + idService + "']").hide();
  selected.parent()[0].label=="Interventi"?$("tr[id^='id_tr_surgery_" + idPatient + '_' + idService + "']").show(): $("tr[id^='id_tr_surgery_" + idPatient + '_' + idService + "']").hide();

  // create array with doctors available for selected service
  let dptsArray = Array.from(departments)
  let doctorsArray = Array.from(doctors)
  let doctorsArraySelect = []
  let servicesArray = []

  if(selected.parent()[0].label=="Visite")
    servicesArray = dptsArray[this.value].visitDoctorsList
  if(selected.parent()[0].label=="Interventi")
    servicesArray = dptsArray[this.value].surgeryDoctorsList
  if(servicesArray.length > 0){
    for(i=0; i < servicesArray.length; i++)
      doctorsArraySelect.push([doctorsArray[servicesArray[i]-1].id, doctorsArray[servicesArray[i]-1].completeName])
  }

  DoctorsSelectPopulate(doctorsArraySelect, 'id_content-btn_service_' + idPatient + '_' + idService)

});

function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

$('.btn_btn-person').click (function() {
  id = parseInt(this.id.substr(this.id.lastIndexOf('_') + 1));
  var entry = patients.find(entry => entry.id === id)

  CloneServices(entry)
})

$(document).on('click', ".class_btn_patient_update", function () {
  console.log(1,patients)
  idPatient = parseInt(this.id.substr(this.id.lastIndexOf('_') + 1));
  let inputArray = $('#id_form_patient_' + idPatient).serializeArray()

  var form = document.getElementById('id_form_patient_' + idPatient);
  for(var i=0; i < form.elements.length; i++){
    if(form.elements[i].value.trim() == '' && form.elements[i].hasAttribute('required')){
      form.elements[i].value = " "
      console.log(form.elements[i])
      alert('I campi evidenziati devono essere compilati!!');
      return false;
    }
  }

  UpdatePatientObjectData(inputArray, idPatient)
  
  alert("Dati del paziente aggiornati!!")
  document.getElementById('id_button_add_service_' + idPatient).style.display = 'initial'

});

$('.class_btn_service_update').click(function () {
  let service = "visit"
  if(this.id.indexOf("surgery") != -1)
    service = "surgery"

  let idPatient = this.id.substring(/\d/.exec(this.id).index, (this.id).lastIndexOf('_'))
  let idService = this.id.substring((this.id).lastIndexOf('_') + 1)
  
  let inputArray =[]
  inputArray.push({ 
    name: 'dptName',
    value: $("#id_select_service_" + idPatient + '_' + idService + " option:selected").text() 
  });
  inputArray.push({ 
    name: 'doctorId',
    value: parseInt($("#id_select_doctor_" + idPatient + '_' + idService + " option:selected").val())
  });
  inputArray.push({ 
    name: 'serviceType',
    value: (service == 'visit') ? 'visita' : 'intervento'
  });
  inputArray.push({ 
    name: 'serviceConditions',
    value: $("#id_" + service + "Conditions_" + idPatient + '_' + idService + " option:selected").text() 
  });
  inputArray.push({ 
    name: 'serviceDate',
    value: $("#id_" + service + "Date_" + idPatient + '_' + idService).val() 
  });
  inputArray.push({ 
    name: 'serviceNotes',
    value: $("#id_" + service + "Notes_" + idPatient + '_' + idService).val() 
  });

  UpdatePatientObjectServiceData(inputArray, idPatient, idService)

  alert("Dati del servizio aggiornati!!")
});


function changePhoto(elem) {
  if (elem.files && elem.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#id_photo_image')
              .attr('src', e.target.result);
      };

      reader.readAsDataURL(elem.files[0]);
      let items = document.getElementById(elem.parentNode.id).childNodes
      items[5].childNodes[1].setAttribute('src', "images/patients_photos/" + elem.files[0].name)
  }
}

$('#id_button_add_patient').click(function(){
  
   CreateNewPatient()  
   
})

$(document).on('click', ".btn_add_service", function () {
  patientId = parseInt(this.id.substr(this.id.lastIndexOf('_') + 1));
  CreateNewService(patientId)  
})
