// main
var departments = []
departments.push(new Department(0,'Generale', [25, 26, 27, 28], []))
departments.push(new Department(1,'Cardiologia', [1, 2, 3], [2,3]))
departments.push(new Department(2,'Dermatologia', [4, 5], []))
departments.push(new Department(3,'Geriatria',  [18, 19], []))
departments.push(new Department(4,'Neurologia', [20,21], [21]))
departments.push(new Department(5,'Nefrologia', [16, 17], []))
departments.push(new Department(6,'Oculistica', [6, 7, 8], [6,7]))
departments.push(new Department(7,'Oncologia', [9, 10], []))
departments.push(new Department(8,'Ortopedia',[22, 23, 24],[22, 23]))
departments.push(new Department(9,'Otorinolaringoiatria', [11, 12, 13],[12, 13]))
departments.push(new Department(10,'Pneumologia', [14, 15], []))

var doctors = []
doctors.push(new Doctor(1, 'Dott.', 'Albino', 'Arnaldi', 'Cardiologia'))
doctors.push(new Doctor(2, 'Prof.', 'Bruno', 'Brunetti', 'Cardiologia'))
doctors.push(new Doctor(3, 'Dott.ssa', 'Carla', 'Carlini', 'Cardiologia'))
doctors.push(new Doctor(4, 'Dott.ssa', 'Daniela', 'Dandini', 'Dermatolgia'))
doctors.push(new Doctor(5, 'Dott.ssa', 'Enrico', 'Ellero', 'Dermatolgia'))
doctors.push(new Doctor(6, 'Dott', 'Elio', 'Evani', 'Oculistica'))
doctors.push(new Doctor(7, 'Prof.', 'Fabrizio', 'Folli', 'Oculistica'))
doctors.push(new Doctor(8, 'Dott.ssa', 'Gabriella', 'Gatti', 'Oculistica'))
doctors.push(new Doctor(9, 'Dott.', 'Ivano', 'Ius', 'Oncologia'))
doctors.push(new Doctor(10, 'Dott.', 'Lorenzo', 'Limi', 'Oncologia'))
doctors.push(new Doctor(11, 'Dott.', 'Mauro', 'Milani', 'Otorinolaringoiatria'))
doctors.push(new Doctor(12, 'Dott.', 'Nevio', 'Nuvo', 'Otorinolaringoiatria'))
doctors.push(new Doctor(13, 'Prof.', 'Ottorino', 'Olli', 'Otorinolaringoiatria'))
doctors.push(new Doctor(14, 'Dott.', 'Piero', 'Pezzi', 'Pneumologia'))
doctors.push(new Doctor(15, 'Dott.ssa', 'Paola', 'Poletti', 'Pneumologia'))
doctors.push(new Doctor(16, 'Dott.ssa', 'Roberta', 'Renzulli', 'Nefrologia'))
doctors.push(new Doctor(17, 'Dott.', 'Sandro', 'Soleri', 'Nefrologia'))
doctors.push(new Doctor(18, 'Dott.', 'Toni', 'Timi', 'Geriatria'))
doctors.push(new Doctor(19, 'Dott.', 'Umberto', 'Ullu', 'Geriatria'))
doctors.push(new Doctor(20, 'Dott.', 'Valerio', 'Valeri', 'Neurologia'))
doctors.push(new Doctor(21, 'Dott.', 'Zeno', 'Zani', 'Neurologia'))
doctors.push(new Doctor(22, 'Dott.', 'Artemio', 'Arti', 'Ortopedia'))
doctors.push(new Doctor(23, 'Prof.', 'Manlio', 'Manin', 'Ortopedia'))
doctors.push(new Doctor(24, 'Dott.','Piero', 'Podi', 'Ortopedia'))
doctors.push(new Doctor(25, 'Dott.','Alessio', 'Albi', 'Generale'))
doctors.push(new Doctor(26, 'Dott.','Carlo', 'Cori', 'Generale'))
doctors.push(new Doctor(27, 'Dott.','Danilo', 'Dondi', 'Generale'))
doctors.push(new Doctor(28, 'Dott.','Fabio', 'Fabi', 'Generale'))

