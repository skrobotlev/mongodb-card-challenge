import axios from "axios";
import { makeAutoObservable } from "mobx";
import { API_URL } from "../http";
import CardService from "../services/card-service";

export default class Store {
  user = {};
  isAuth = false;
  isLoading = false;
  addingCard = {};

  constructor() {
    makeAutoObservable(this);
  }

  // set addCard(card) {
  //   return (this.addCard = card);
  // }

  async addCard(form) {
    const { cardNumber, expirationDate, cvv, amount } = form;
    try {
      const response = await CardService.addCard(
        cardNumber,
        expirationDate,
        cvv,
        amount
      );
      console.log(response, "response");
      this.addingCard = response;
      return response;
    } catch (error) {
      console.log(error.response?.data?.message);
      console.log(error);
    }
  }
}
