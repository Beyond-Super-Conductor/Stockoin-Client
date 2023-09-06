import { rest } from 'msw';
import { worker } from './browser';


interface LoginResponse {
  resultcode: string;
  message: string;
  response: {
    email: string;
    nickname: string;
    profile_image: string;
    age: string;
    gender: string;
    id: string;
    name: string;
    birthday: string;
    birthyear: string;
    mobile: string;
  }
}

export const handlers = [
  rest.get('/user', (req, res, ctx) => {
    return res(
      ctx.json({
        name: 'John Doe',
      }),
    );
  }
  ),
  rest.post('https://localhost:3000/login', (req, res, ctx) => {
    return res(
      ctx.json({
        "resultcode": "00",
        "message": "success",
        "response": {
          "email": "forwarm5891@gmail.com",
          "nickname": "목서버점령삼십분전",
          "profile_image": "https://ssl.pstatic.net/static/pwe/address/nodata_33x33.gif",
          "age": "30-39",
          "gender": "M",
          "id": "498523423",
          "name": "김명성",
          "birthday": "11-14",
          "birthyear": "1990",
          "mobile": "010-2274-3334"
        }
      }),
    );
  }
  ),
];

