import { Component, OnInit } from '@angular/core';
import { DEFAULT_LANG } from '@app/constants';
import { ILang } from '@app/interfaces';
import { LangService } from '@app/services/lang.service';
import { LANG_TYPE } from '@app/types';

@Component({
  selector: 'tung-adjust-lang',
  templateUrl: './adjust-lang.component.html'
})
export class AdjustLangComponent implements OnInit {
  lang: LANG_TYPE = DEFAULT_LANG;
  langs: Array<ILang> = [];

  constructor(private langSer: LangService) { }

  ngOnInit() {
    this.langs = this.langSer.langs$.value;
    this.lang = this.langSer.getLang;
  }

  onChangeLang(evt: LANG_TYPE) {
    this.langSer.setLang = this.lang;
  }

}
