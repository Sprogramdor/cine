import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { HeroComponent } from "./hero/hero.component";

@NgModule({
    declarations:[
        HeaderComponent,
        HeroComponent,
        FooterComponent
    ],
    exports:[
        HeaderComponent,
        HeroComponent,
        FooterComponent
    ],
    imports:[
        CommonModule
    ]
})

export class SharedModule{}