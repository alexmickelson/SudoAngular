import { Component} from '@angular/core'

@Component ({
    selector: 'appMenu',
    templateUrl: './menu.component.html'
})

export class MenuComponent{
    logo: any = {
        "src": 'assets/img/Sudo.png',
        "height": 65,
        "width": 175
    };

    banners: string[] = [
        "assets/img/gitti.png",
        "assets/img/javaSc.png",
        "assets/img/ubun.png"
    ];
}