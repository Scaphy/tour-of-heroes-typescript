import { Component } from '@angular/core';
let heroCount = 2;
let mechantCount =4;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  title = 'La tour des 1 héros';
  title2 = "L'escalier infini";
  title3 = "Pour finir toujours plus haut";
  titleStyle = {
    'font-family' : 'Arial', 'font-size' : '2rem'
  };
 titleStyle3 = {
    'padding' : `30px`, 'background-color' : `red`, 'color' :'yellow'
  }/*
   padding :30px;
  background-color :yellowgreen;
  color:darkgreen; */
  /*titleStyle4 = {
    'padding' : '20px', 'background-color' : 'darkgreen', 'color': 'yellowgreen'
  }
  addHero() {
    this.title = 'La tour des ' + (heroCount++) + ' héros';
  }
  suppHero() {
    this.title = 'La tour des ' +(heroCount--) + ' héros';
  }
  effHeros() {
    this.title = 'La tour des ' + (heroCount=0) + ' heros';
  }
  username = 'Anonymous';
  pseudo = "unknown";
  pseudo2 = "util";
}*/
  export class AppComponent {
    title = 'La tour des 1 héros';
    title2='La tour des  1 méchants'
    titleStyle = {'font-family' : 'Arial', 'font-size' : '2rem'};
    username = 'Anonymous';
    heroes = [
    'Batman',
    'Superman',
    'Wonderwoman',
    'Ironman'
    ];
    pseudo = "unknown";

     heroToAdd = '';
     heroToDell = '';
     mechantToAdd ='';
     mechantToDell='';

    addHero() {
      this.heroes.push(this.heroToAdd);
      this.title = 'La tour des ' + (heroCount++) + ' héros';
    }
    dellHero(){
      this.heroes.pop();
      this.title = 'La tour des ' + (heroCount--) + ' héros';
    }

     Mechants = [
      'BadBatman',
      'BadSuperman',
      'BadWonderwoman',
      'BadIronman'
      ];
      addMechant() {
        this.Mechants.push(this.mechantToAdd);
        this.title2 = 'La tour des ' + (mechantCount++) + ' Mechants';
      }
      dellMechant(mechantToDell){
        /*this.Mechants.pop();*/
        Mechants.forEach((element,index)=>{
          if(element==mechantToDell) delete Mechants[index];
       });

        this.title = 'La tour des ' + (mechantCount--) + ' méchants';
      }






}

