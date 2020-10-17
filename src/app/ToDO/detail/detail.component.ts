import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
  details=[{id:1,date:'12/12/2020',title:"Awesome work",description:"nothing much to do but was fine"},{id:2,date:'13/12/2020',title:"go to new delhi",description:"to attend the college lecture"},
  {id:3,date:'14/12/2020',title:"no work",description:"sunday sleep day"},{id:4,date:'15/12/2020',title:" work",description:"so many work from college."}]
  


  constructor() {
   }

  ngOnInit(): void {
  }

}