var patients = [];
patients.push(new Patient(1,'Mario','Rossi', 'maschio',new Date("1973-10-21"), 'Piazza Garibaldi',11,'Udine',33100, 3, 'images/patients_photos/mario_rossi.jpg' ));
patients.push(new Patient(2, 'Andrea','Bianchi', 'maschio',new Date("1980-03-23"), 'Via Roma',10,'Udine',33100, 1, 'images/patients_photos/andrea_bianchi.jpg' ));
patients.push(new Patient(3, 'Anna','Rosi', 'femmina',new Date("1982-04-11"), 'Via Matteotti',13,'Cividale del Friuli',33043, 3, 'images/patients_photos/anna_rosi.jpg' ));
patients.push(new Patient(4, 'Luisa','Verdi', 'femmina',new Date("1984-11-12"), 'Via Matteotti',13,'Pasian di Prato',33037, 2, 'images/patients_photos/luisa_verdi.jpg' ));

patients[0].addService(new PatientService(1, 'Oculistica', 7, 'visita','Buona salute',new Date("2018-01-15"), 'Miopia, prescrizione occhiali', 0,0,0,0))
patients[0].addService(new PatientService(2, 'Oculistica', 6, 'visita','Qualche acciacco', new Date("2018-03-18"), 'Irritazione continua agli occhi, prescritte gocce giornaliere', 0,0,0,0))
patients[0].addService(new PatientService(3, 'Otorinolaringoiatria', 11, 'visita', 'Buona salute', new Date("2018-05-28"), 'Orecchie otturate - Eseguita pulizia', 0,0,0,0))
patients[1].addService(new PatientService(1, 'Generale', 26, 'visita','Salute cagionevole',new Date("2018-02-04"), 'Pressione alta prescritte pillole - giramenti di testa dovuti alla cervicale ', 0,0,0,0))
patients[2].addService(new PatientService(1, 'Ortopedia', 23, 'visita','Salute cagionevole',new Date("2018-02-07"), 'Ginocchio in condizioni critiche prevedere intervento', 0,0,0,0))
patients[2].addService(new PatientService(2, 'Nefrologia', 16, 'visita','Qualche acciacco',new Date("2018-04-11"), 'Dolori persistenti zona renale - prescritta ecografia', 0,0,0,0))
patients[2].addService(new PatientService(3, 'Cardiologia', 3, 'intervento','Complicazioni',new Date("2018-07-20"), 'Eseguito intervento con bypass - anestesia più lunga del previsto dovuta a complicaziioni . Prognosi riservata', 2,3,30,0))
patients[3].addService(new PatientService(1, 'Ortopedia', 22, 'visita','Qualche acciacco',new Date("2018-03-21"), 'Anca sinistra non in buone condizioni - prescritta risonanaza', 0,0,0,0))
patients[3].addService(new PatientService(2, 'Ortopedia', 23, 'intervento','Successo',new Date("2018-06-21"), 'Inserita protesi anca sinistra - decorso operatorio normale', 0,0,25,2))

PatientsFullNameSort()

 // populate dropdown services
 ServicesSelectPopulate()
// create person section
for(entry of patients)
  CloneBtnPerson(entry, false)
// hide deafult sections
$("#id_content-btn_person_0").css("display","none");
$("#id_btn_person_0").css("display","none");

var buttonClasses =  Array.from($(".btn_btn-person"))
for (let i = 0; i < buttonClasses.length; i++) {
  AddListener(buttonClasses[i])
}
 // end main 

function PatientsFullNameSort() {
  patients.sort(function(a, b){
    if (a.fullName.toLowerCase() < b.fullName.toLowerCase())
        return -1;
    if (a.fullName.toLowerCase() > b.fullName.toLowerCase())
        return 1;
    else
        return 0;
  });
}

function ServicesSelectPopulate () {
  let depArray = Array.from(departments)
  for(i = 0; i < depArray.length; i++) {
    $('#id_optGroup_visits').append("<option Value=" + depArray[i].id +">" + depArray[i].dptName + "</option>");

    if(depArray[i].surgeryDoctorsList.length > 0)
      $('#id_optGroup_surgeries').append("<option Value=" + depArray[i].id +">" + depArray[i].dptName + "</option>");
  }
}

