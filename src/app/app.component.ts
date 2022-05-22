import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  champs = [
    {
      name: 'da xâu',
      dame: 400,
      defend: 2,
      speed: 3,
      price: 3200,
      avatar: 'https://picsum.photos/id/237/200/300',
    },
    {
      name: 'rét',
      dame: 600,
      defend: 6,
      speed: 7,
      price: 8,
      avatar: 'https://picsum.photos/seed/picsum/200/300',
    },
    {
      name: 'ni xin',
      dame: 200,
      defend: 10,
      speed: 11,
      price: 12,
      avatar: 'https://picsum.photos/200/300?grayscale',
    },
  ];

  studentName = 'thaila';
  studentId = 'ph15128';


  showStatus = true;
  onClickBtn() {
    console.log("ahiahi");
    this.showStatus = !this.showStatus;
  }



  inputValue = {
    name: '',
    avatar: '',
    dame: '',
    defend: '',
    speed: '',
    price: '',
  };
  onInput(event: any, key: 'name'|'dame'|'defend'|'speed'|'avatar'|'price') {
    this.inputValue[key] = event.target.value;
  }

  // inputName='';
  // onInputName(event: any) {
  //   this.inputValue.name = event.target.value;
  // }

  // inputAvatar='';
  // onInputAvatar(event: any) {
  //   this.inputValue.avatar = event.target.value;
  // }

  onSubmit() {
    console.log('Giá trị obj các ô input', this.inputValue);
    this.champs.push({
      ...this.inputValue,
      dame: +this.inputValue.dame,
      defend: +this.inputValue.defend,
      speed: +this.inputValue.speed,
      price: +this.inputValue.price
    });

    this.inputValue = {
      name:'',
      dame:'',
      defend: '',
      speed:'',
      price: '',
      avatar:'',
    }
  }
}
