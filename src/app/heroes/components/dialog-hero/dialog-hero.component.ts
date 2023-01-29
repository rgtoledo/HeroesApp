import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hero } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-dialog-hero',
  templateUrl: './dialog-hero.component.html',
  styleUrls: ['./dialog-hero.component.css']
})
export class DialogHeroComponent {



  constructor(private dialogref: MatDialogRef<DialogHeroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Hero
    ){


  }

  ngOnInit(): void {

    console.log('data', this.data);
  }


  delete(){
this.dialogref.close(true);
  }

  cancel(){
this.dialogref.close();
  }
  
}
