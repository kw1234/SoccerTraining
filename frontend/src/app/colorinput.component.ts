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

       colorInput() {
           //console.log(this.colorData);
           this.colorService.getColors(this.colorData);
       }
}
