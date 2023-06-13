import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidationErrors } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Auto } from 'src/app/models/auto';
import { AutoServiceService } from 'src/app/services/auto.service.service';
import { Chofer } from '../../models/chofer';
import { ChoferService } from '../../services/chofer.service';

@Component({
  selector: 'app-auto-list',
  templateUrl: './auto-list.component.html',
  styleUrls: ['./auto-list.component.scss']
})
export class AutoListComponent {

  constructor(private autoService: AutoServiceService, private choferService: ChoferService, private modalService: NgbModal) {}
  public autos : Auto[] = []
  public choferes : Chofer[] = []

  auto = new Auto
  autoForm : FormGroup

  id: number

  inputId: number
  inputPlate = ""

  getCars() {
    this.autoService.getAll().subscribe(response => {
      this.autos = response 
    }, error => {
      alert ("No se pudieron obtener los autos")})
    }
  
  getChoferes() {
     this.choferService.getAll().subscribe(response => {
      this.choferes = response 
    }, error => {
      alert ("No se pudieron obtener los choferes")})
  }

  ngOnInit() : void{  
    this.auto.plate = ''
    this.autoForm = new FormGroup({
      'plate' : new FormControl(this.auto.plate, { validators: [Validators.required],updateOn: 'blur' }),
      'Choferes' : new FormControl(this.auto.chofer, { validators: [Validators.required],updateOn: 'blur' })})
    this.getCars()
    this.getChoferes()
  }

  get plate(){return this.autoForm.get('plate')}

  view (ver: any, auto : Auto){
    this.inputId = auto.auto_id
    this.inputPlate = auto.plate
    this.modalService.open(ver).result.then(() => {
      let auto = new Auto()
      auto.auto_id = this.inputId
      auto.plate = this.inputPlate
      this.autoService.update(auto).subscribe(() => {
        alert("Alta Exitosa")
        this.getCars()
      }, error =>{
        console.error(error)
      })
    })
    }


  del(id : number){
    this.autoService.delete(id).subscribe (() =>{
      alert ("Baja exitosa")
      this.getCars()
    }, error =>{
      alert (error.message)
      console.error(error)
    })
  }

  add () {
    if (
      this.autoForm.invalid
    ){
      alert ('campo vacio')
      return
    }
    let auto = new Auto()
    auto.plate = this.plate?.value
    this.autoService.add(auto).subscribe(() =>{
      this.getCars()
      alert("Alta exitosa")
    }, error =>{
      console.error(error)
    })
  }
}