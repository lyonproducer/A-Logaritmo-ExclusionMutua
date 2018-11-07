import { Component, OnInit } from '@angular/core';
import { Host } from 'src/app/Models/Host';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  localHost : Host = {
    name:'vacio',
    id:0,
    active:false
  }

  message:string='Ninguna acción';

  hostsList : Host[];

  constructor() {
    this.hostsList=[];
  }

  ngOnInit() {
  }


  startHost(hostName:string){

    if(this.hostsList.length==0){
      var host = new Host(hostName,1,true);
      this.hostsList.push(host);
      this.localHost = host;
      this.message='Recibe enter & manda Ok';

    }else{

      var host = new Host(hostName,this.hostsList[this.hostsList.length-1].id+1,false);
      console.log("añadir",host);
      this.hostsList.push(host);
      this.message='block';
    }

    console.log("lista Host",this.hostsList);
  }

  exitHost(host:Host){

    if(this.hostsList.length>0){

      const index: number = this.hostsList.indexOf(host);
      if (index !== -1) {
        this.hostsList.splice(index, 1);
      }
      
      this.hostsList[0].active = true;
      this.localHost = this.hostsList[0];
      this.message='Recibe exit y manda Ok';

    }

    if(this.hostsList.length==0){
      console.log('lista vacia');
      this.localHost = new Host('vacio',0,false);
      this.message='No hay host consumiento el servidor';
    }

  }

}
