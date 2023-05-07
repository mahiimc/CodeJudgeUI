import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as ace from 'ace-builds';
import 'ace-builds/src-noconflict/theme-monokai';
import 'ace-builds/src-noconflict/mode-java';
import 'ace-builds/webpack-resolver';
import { Code } from '../../shared/models/Code';
import { CodeJudgeService } from '../../services/code-judge.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, AfterViewInit {
  langs: string[] = ['Java', 'Python', 'C', 'Kotlin', 'JavaScript'];

  @ViewChild('lang') private selectedLang!: ElementRef<HTMLInputElement>;
  @ViewChild('editor') private editor!: ElementRef<HTMLInputElement>;
  defaultCode = `import java.util.*;

public class MySolution { 
       
  public static void main (String[] args){
      System.out.println("Hello World");
  }
}`;

  defaultsMap = new Map<string, Code>();

  constructor(private _code: CodeJudgeService) {
    console.log('Home COmponent loaded');
  }
  ngAfterViewInit(): void {
    ace.config.set('fontSize', '14px');
    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.setTheme('ace/theme/monokai');
    aceEditor.session.setMode(`ace/mode/java`);
    aceEditor.session.setValue(this.defaultCode);
  }

  ngOnInit() {}

  prepareDefaultMap() {
    this.defaultsMap.set('Java', {
      code: this.defaultCode,
      mode: 'java',
    });

    this.defaultsMap.set('Python', {
      code: `print("Hello World")`,
      mode: 'python',
    });

    this.defaultsMap.set('JavaScript', {
      code: `console.log("Hello World")`,
      mode: 'javascript',
    });
  }

  judgeCode() {
    console.log('Code Judge initiated');
    let data = {
      problemid: '69',
      lang: this.selectedLang.nativeElement.value,
      code: this.editor.nativeElement.value,
    };
    console.log(data);
    this._code.judgeCode(data).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: console.log,
    });
  }
}
