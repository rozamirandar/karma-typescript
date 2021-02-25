import { Component } from "@angular/core";

import { DummyService } from 'shared';

@Component({
    selector: "app-hello",
    styleUrls: ["../assets/style/main.css", "../assets/style/main.less", "../assets/style/main.scss"],
    templateUrl: "hello.html"
})
export class HelloComponent {
    public title = "Hello :)";
    public data;

    constructor(private dummyService: DummyService) {
        this.dummyService.getDummyData().subscribe(
            (data) => this.data = data
        )
    }
}