function CloneBtnPerson(entry, isNewPatient) {
  //clone default button  and content sections
  $('#id_btn_person_0').clone(true).attr({
      'href': '#content-btn_person_' + entry.id,
      'id': 'id_btn_person_' + entry.id}).appendTo('#id_btns_container')
 
  UpdateButtonPerson(entry, 0)

  $('#id_content-btn_person_0').clone(true).attr(
    'id', 'id_content-btn_person_' + entry.id).appendTo('#id_btns_container')

  $('#id_content-btn_person_' + entry.id + ' #id_photoFile_0').attr('id', 'id_photoFile_' + entry.id); 
  $('#id_content-btn_person_' + entry.id + ' a').attr({
      'href': '#id_photoFile_' + entry.id,
      'onclick': "document.getElementById('id_photoFile_" + entry.id + "').click(); return false"
    })
  $('#id_content-btn_person_' + entry.id + ' img').attr('src', entry.imgSource);   
  $('#id_content-btn_person_' + entry.id + ' #id_form_patient_0').attr('id', 'id_form_patient_' + entry.id)
  $('#id_content-btn_person_' + entry.id + ' #id_button_add_service_0').attr('id', 'id_button_add_service_' + entry.id)
 
  //remove default service from the content_person cloned
  $('#id_content-btn_person_' + entry.id + ' #id_content-btn_service_0_0').remove()
  $('#id_content-btn_person_' + entry.id + ' #id_buttons_service_container_0_0').remove()
  
  UpdatePersonFieldsPage(entry)
   
  if(isNewPatient){
    $('#id_content-btn_person_' + entry.id).css('display','block');
    $('#id_btn_person_' + entry.id).css('display','inline-flex');
    $('#id_btn_person_' + entry.id).attr('class','btn_btn-person active');
  } else if (entry.servicesNumber == 0)
    //if ServicesNumber = 0 display Button Add Service on Person Data 
    $('#id_button_add_service_' + entry.id).css('display','block');
}

