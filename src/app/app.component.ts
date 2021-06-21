import { Component } from '@angular/core';
import { EMPTY, EmptyError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-demo';
  userName: string ;
  resetFlag: boolean;
  password1: string;
  password2: string;
  pwdFlag:boolean;
  pwdString: number=0;
  skillArr : string[] = [];
  skill:string;

  onAddSkill(){
    this.skillArr.push(this.skill);
  }

  isKeyUP(event: Event){
    //let inputText = (<HTMLInputElement> event.target).value;
   // InputEvent inputEvent = (<HTMLInputElement> event.target).
    if(this.userName == ''){
      this.resetFlag = true;
    }
    else{
      this.resetFlag = false;
    }
  }

  onPassword()
  {
    if(this.password1 == '' || this.password1.length < 8){
      this.pwdFlag = false;
    }
    else{
      this.pwdFlag=true;
    }
  }
  onClick(event: Event){
      this.userName = "";
      this.resetFlag = true;
      this.password1="";
      this.password2="";
      this.pwdFlag=false;
      this.pwdString=0;
  }

  onChangePwd(){
    if(this.password2 == ''){
      this.pwdString = 0;
    }
    else if(this.password2.length < 8){
      this.pwdString = 1;
    }
    else{
      this.pwdString = 2;
    }
  }

  getColor(){
    if(this.pwdString == 0){
      return 'yellow';
    }
    else if(this.pwdString == 1){
      return 'red';
    }
    else{
      return 'green';
    }
  }

  
}




