import { DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { DummyService } from "shared";

import { HelloComponent } from "./hello";

describe("HelloComponent", () => {

    let fixture: ComponentFixture<HelloComponent>;
    let dummyServiceSpy: jasmine.SpyObj<DummyService>

    beforeEach(async(() => {

        const spy = jasmine.createSpyObj('DummyService', ['getDummyData']);

        return TestBed
            .configureTestingModule({
                declarations: [HelloComponent],
                providers: [
                    { provide: DummyService, useValue: spy}
                ]

            })
            .compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(HelloComponent);
                dummyServiceSpy = TestBed.inject(DummyService) as jasmine.SpyObj<DummyService>;
            });
    }));

    it("should display original title", () => {

        let debugElement = fixture.debugElement.query(By.css("h1"));
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toEqual("Hello :)");
    });

    it("should display a different test title", () => {

        let debugElement = fixture.debugElement.query(By.css("h1"));

        fixture.componentInstance.title = "Test Title";
        fixture.detectChanges();

        expect(debugElement.nativeElement.textContent).toEqual("Test Title");
    });

    it("should display dummy data", () => {
        expect(dummyServiceSpy.getDummyData).toHaveBeenCalledTimes(1)
    });
});