function UpdateButtonPerson(entry, idCurrent) {
  $('#id_btn_person_' + entry.id + ' #p_id_fullName_' + idCurrent).html(entry.fullName)
  $('#id_btn_person_' + entry.id + ' #p_id_fullName_' + idCurrent).attr('id', 'p_id_fullName_' + entry.id)

  let dateString = ""
  if(entry.birthDate.toDateString() != new Date().toDateString()){
    let month = (1 + entry.birthDate.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = entry.birthDate.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    dateString = day + "/" + month + "/" + entry.birthDate.getFullYear()
  }

  $('#id_btn_person_' + entry.id + ' #p_id_birthDate_' + idCurrent).html(dateString)
  $('#id_btn_person_' + entry.id + ' #p_id_birthDate_' + idCurrent).attr('id', 'p_id_birthDate_' + entry.id)

  $('#id_btn_person_' + entry.id + ' #p_id_servicesNumber_' + idCurrent).html(entry.servicesNumber)
  $('#id_btn_person_' + entry.id + ' #p_id_servicesNumber_' + idCurrent).attr('id', 'p_id_servicesNumber_' + entry.id)
}

function UpdatePersonFieldsPage(entry){
  for(let key in entry){

    let elementCreated = document.body.querySelector('#id_content-btn_person_' + entry.id).querySelector('.class_input_' + key);
    if(elementCreated != null){

      if(key == 'birthDate'){
        if(entry[key].toDateString() == new Date().toDateString()){
          dateString = ""
        }          
        else {
          month = (1 + entry[key].getMonth()).toString();
          month = month.length > 1 ? month : '0' + month;
          day = entry[key].getDate().toString();
          day = day.length > 1 ? day : '0' + day;
          dateString = entry[key].getFullYear() + "-" + month + "-" + day
        }
        elementCreated.setAttribute('value', dateString)
      } else if(key != 'imgSource'){
        elementCreated.setAttribute('value', entry[key])
      }
      elementCreated.id = 'id_' + key + '_' + entry.id
    }
  }
  if(entry.gender != "")  
    $("#id_gender_" + entry.id +  " option:contains(" + entry.gender  +")").attr("selected", true)
  else
    $("#id_gender_" + entry.id).attr("selectedIndex", -1);

  $('#id_content-btn_person_' + entry.id+ ' #id_btn_patient_update_0').attr('id', 'id_btn_patient_update_' + entry.id)
}

function CloneServices(entry) {
  // remove all services
  let $contenitor = $("#id_content-btn_person_" + entry.id).find("div[id^='id_buttons_service_container_']")
  if($contenitor.length > 0){
    $contenitor.remove()
  }

  $contenitor = $("#id_content-btn_person_" + entry.id).find("div[id^='id_content-btn_service_']")
  if($contenitor.length > 0){
    $contenitor.remove()
  }
  if(entry.servicesNumber == 0)
    return
  
  //create first service from default 0_0
  CloneDefaultService (entry, 1)

  AddListener($("#id_btn_service_" + entry.id + "_" + 1)[0])
  
  LoadServiceDetail(entry, 1)

  //clone all services from the previous till servicesNumber 
  if (entry.servicesNumber > 1) {
    
    for (let i=2; i <= entry.servicesNumber; i++){
      if (0, entry.servicesList[i-1].dptName != "") {
        $('#id_buttons_service_container_' + entry.id + '_' + (i-1)).clone(true).attr('id', 'id_buttons_service_container_' + entry.id + '_' + i).insertAfter('#id_content-btn_service_' + entry.id + '_' + (i-1));
        $('#id_buttons_service_container_' + entry.id + '_' + i + ' #id_btn_service_' + entry.id + '_' + (i-1)).attr('id', 'id_btn_service_' + entry.id + '_' + i)
        $('#id_btn_service_' + entry.id + '_' + i).attr('href', '#id_content-btn_service_' + entry.id + '_' + i)
        $('#id_btn_service_' + entry.id + '_' + i).html("Servizio " + i)
        $('#id_buttons_service_container_' + entry.id + '_' + i + ' #id_button_add_service_' + entry.id + '_' + (i-1)).attr('id', 'id_button_add_service_' + entry.id + '_' + i)

        $('#id_content-btn_service_' + entry.id + '_' + (i-1)).clone(true).attr('id', 'id_content-btn_service_' + entry.id + '_' + i).insertAfter('#id_buttons_service_container_' + entry.id + '_' + i);
        elements = $('#id_content-btn_service_' + entry.id + '_' + i).find('*[id$=_' + entry.id + '_' + (i-1) + ']');
        
        for(let j = 0; j < elements.length; j++){
          elements[j].id = elements[j].id.replace('_' + entry.id + '_' + (i-1) , '_' + entry.id + '_' + i)
        }
      } else {
        CloneDefaultService (entry, i)
      }
      
      AddListener($("#id_btn_service_" + entry.id + "_" + i)[0])

      LoadServiceDetail(entry, i)

      //hide previous Button Add Service on 
      $('#id_button_add_service_' + entry.id + '_' + (i-1)).css('display','none');
    }
  }
}

function CloneDefaultService (entry, serviceToCreate){
  let elementCloned = $('#id_buttons_service_container_0_0').clone(true).attr('id', 'id_buttons_service_container_' + entry.id + '_' + serviceToCreate)
  $('#id_content-btn_person_' + entry.id).append(elementCloned)
  $('#id_buttons_service_container_' + entry.id + '_' + serviceToCreate + ' #id_btn_service_0_0').attr('id', 'id_btn_service_' + entry.id + '_' + serviceToCreate)
  $('#id_btn_service_' + entry.id + '_' + serviceToCreate).attr('href', '#id_content-btn_service_' + entry.id + '_' + serviceToCreate)
  $('#id_btn_service_' + entry.id + '_' + serviceToCreate).html("Servizio " + serviceToCreate)
  $('#id_buttons_service_container_' + entry.id + '_' + serviceToCreate + ' #id_button_add_service_0_0').attr('id', 'id_button_add_service_' + entry.id + '_' + serviceToCreate)


  $('#id_content-btn_person_' + entry.id).append($('#id_content-btn_service_0_0').clone(true).attr('id', 'id_content-btn_service_' + entry.id + '_' + serviceToCreate))
  elements = $('#id_content-btn_service_' + entry.id + '_' + serviceToCreate).find('*[id$=_0_0]');
  for(let j = 0; j < elements.length; j++){
    elements[j].id = elements[j].id.replace('_0_0', '_' + entry.id + '_' + serviceToCreate)
  }
 
  // following instructions added just for Edge
  $('select[id="id_visitConditions_' + entry.id + '_' + serviceToCreate + '"]').val("")
  $('select[id="id_surgeryConditions_' + entry.id + '_' + serviceToCreate + '"]').val("")
}

function LoadServiceDetail(entry, serviceNumber) {
   let month = (1 + entry.servicesList[serviceNumber-1].serviceDate.getMonth()).toString();
  month = month.length > 1 ? month : '0' + month;
  let day = entry.servicesList[serviceNumber-1].serviceDate.getDate().toString();
  day = day.length > 1 ? day : '0' + day;
  let dateString = entry.servicesList[serviceNumber-1].serviceDate.getFullYear() + "-" + month + "-" + day
  if(entry.servicesList[serviceNumber-1].serviceType == "")
    return
  
  if(entry.servicesList[serviceNumber-1].serviceType == "visita") {
    $("#id_select_service_" + entry.id + "_" + serviceNumber + " > optgroup[id='id_optGroup_visits']")
    .find("option:contains(" + entry.servicesList[serviceNumber-1].dptName  +")")
      .attr("selected","selected");
    $('#id_visitDate_' + entry.id + '_' + serviceNumber).attr('value', dateString)
    $('#id_visitNotes_' + entry.id + '_' + serviceNumber).val(entry.servicesList[serviceNumber-1].serviceNotes)
    let value = $('select[id="id_visitConditions_' + entry.id + '_' + serviceNumber + '"] option:contains("' + entry.servicesList[serviceNumber-1].serviceConditions  + '")').val();
    $('#id_visitConditions_' + entry.id + '_' + serviceNumber).val(value);

  } else {
    $("#id_select_service_" + entry.id + "_" + serviceNumber + " > optgroup[id='id_optGroup_surgeries']")
    .find("option:contains(" + entry.servicesList[serviceNumber-1].dptName  +")")
      .attr("selected","selected");
    $('#id_surgeryDate_' + entry.id + '_' + serviceNumber).attr('value', dateString)
    $('#id_surgeryNotes_' + entry.id + '_' + serviceNumber).val(entry.servicesList[serviceNumber-1].serviceNotes)
    let value = $('select[id="id_surgeryConditions_' + entry.id + '_' + serviceNumber + '"] option:contains("' + entry.servicesList[serviceNumber-1].serviceConditions  + '")').val();
    $('#id_surgeryConditions_' + entry.id + '_' + serviceNumber).val(value);
    for(elem of Array.from(entry.servicesList[serviceNumber-1].pointsList)){
      $('#id_' + elem['surgeryElement'] + '_' + entry.id + '_' + serviceNumber).attr('value', elem['number'])
    }
  }

  //set selectedItem service 
  $("#id_select_service_" + entry.id + "_" + serviceNumber).change(); 
  // set selectedItem doctor
  if(doctors.find(item=>item.id==entry.servicesList[serviceNumber-1].doctorId)!= undefined) {
    let doctorCompletName = doctors.find(item=>item.id==entry.servicesList[serviceNumber-1].doctorId).completeName;
    let value = $('select[id="id_select_doctor_' + entry.id + '_' + serviceNumber + '"] option:contains("' + doctorCompletName  + '")').val();
    $('#id_select_doctor_' + entry.id + '_' + serviceNumber).val(value);
  }
}

function DoctorsSelectPopulate (doctorsArraySelect, id_content_service) {
  //remove all options from select doctor
   $('#' + id_content_service + ' #id_optGroup_doctors').find("option").remove()

  //populate select doctor 
  for(i = 0; i < doctorsArraySelect.length; i++) 
    $('#' + id_content_service + ' #id_optGroup_doctors').append("<option Value=" + doctorsArraySelect[i][0] +">" + doctorsArraySelect[i][1] + "</option>");

  $('#' + id_content_service + ' select[id^="id_select_doctor_"]').val(null)
  $('#' + id_content_service + ' select[id^="id_select_doctor_"]').trigger("focusout")
}

function UpdatePatientObjectData(inputArray, idPatient) {
  let patientToUpdate = patients.find(item=>item.id==idPatient);
  for(let i in inputArray){
    if(inputArray[i].name == "name" || inputArray[i].name == "surname" || inputArray[i].name == "address" || inputArray[i].name == "city"){
      patientToUpdate[inputArray[i].name] = inputArray[i].value.slice(0,1).toUpperCase()+inputArray[i].value.slice(1)
    }
    else {
      patientToUpdate[inputArray[i].name] = inputArray[i].value
    }
  }
  patientToUpdate.imgSource = $('#id_content-btn_person_' + idPatient + ' img').attr('src'); 
  let dateObject = new Date(patientToUpdate.birthDate);
  patientToUpdate.birthDate = dateObject
 
  UpdateButtonPerson(patientToUpdate, idPatient)
}

function UpdatePatientObjectServiceData(inputArray, idPatient, idService) {
  let patientToUpdate = patients.find(item=>item.id==idPatient);

  for(let i in inputArray){
    objIndex = patientToUpdate.servicesList[idService-1].pointsList.findIndex((obj => obj.surgeryElement == [inputArray[i].name]));
    if(objIndex != -1){
      patientToUpdate.servicesList[idService-1].pointsList
        .find(v => v.surgeryElement == [inputArray[i].name]).number= inputArray[i].value
    } else{
      patientToUpdate.servicesList[idService-1][inputArray[i].name] = inputArray[i].value
    }
  }
  
  
  let dateObject = new Date(patientToUpdate.servicesList[idService-1].serviceDate);
  patientToUpdate.servicesList[idService-1].serviceDate = dateObject
}

function CreateNewPatient(newPatientObj){
  let newPatientId= Math.max(...patients.map(o => o.id)) + 1
  patients.push(new Patient(newPatientId, '','', '', new Date(), '', '', '','', 0, 'images/default.jpg'));
  
  CloneBtnPerson(patients[patients.length-1], true)

  AddListener($("#id_btn_person_" + newPatientId)[0])
  newPatientObj.newPatient = newPatientId
}

function CreateNewService(patientId, newServiceObj) {
  patientIndex = patients.findIndex(x => x.id == patientId)
  let newServiceId= Math.max(...patients[patientIndex].servicesList.map(o => o.serviceId)) + 1
  if(newServiceId== -Infinity)
    newServiceId = 1

  patients[patientIndex].servicesNumber = newServiceId

  CloneDefaultService (patients[patientIndex], newServiceId)

  patients[patientIndex].addService(new PatientService(newServiceId, '',null , '','',new Date(), '', 0,0,0,0))
  $('#id_btn_person_' + patientId + ' #p_id_servicesNumber_' + patientId).html(newServiceId)

  
  AddListener($("#id_btn_service_" + patients[patientIndex].id + "_" + newServiceId)[0])

  newServiceObj.newService = newServiceId
}

function AddListener($elem) {
  $elem.addEventListener("click", function() {
    this.classList.toggle("active");
    let idString = this.id
    if(idString.includes('service'))
      var content = this.parentElement.nextElementSibling;
    else
      content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
        content.style.display = "block";
    }
  })
}

