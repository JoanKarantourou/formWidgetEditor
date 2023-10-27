import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MenuToPreviewService {
  private mainTitle = new BehaviorSubject<string>("This is the main title");
  private subtitle = new BehaviorSubject<string>("This is the subtitle");
  private button = new BehaviorSubject<string>("Submit");
  private firstNmIsRequiredSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private lastNmIsRequiredSubject: BehaviorSubject<boolean> =
    new BehaviorSubject<boolean>(false);
  private selectedColorSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>("#4655c3");
  private userDataSubject: BehaviorSubject<any> = new BehaviorSubject<any>({});

  selectedColor$: Observable<string> = this.selectedColorSubject.asObservable();
  userData$: Observable<any> = this.userDataSubject.asObservable();

  getMainTitle(): Observable<string> {
    return this.mainTitle.asObservable();
  }

  setMainTitle(title: string) {
    this.mainTitle.next(title);
  }

  getSubtitle(): Observable<string> {
    return this.subtitle.asObservable();
  }

  setSubtitle(title: string) {
    this.subtitle.next(title);
  }

  getFirstNmIsRequired(): Observable<boolean> {
    return this.firstNmIsRequiredSubject.asObservable();
  }

  setFirstNmIsRequired(isRequired: boolean) {
    this.firstNmIsRequiredSubject.next(isRequired);
  }

  getLastNmIsRequired(): Observable<boolean> {
    return this.lastNmIsRequiredSubject.asObservable();
  }

  setLastNmIsRequired(isRequired: boolean) {
    this.lastNmIsRequiredSubject.next(isRequired);
  }

  getButton(): Observable<string> {
    return this.button.asObservable();
  }

  setButton(btn: string) {
    this.button.next(btn);
  }

  getSelectedColor(): Observable<string> {
    return this.selectedColor$;
  }

  setSelectedColor(color: string) {
    this.selectedColorSubject.next(color);
  }

  setUserData(userData: any) {
    this.userDataSubject.next(userData);
  }

  getUserData(): Observable<any> {
    return this.userData$;
  }
}
