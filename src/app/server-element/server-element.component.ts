import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  
  //Add decorator @Input and import it so this property
  //can be exposed outside of here
  //it is basically a function, and needs ()

 @Input() element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit() {
  }

}
