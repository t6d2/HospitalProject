class Person
{
  constructor(id, name, surname) {
    this.id = id
    this.name = name
    this.surname = surname
   
  } 

  get fullName() {
    return this.surname + " " + this.name
  }
}

class Patient extends Person {
  constructor(id, name, surname, gender, birthDate, address, number, city, zip, servicesNumber, imgSource) {
      super(id, name, surname)
      this.gender = gender
      this.birthDate = birthDate
      this.address = address
      this.number = number
      this.city = city
      this.zip = zip
      this.servicesNumber = servicesNumber
      this.imgSource = imgSource
      this.servicesList = []
    }

    addService(service) {
      this.servicesList.push(service);
    }
}

class Doctor extends Person {
  constructor(id, title, name, surname, department) {
    super(id, name, surname)
    this.title = title
    this.department = department

    }

    get completeName(){
      return this.title + " " + this.name + " " + this.surname
    }
}

class Department
{
  constructor(id, dptName, visitDoctorsList, surgeryDoctorsList, ) {
    this.id = id
    this.dptName = dptName
    this.visitDoctorsList = visitDoctorsList
    this.surgeryDoctorsList = surgeryDoctorsList
  } 
  
}

class PatientService {
  constructor(serviceId, dptName, doctorId, serviceType, serviceConditions, serviceDate, serviceNotes, bypassNumber, heartValvesNumber, stitchesNumber, metalPlatesNumber){
    this.serviceId = serviceId
    this.dptName = dptName
    this.doctorId = doctorId
    this.serviceType = serviceType
    this.serviceConditions = serviceConditions
    this.serviceDate = serviceDate
    this.serviceNotes = serviceNotes
    this.pointsList = [
      {surgeryElement: 'bypassNumber', number: bypassNumber}, 
      {surgeryElement: 'heartValvesNumber', number: heartValvesNumber},
      {surgeryElement: 'stitchesNumber', number: stitchesNumber}, 
      {surgeryElement: 'metalPlatesNumber', number: metalPlatesNumber}]  
  }
}
