import axios from "axios";
import store from '@/store'

function curl(method, module, data) {
  store.dispatch('loading', true);
  let url = process.env.VUE_APP_API_URL+'/'+module;
  let headers = { 'Content-Type': 'multipart/form-data; charset=UTF-8' };
  let user = JSON.parse(localStorage.getItem('USER')) || {};
  let institution = JSON.parse(localStorage.getItem('INSTITUTION')) || {};
  let params = {
    accessId: user.id||'',
    accessToken: user.token||'',
    institutionId: institution.id||''
  }

  if (!(data instanceof FormData)) {
    params = { ...data, ...params };
    data = new FormData();
  }

  switch (method) {
    case 'POST':
      for (const key in params) {
        data.append(key, params[key]?params[key]:'');
      }
    break;
    default:
      url += '?' + new URLSearchParams(params).toString();
    break;
  }

  return new Promise((resolve, reject) => {
    axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    }).then(res => {
      if (res.data.status == 'ERROR') {
        if (res.data.data == 'Invalid Access') {
          if (!window.location.pathname.includes('login')) {
            localStorage.removeItem('USER');
            localStorage.removeItem('INSTITUTION');
            localStorage.removeItem('INSTITUTIONS');
            location.reload();
          }
        }
        reject(res.data.data);
      } else {
        resolve(res.data);
      }
    })
    .catch((error) => {
      reject(error);
    })
    .finally(() => {
      store.dispatch('loading', false);
    });
  });
}

export { curl };