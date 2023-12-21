import { Component } from '@angular/core';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent 
{
  title = 'logic';
  //  Variables
  public arr: boolean[] = [false, false, false, false, false, false, false, false, false];
  public arrStr: string[]=["","","","","","","","",""];
  cnt:number=2;
  static index:number=0;
  playerWinner:string="";
  computerWinner:string="";
  netanel:string="All Rights Reserved Netanel Avital ©";
  besad:string='בס"ד';
  winnerAudio:string="../../../assets/audio/aloof.wav"
  lostAudio:string="../../../assets/audio/defectwithproblem.wav"
  imgRes:string ="";
  cntLessIttertion:number=0;
  flagBreak:number=0;
  xo:string[]=["","","","","","","","",""];


// function player - red
  changeStatus(index:number)
  { debugger
    this.cntLessIttertion++;
    if(this.cnt % 2==0)
    {
     this.arr[index] =true;
     this.arrStr[index]="red";
     this.xo[index]="X";
     this.victory();
     this.choiseClass(this.arr)
    }
    else this.choiseClass(this.arr) 
   }


//function computer - blue
  async choiseClass(arr:any)
  {
    this.cntLessIttertion++;
    this.cnt++;
    if(this.cnt%2==1)
  {
      for (let i = 0; i < this.arr.length; i++) 
    {
      if(arr[i]==false)
      {
        arr[i]=true;
        await this.delay(1000);
        this.arrStr[i]="blue";
        this.xo[i]="O";
        this.victory();
        this.cnt++;
        break;
      }
    }
  }
}

// function delay to computer respone(ms)
delay(ms: number) 
{
 return new Promise( resolve => setTimeout(resolve, ms) );
}

// function check victory
victory()
{  
  
  if(this.cntLessIttertion>4)
{
  if(this.arrStr[0]=='red' && this.arrStr[1]=='red' && this.arrStr[2]=='red' || this.arrStr[0]=='red' && this.arrStr[3]=='red' && this.arrStr[6]=='red' || 
  this.arrStr[1]=='red' && this.arrStr[4]=='red' && this.arrStr[7]=='red' || this.arrStr[2]=='red' && this.arrStr[5]=='red' && this.arrStr[8]=='red' ||
  this.arrStr[3]=='red' && this.arrStr[4]=='red' && this.arrStr[5]=='red' || this.arrStr[6]=='red' && this.arrStr[7]=='red' && this.arrStr[8]=='red' ||
  this.arrStr[0]=='red' && this.arrStr[4]=='red' && this.arrStr[8]=='red' || this.arrStr[2]=='red' && this.arrStr[4]=='red' && this.arrStr[6]=='red')
  {
    this.flagBreak++;
    if(this.flagBreak==1)
    { 
     {{this.playerWinner="ניצחת אלוף העולם"}};
       this.imgRes="../assets/img/crown.png";
       this.playAudio1();
    }
  }
  else if(this.arrStr[0]=='blue' && this.arrStr[1]=='blue' && this.arrStr[2]=='blue' || this.arrStr[0]=='blue' && this.arrStr[3]=='blue' && this.arrStr[6]=='blue' || 
  this.arrStr[1]=='blue' && this.arrStr[4]=='blue' && this.arrStr[7]=='blue' || this.arrStr[2]=='blue' && this.arrStr[5]=='blue' && this.arrStr[8]=='blue' ||
  this.arrStr[3]=='blue' && this.arrStr[4]=='blue' && this.arrStr[5]=='blue' || this.arrStr[6]=='blue' && this.arrStr[7]=='blue' && this.arrStr[8]=='blue' ||
  this.arrStr[0]=='blue' && this.arrStr[4]=='blue' && this.arrStr[8]=='blue' || this.arrStr[2]=='blue' && this.arrStr[4]=='blue' && this.arrStr[6]=='blue')
  {
    this.flagBreak++;
    if(this.flagBreak==1)
    {
     {{this.computerWinner="הפסדת סמרטוט עולם"}};
     this.imgRes="../assets/img/lost.png";
     this.playAudio2();
    }
  }
 }
}

// function audio
playAudio1(){
  let audio = new Audio();
  audio.src = this.winnerAudio;
  audio.load();
  audio.play();
}
playAudio2(){
  let audio = new Audio();
  audio.src = this.lostAudio;
  audio.load();
  audio.play();
}


}


