
function CloneBtnPerson(entry) {

  var container = document.getElementById('id_btns_container')
  let item = document.getElementById('id_btn_person_0');
  cloneItem = item.cloneNode(true);
  cloneItem.setAttribute('href', "#content-btn_person_" + entry.id)
  cloneItem.id= "id_btn_person_" + entry.id
  container.appendChild(cloneItem);

  UpdateButtonPerson(entry, 0)

  item = document.getElementById('content-btn_person_0');
  cloneItem = item.cloneNode(true);
  cloneItem.setAttribute('id', "content-btn_person_" + entry.id);
  container.appendChild(cloneItem);

  contentPatientElement = document.body.querySelector('#content-btn_person_' + entry.id)
  contentPatientElement.querySelector('#id_photoFile_0').setAttribute('id', 'id_photoFile_' + entry.id)
  contentPatientElement.querySelector('a').setAttribute('href', '#id_photoFile_' + entry.id)
  contentPatientElement.querySelector('a').setAttribute('onclick', "document.getElementById('id_photoFile_" + entry.id + "').click(); return false")
  contentPatientElement.querySelector('a').childNodes[1].setAttribute('src', entry.imgSource)
  contentPatientElement.querySelector('#id_form_patient_0').setAttribute('id', 'id_form_patient_' + entry.id)

  UpdatePersonFieldsPage(entry)
  
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
    // console.log('#content-btn_person_' + entry.id, 'class_input_' + key)
    let elementCreated = document.body.querySelector('#content-btn_person_' + entry.id).querySelector('.class_input_' + key);

    if(elementCreated != null){

      if(key == 'birthDate'){
        month = (1 + entry[key].getMonth()).toString();
        month = month.length > 1 ? month : '0' + month;
        day = entry[key].getDate().toString();
        day = day.length > 1 ? day : '0' + day;
        dateString = entry[key].getFullYear() + "-" + month + "-" + day
        // elementCreated.setAttribute('value', entry[key])
        elementCreated.setAttribute('value', dateString)
      } else if(key != 'imgSource'){
        elementCreated.setAttribute('value', entry[key])
      }
      elementCreated.id = 'id_' + key + '_' + entry.id

    }
  }

  let $div =  document.body.querySelector('#content-btn_person_' + entry.id).querySelector('#id_btn_patient_update_0')
  $div.setAttribute('id', 'id_btn_patient_update_' + entry.id)
  $div =  document.body.querySelector('#content-btn_person_' + entry.id).querySelector('#id_btn_service_0_0')
  $div.setAttribute('href', '#id_content-btn_service_' + entry.id + '_1')
  $div.setAttribute('id', 'id_btn_service_' + entry.id + '_1')
  
}



function CloneServices(entry) {

  let divName = "id_content-btn_service_" + entry.id + '_'
  let buttonName = "id_btn_service_" + entry.id + '_'

  if(entry.servicesNumber == 0){
    for (i = 1; i<= $divs.length; i++){
      elem = document.getElementById(divName + i);
      elem.parentNode.removeChild(elem);
      elem = document.getElementById(buttonName + i);
      elem.parentNode.removeChild(elem);
    }
    return
  }

  // if serviceNumber ==1 , service already created by default in function UpdatePersonFieldsTable
  // delete service except the first
  let $divs = $('button[id^="id_btn_service_' + entry.id + '"]');
  for (i = 2; i<= $divs.length; i++){
    elem = document.getElementById(divName + i);
    elem.parentNode.removeChild(elem);
    elem = document.getElementById(buttonName + i);
    elem.parentNode.removeChild(elem);
  }

  //first
  let elements = $('#' + 'content-btn_person_' + entry.id).find('*[id$="_0"]');
  for(let i = 0; i < elements.length; i++){
    if(elements[i].id.endsWith('_0_0')){
      elements[i].id = elements[i].id.replace('_0_0', '_' + entry.id + '_1')
    } else {
      elements[i].id = elements[i].id.replace('_0', '_1')
    }
  }

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

      LoadServiceDetail(entry, i)
    }
  }
}

