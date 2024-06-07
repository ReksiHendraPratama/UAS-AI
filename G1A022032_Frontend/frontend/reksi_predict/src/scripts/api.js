// TODO: Silakan sesuaikan BASE URL dari endpoint Anda
const BASE_URL = 'https://mlgc-gopimahendra-jbe5v4hj3a-et.a.run.appYOUR_BASE_URL';

const ENDPOINT = {
  predict: `${BASE_URL}/predict`,
};

class PredictAPI {
  static async predict(data) {
    const response = await fetch(ENDPOINT.predict, {
      method: 'POST',
      body: data,
      redirect: 'follow',
    });

    const json = await response.json();
    return json;
  }
}