$('select[id^=id_select_service_]').on('change', function(){
  
  let selected = $("option:selected", this);
  let idPatient = this.id.substring(/\d/.exec(this.id).index, (this.id).lastIndexOf('_'))
  let idService = this.id.substring((this.id).lastIndexOf('_') + 1)
  selected.parent()[0].label=="Visite"?$("tr[id^='id_tr_visit_" + idPatient + '_' + idService + "']").show(): $("tr[id='id_tr_visit_" + idPatient + '_' + idService + "']").hide();
  selected.parent()[0].label=="Interventi"?$("tr[id^='id_tr_surgery_" + idPatient + '_' + idService + "']").show(): $("tr[id^='id_tr_surgery_" + idPatient + '_' + idService + "']").hide();
 
  // create array with doctors available for selected service
  let dptsArray = Array.from(departments)
  let doctorsArray = Array.from(doctors)
  let doctorsArraySelect = []
  let servicesArray = []

  if(selected.parent()[0].label=="Visite"){
    
    servicesArray = dptsArray[this.value].visitDoctorsList
  }
    
  if(selected.parent()[0].label=="Interventi")
    servicesArray = dptsArray[this.value].surgeryDoctorsList
  if(servicesArray.length > 0){
    for(i=0; i < servicesArray.length; i++)
      doctorsArraySelect.push([doctorsArray[servicesArray[i]-1].id, doctorsArray[servicesArray[i]-1].completeName])
  }

  DoctorsSelectPopulate(doctorsArraySelect, 'id_content-btn_service_' + idPatient + '_' + idService)

  if (this.value > 0)
    $("select[id$='Conditions_" + idPatient + "_" + idService + "']").trigger("focusout")
});