function LoadServiceDetail(entry, serviceNumber) {

  console.log(entry, serviceNumber, entry.servicesList, entry.servicesList[serviceNumber-1])
  console.log(entry.servicesList[serviceNumber-1].dptName)
  $("#id_select_service_" + entry.id + "_" + serviceNumber + " option:contains(" + entry.servicesList[serviceNumber-1].dptName  +")").attr("selected", true)

  month = (1 + entry.servicesList[serviceNumber-1].serviceDate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  day = entry.servicesList[serviceNumber-1].serviceDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  dateString = entry.servicesList[serviceNumber-1].serviceDate.getFullYear() + "-" + month + "-" + day
  
  if(entry.servicesList[serviceNumber-1].type == "visita") {
    document.body.querySelector('#id_visitDate_' + entry.id + '_' + serviceNumber)
      .setAttribute('value', dateString)
    document.body.querySelector('#id_visitNotes_' + entry.id + '_' + serviceNumber)
      .value = entry.servicesList[serviceNumber-1].serviceNotes
    $("#id_visitConditions_" + entry.id + "_" + serviceNumber + " option:contains(" + entry.servicesList[serviceNumber-1].healthConditions  +")").attr("selected", true)
    $("tr[id^='id_tr_visit_" + entry.id + '_' + serviceNumber + "']").show()
    $("tr[id^='id_tr_surgery_" + entry.id + '_' + serviceNumber + "']").hide();
    // $("#id_visitConditions_" + entry.id + "_" + serviceNumber + " option[text='" + entry.servicesList[serviceNumber-1].healthConditions +"']").attr("selected","selected")
  } else {
    document.body.querySelector('#id_surgeryDate_' + entry.id + '_' + serviceNumber)
      .setAttribute('value', dateString)
    elementCreated = document.body.querySelector('#id_surgeryNotes_' + entry.id + '_' + serviceNumber)
      .value =  entry.servicesList[serviceNumber-1].serviceNotes
    $("#id_surgeryConditions_" + entry.id + "_" + serviceNumber + " option:contains(" + entry.servicesList[serviceNumber-1].healthConditions  +")").attr("selected", true)
    $("tr[id^='id_tr_visit_" + entry.id + '_' + serviceNumber + "']").hide()
    $("tr[id^='id_tr_surgery_" + entry.id + '_' + serviceNumber + "']").show()
  }

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

  //remove all options except the first
   let $div = document.body.querySelector('#' + id_content_service).querySelector('#id_optGroup_doctors')
  $($div).find("option").remove()

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
  // console.log(0, patients)
  for(var i in inputArray)
    patientToUpdate[inputArray[i].name] = inputArray[i].value

    var dateObject = new Date(patientToUpdate.birthDate);
    patientToUpdate.birthDate = dateObject
  //  console.log('data', dateObject, patientToUpdate.birthDate)

  UpdateButtonPerson(patientToUpdate, idPatient)
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


patients[0].addService(new PatientService('oculistica','visita','Buona salute',new Date("2018-00-15"), 'Miopia, prescrizione occhiali', ''))
patients[0].addService(new PatientService('oculistica','visita','Qualche acciacco', new Date("2018-03-20"), 'Irritazione continua agli occhi, prescritte gocce giornaliere',''))
patients[1].addService(new PatientService('generale','visita','Salute cagionevole',new Date("2018-02-04"), 'Pressione alta prescritte pillole - giramenti di testa dovuti alla cervicale ', ''))
patients[2].addService(new PatientService('ortopedia','visita','Buona salute',new Date("2018-02-07"), 'Ginocchio in condizioni critiche prevedere intervento', ''))
patients[2].addService(new PatientService('neurologia','visita','Qualche acciacco',new Date("2018-04-11"), 'Problemi di deambulazione - prescritte analisi più accurate', ''))
patients[2].addService(new PatientService('cardiologia','intervento','Condizioni gravi',new Date("2018-07-20"), 'Eseguito intervento con bypass - anestesia più lunga del previsto dovuta a complicaziioni . Prognosi riservata', ''))
patients.sort(dynamicSort("fullName"));

 // populate dropdown services
 ServicesSelectPopulate()

for(entry of patients)
  CloneBtnPerson(entry)

var elem = document.getElementById('content-btn_person_0');
document.getElementById(elem.id).style.display = 'none';
elem = document.getElementById('id_btn_person_0');
document.getElementById(elem.id).style.display = 'none';

var buttonClassPerson = document.getElementsByClassName("btn_btn-person");
var buttonClassService = document.getElementsByClassName("btn_btn-service");
var buttonClasses =  Array.from(buttonClassPerson).concat(Array.from(buttonClassService))
var i
for (i = 0; i < buttonClasses.length; i++) {

    buttonClasses[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var content = this.nextElementSibling;

      if (content.style.display === "block") {
          content.style.display = "none";
      } else {
          content.style.display = "block";
      }
  });

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
  var idTag = this.id
  id = parseInt(idTag.substr(idTag.lastIndexOf('_') + 1));
  var entry = patients.find(entry => entry.id === id)

  CloneServices(entry)
})

$('.class_btn_patient_update').click(function () {
  var idTag = this.id
  idPatient = parseInt(idTag.substr(idTag.lastIndexOf('_') + 1));
  // var entry = patients.find(entry => entry.id === id)

  let inputArray = $('#id_form_patient_' + idPatient).serializeArray()
  
  UpdatePatientObjectData(inputArray, idPatient)
});


function changePhoto(elem) {

  let parentElement = elem.parentNode

  // console.log(1, elem, parentElement)
  if (elem.files && elem.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
          $('#id_photo_image')
              .attr('src', e.target.result);
      };
      // console.log(elem.files[0])
      reader.readAsDataURL(elem.files[0]);
      let items = document.getElementById(elem.parentNode.id).childNodes
      items[5].childNodes[1].setAttribute('src', "images/patients_photos/" + elem.files[0].name)
  }
}

