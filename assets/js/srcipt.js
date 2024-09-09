function Paciente (nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;
}

  //Requerimiento 2
function Paciente (nombre, edad, rut, diagnostico) {
    let _nombre = nombre;
    let _edad = edad;
    let _rut = rut;
    let _diagnostico = diagnostico;
    
    //Getter para nombre
    this.obtenerNombre = function(){
    return _nombre;
    }
    //Setter para nombre
    this.cambiarNombre = function(nuevoNombre){
    if(typeof nuevoNombre === 'string' && nuevoNombre.length > 0){
        _nombre = nuevoNombre;
    } else {
        console.log("Por favor ingresa un nombre válido")  
    }
    }
      //Getter para edad
    this.obtenerEdad = function(){
    return _edad;
    }
    //Setter para edad
    this.cambiarEdad = function(nuevaEdad){
    _edad = nuevaEdad;
    }
    //Getter para rut
    this.obtenerRut = function(){
    return _rut;
    }
    //Setter para rut
    this.cambiarRut = function(nuevoRut){
    _rut = nuevoRut;
    }
      //Getter para diagnostico
    this.obtenerDiagnostico = function(){
    return _diagnostico;
    }
    //Setter para diagnostico
    this.cambiarDiagnostico = function(nuevoDiagnostico){
    _diagnostico = nuevoDiagnostico;
    }
}

  //Requerimiento 3
  //3a. Buscar por nombre
Paciente.prototype.buscarPorNombre = function(nombre) {
    return this.obtenerNombre() === nombre ? this.mostrarDatos() : null;
}
  //3b. Mostrar todos los datos
Paciente.prototype.mostrarDatos = function() {
    return `Nombre: ${this.obtenerNombre()}, Edad: ${this.obtenerEdad()}, Rut: ${this.obtenerRut()}, Diagnóstico: ${this.obtenerDiagnostico()}`
}

  //Requerimiento 4
let p1 = new Paciente("Alexander", 32, "16897653-K", "Sano");
  // console.log(p1.obtenerNombre());
let p2 = new Paciente("Martin", 3, "26786543-1", "Gripe")
  // console.log(p1);
  // p1.cambiarNombre("Joaquin");
console.log(p1.obtenerNombre("Alexander"));

  // console.log(p1.mostrarDatos());
  // console.log(p2.mostrarDatos());
  // p1.cambiarNombre("");