$('.btn_btn-person').click (function() {
  id = parseInt(this.id.substr(this.id.lastIndexOf('_') + 1));
  var entry = patients.find(entry => entry.id === id)

  CloneServices(entry)
})

$(document).on('click', ".class_btn_update_patient", function () {
  let idPatient =  parseInt(this.id.substr(this.id.lastIndexOf('_') + 1));
  let invalidForm = document.querySelector("form[id='id_form_patient_" + idPatient + "']:invalid");
  if (invalidForm) {
    alert('Dati mancanti o non corretti!')
    return false;
  }

  $('id_form_patient_' + idPatient).submit();
  
  let form = Array.from($('#id_form_patient_' + idPatient).find( "input, select"))
  for(var i=0; i < form.length; i++){
    if(form[i].hasAttribute('required') && (form[i].value.trim() == '' || form[i].value == null )){
      form[i].value = ""
      alert('I campi evidenziati devono essere compilati correttamente!');
      $('#' + form[i].id).focus();
      return false;
    }
  }
  let inputArray = $('#id_form_patient_' + idPatient).serializeArray()

  UpdatePatientObjectData(inputArray, idPatient)
  
  alert("Dati del paziente aggiornati!")

  //delete all patients' buttons and contents
  for(entry of patients){
    $("#id_btn_person_" + entry.id).remove()
    $("#id_content-btn_person_" + entry.id).remove()
  }
  // before cloning restore display attribute on default sections
  $('#id_content-btn_person_0').removeAttr("display");
  $('#id_btn_person_0').css('display', 'inline-flex' )
  
  PatientsFullNameSort()

  for(entry of patients){
    CloneBtnPerson(entry, false)
    CloneServices(entry)
  }
  // after cloning set display none on default sections
  $('#id_content-btn_person_0').css('display', 'none' )
  $('#id_btn_person_0').css('display', 'none' )
  
  let buttonClasses =  Array.from($(".btn_btn-person"))
  for (let i = 0; i < buttonClasses.length; i++) 
    AddListener(buttonClasses[i]) 
  
  // click to leave open the patient section
 $('#id_btn_person_' + idPatient)[0].click()
});

