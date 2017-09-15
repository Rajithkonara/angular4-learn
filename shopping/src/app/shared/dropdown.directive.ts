import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
    selector: '[appDropdown]'
})

export class DropDownDirective {

    //Bind to css class
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('click') toggleOpen () {
        this.isOpen = !this.isOpen;
    }

}