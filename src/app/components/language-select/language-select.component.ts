import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {TranslateService} from "@ngx-translate/core";
import {LocalStorageEnum} from "../../core/enums/local-storage.enum";

@Component({
  selector: 'app-language-select',
  templateUrl: './language-select.component.html',
  styleUrls: ['./language-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageSelectComponent implements OnInit {
  public currentLang = environment.translate.defaultLanguage;
  public languages = environment.languages;

  private readonly storageKey = ''

  constructor(
    private translateService: TranslateService,
    private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    this.initLanguage();
  }

  selectLanguage(code: string) {
    if (code) {
      this.translateService.use(code);
      localStorage.setItem(LocalStorageEnum.LANGUAGE, code);
    }
  }

  private initLanguage(): void {
    const code = localStorage.getItem(LocalStorageEnum.LANGUAGE);
    if (!!code) {
      this.currentLang = code;
      this.translateService.use(code);
    }
  }
}