$(document).on('click', ".class_btn_update_service", function () {
  let service = "visit"
  if(this.id.indexOf("surgery") != -1)
    service = "surgery"

  let idPatient = this.id.substring(/\d/.exec(this.id).index, (this.id).lastIndexOf('_'))
  let idService = this.id.substring((this.id).lastIndexOf('_') + 1)
  
  let isInputOk = true

  $("id_form_select_service_" + idPatient + "_" + idService).submit();

  let form = Array.from($('#id_form_select_service_' + idPatient + '_' + idService).find( "input, select"))
  for(var i=0; i < form.length; i++){
    if(form[i].hasAttribute('required') && (form[i].value.trim() == '' || form[i].value == null )){
      $('#' + form[i].id).focus();
      isInputOk = false
      form[i].value = ""
      break
    }
  }

  if (isInputOk){
    $("id_form_" + service + "_" + idPatient + "_" + idService).submit();

    let form = Array.from($('#id_form_' + service + '_' + idPatient + '_' + idService).find( "input, select"))
    for(var i=0; i < form.length; i++){
      if(form[i].hasAttribute('required') && (form[i].value.trim() == '' || form[i].value == null )){
        $('#' + form[i].id).focus();
        isInputOk = false
        break
      }
    }
  }

  if(!isInputOk){
    alert('I campi evidenziati devono essere compilati correttamente!');
    return false;
  }

  $('id_form_' + service + '_' + idPatient + '_' + idService).submit();
  let inputArray = $('#id_form_' + service + '_' + idPatient + '_' + idService).serializeArray()

  inputArray.push({ 
    name: 'dptName',
    value: $("#id_select_service_" + idPatient + '_' + idService + " option:selected").text() 
  });
  inputArray.push({ 
    name: 'doctor',
    value: parseInt($("#id_select_doctor_" + idPatient + '_' + idService + " option:selected").val())
  });
  inputArray.push({ 
    name: 'serviceType',
    value: (service == 'visit') ? 'visita' : 'intervento'
  });
  inputArray.find(v => v.name == service + 'Notes').name= 'serviceNotes'
  inputArray.find(v => v.name == service + 'Date').name= 'serviceDate'
  inputArray.find(v => v.name == service + 'Conditions').name= 'serviceConditions'
  inputArray.find(v => v.name == 'serviceConditions').value= $("#id_" + service + "Conditions_" + idPatient + '_' + idService + " option:selected").text() 

  UpdatePatientObjectServiceData(inputArray, idPatient, idService)

  alert("Dati del servizio aggiornati!")
});

