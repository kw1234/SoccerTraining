import { Component } from '@angular/core';
import {ColorService} from './color.service';

@Component({
        selector: 'colorinput',
        templateUrl: './colorinput.component.html'
})

export class ColorInputComponent {
       constructor(public colorService: ColorService) {}

       colorData = {
           color1: '',
	   color2: '',
	   color3: ''
       }

       selectedColor = "red";

       async colorInput() {
           while(true) {
	       await this.delay(1000);
               this.colorService.getColors(this.colorData);
           }	       
	   //console.log(this.selectedColor);
       }

       private delay(ms: number)
       {
           return new Promise(resolve => setTimeout(resolve, ms));
       }
}
