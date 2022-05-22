import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputValues = {
    id: 0,
    name: '',
    age: 0,
    email: '',
    phone: '0'
  };

  users = [
    {
      id: 1,
      name: 'thaila',
      age: 30,
      email: 'thailaph15128@fpt.edu.vn',
      phone: '0327835270'

    }
  ];

  remove(id: number) {
    this.filterUsers = this.filterUsers.filter(user => user.id !== id);
  }
  filterUsers = this.users;

  // onSearch(event: any) {
  //   this.searchValue = event.target.value;
  //   this.filterUsers = this.users.filter(user => {
  //     const userNameLowerCase = user.name.toLowerCase();
  //     const searchValueLowerCase = this.searchValue.toLowerCase().trim();
  //     return userNameLowerCase.indexOf(searchValueLowerCase) !== -1;
  //   }
  //   );
  // }

  onSubmit(userForm: NgForm) {
    console.log(userForm.value);
    // console.log(formData);
    // 0. Tìm id lớn nhất đang có để +1
    const inputValuesIds = this.users
      .map(user => user.id) // lấy ra mảng mới chỉ có id
      .sort((a: number, b: number) => b - a); // sort các id đang có
    const maxId = inputValuesIds[0];
    // 1. Push dữ liệu mới nhận từ form vào mảng
    if (userForm.value.id === 0) {
      this.users.push({
        ...userForm.value, // lấy ra object value của form
        id: maxId + 1
      });
    } else {
      //update
    }
    // 2. Cập nhật giá trị của form về default
    userForm.resetForm({
      name: '',
      age: 0
    });

    //------------

    if (this.inputValues.id) {
      // Neu co id thi se la cong viec chinh sua
      // Tim xem dau la phan tu co id la id dang duoc chinh sua
      for (let i = 0; i < this.users.length; i++) {
        // Kiem tra phan tu nao co id trung voi id cua du lieu chinh sua
        if (this.users[i].id === this.inputValues.id) {
          // Khi tim thay thi gan gia tri cho phan tu do
          this.users[i] = this.inputValues;
        }
      }
    } else {
      // Cong viec tao moi
      // Nhet thang inputValues vao mang this.inputValues
      this.inputValues = {
        ...this.inputValues,
        id: this.users.length + 1,
        age: Number(this.inputValues.age)
      };

      this.users.push(this.inputValues);
    }
  }
  onEdit(user: any) {
    this.inputValues = user;
  }
}