import { Component
  ,OnInit
  ,Input
  ,ViewEncapsulation
  ,OnChanges
  ,SimpleChanges
  ,DoCheck
  ,AfterContentInit 
  ,AfterViewInit
  ,AfterViewChecked
  ,OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],

  // Overriding ViewEncapsulation
  encapsulation: ViewEncapsulation.Emulated // None, Native
})
export class ServerElementComponent implements
   OnInit
  ,OnChanges
  ,DoCheck
  ,AfterContentInit
  ,AfterContentChecked
  ,AfterViewInit
  ,AfterViewChecked
  ,OnDestroy
{

  //Add decorator @Input and import it so this property
  //can be exposed outside of here
  //it is basically a function, and needs ()

  @Input('srvElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  constructor() {
    console.log('constructor called!');
  }

  // LOOK AT ALL THESE HOOKS!
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called!');
  }

  ngDoCheck() {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called!');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit() {
    console.log('ngAfterViewInit called!');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called!');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called!');
  }
}