function changePhoto(elem) {
  if (elem.files && elem.files[0]) {
      let reader = new FileReader();

      reader.onload = function (e) {
          $('#id_photo_image')
              .attr('src', e.target.result);
      };

      reader.readAsDataURL(elem.files[0]);
      let idPatient = elem.id.substring((elem.id).lastIndexOf('_') + 1)
      $('#id_imgSource_' + idPatient + ' #id_photo_image').attr('src', 'images/patients_photos/' + elem.files[0].name)
  }
}

$(document).on('click', "button[id^=id_btn_person_]", function () {
  let top = $(this).position().top
  currentScroll = $(this).scrollTop();
  $('#id_main_name').animate({
      scrollTop: currentScroll + top 
    }, 1500);
})

$(document).on('click', "button[id^=id_btn_service_]", function () {
  let top = $(this).position().top
  currentScroll = $(this.parentElement).scrollTop();
  $('#id_main_name').animate({
      scrollTop: currentScroll + top 
    }, 1500);
    $('#' + this.parentElement.nextElementSibling.id + ' select[id^="id_select_doctor_"]').trigger("focusout")
})

$('#id_button_add_patient').click(function(){
  let newPatientObj = {newPatient:0}
  CreateNewPatient(newPatientObj)
  $("#id_gender_" + newPatientObj.newPatient).trigger('focusout')

  let divToscroll = $('#id_btn_person_' + newPatientObj.newPatient)
  let top = divToscroll.position().top
  currentScroll = divToscroll.scrollTop();
  $('#id_main_name').animate({
      scrollTop: currentScroll + top 
    }, 1500);
})

$(document).on('click', ".btn_add_service", function () {
  let patientId = this.id.substring(/\d/.exec(this.id).index, (this.id).lastIndexOf('_')) == '_' ?  this.id.substring((this.id).lastIndexOf('_') + 1) : this.id.substring(/\d/.exec(this.id).index, (this.id).lastIndexOf('_'))

  let newServiceObj = {newService:0}
  CreateNewService(patientId, newServiceObj)

  $('#id_btn_service_' + patientId + '_' + newServiceObj.newService).trigger("click")
  $('#id_btn_service_' + patientId + '_' + newServiceObj.newService).addClass('active')
  $('#id_content-btn_service_' + patientId + '_' + newServiceObj.newService).attr('class','collapse in')
  $('#id_content-btn_service_' + patientId + '_' + newServiceObj.newService).css('display','block')
    
  $("html, main").scrollTop($('#id_btn_service_' + patientId + '_' + newServiceObj.newService).offset().top);
  $("#id_select_service_" + patientId + '_' + newServiceObj.newService).trigger("focusout")
  $("#id_select_doctor_" + patientId + '_' + newServiceObj.newService).trigger("focusout")

  //hide Button AddService on PersonData section or on previous Button Service
  if (newServiceObj.newService  == 1)
    $('#id_button_add_service_' + patientId).css('display','none');
  else
    $('#id_button_add_service_' + patientId + '_' + (newServiceObj.newService - 1)).css('display','none');
})

$(document).on('change', "input, date, select", function (e) {
   CheckInput($(this), e)
})

$(document).on('focusout', "input, date, select", function (e) {
  CheckInput($(this), e)
})

function CheckInput(inputElement, e) {
  inputElement.css('border', '');
  if (e.currentTarget.value == '' || e.currentTarget.value == null) {        
    inputElement.next().html('Campo obbligatorio!');
    inputElement.css('border','2px inset red');
  }
}
