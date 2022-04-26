import $api from "../http";
import { AxiosResponse } from "axios";
// import { AuthResponse } from "../models/response/authResponse";

export default class CardService {
  static async addCard(cardNumber, expirationDate, cvv, amount) {
    return $api.post("/card", { cardNumber, expirationDate, cvv, amount });
  }
}
