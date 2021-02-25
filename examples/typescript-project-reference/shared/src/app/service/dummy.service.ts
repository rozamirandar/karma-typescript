import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
    providedIn: 'any'
})
export class DummyService {
    getDummyData(): Observable<any> {
        return of({
            id: '1234',
            name: 'Dummy'
        })
    }
}