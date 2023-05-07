import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit,OnChanges,DoCheck {
  @Input()
  countChild;

  constructor() {
    console.log("Contructor : Child-component");
   }
  ngDoCheck(): void {
    console.log("ngDoCheck : "+this.countChild);
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges : JSON.stringify(changes)");
    console.log(changes);
  }

  ngOnInit(): void {
    console.log("ngOnInit : Child-component");
  }
  increment(){
    this.countChild++;
  }

}
