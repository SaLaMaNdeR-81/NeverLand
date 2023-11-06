import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LoadingService {
    private isLoadingg = new BehaviorSubject < boolean > (false);

    constructor() { }

    showLoader() {
        this.isLoadingg.next(true);
    }

    hideLoader() {
        this.isLoadingg.next(false);
    }

    getLoaderState() {
        return this.isLoadingg.asObservable();
    }
}
