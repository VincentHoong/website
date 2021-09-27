import Vue from 'vue';
import { curl } from './http';

Vue.mixin({
  data() {
    return {
    }
  },
  created() {
  },
  mounted() {
  },
  methods: {
    curl,
    camelize(input, separator = '_') {
      let string = this.ucwords(input.replace(separator,' '));
      return string.charAt(0).toLowerCase() + string.substr(1);
    },
    decodeVueParam(input) {
      return JSON.parse(JSON.stringify(input));
    },
    deepGet() {
      let v = arguments[0];
      let i = 1;
      while (v && i < arguments.length) {
        v = v[arguments[i]];
        i++;
      }
      return v;
    },
    dispatchAction(action, payload) {
      this.$store.dispatch(action, payload);
    },
    exportCsv(res, filename = '') {
      return new Promise((resolve,reject) => {
        try {
          let csvContent = "data:text/csv;charset=utf-8,";
          csvContent += res;
    
          const data = encodeURI(csvContent);
          const link = document.createElement("a");
          link.setAttribute("href", data);
          link.setAttribute("download", (filename || 'download')+".csv");
          link.click();
          resolve()
        } catch (error) {
          reject(error);
        }
      });
    },
    json2Csv(res) {
      return [
        Object.keys(res[0]).join(","),
        ...res.map(item => Object.values(item).join(","))
      ]
      .join("\n")
      .replace(/(^\[)|(\]$)/gm, "");
    },
    csv2Json(res) {
      let rows = res.split('\n').map(row => row.split(','));
      const headers = rows.shift();

      rows.forEach((row, rowKey) => {
        let items = {};
        headers.forEach((header, headerKey) => {
          items[header] = row[headerKey];
        });
        rows[rowKey] = items;
      });
      
      return rows;
    },
    getVar(params) {
      return this.deepGet(this.$store.getters, params);
    },
    getRouteData(type, params) {
      return params ? this.deepGet(this.$route, type, params) : this.$route[type];
    },
    jsonParse(data) {
      try {
        return JSON.parse(data);
      } catch (e) {
        return data;
      }
    },
    localStorage(key, value) {
      if (value) {
        localStorage[key] = JSON.stringify(value);
      } else {
        return localStorage[key] && JSON.parse(localStorage[key]);
      }
    },
    notify(load) {
      this.dispatchAction('notify', load);
    },
    popUp(title, message, success, fail, params) {
      let load = {
        title,
        message,
        success,
        fail,
        successMessage  : params && params.successMessage,
        failMessage     : params && params.failMessage,
        persistent      : params && params.persistent,
        show: true
      };
      this.dispatchAction('popUp', load);
    },
    removeLocalStorage(key) {
      if (key) {
        if (Array.isArray(key)) {
          (key).forEach(element => {
            localStorage.removeItem(element);
          });
        }
        localStorage.removeItem(key);
      } else {
        localStorage.clear();
      }
    },
    snakelize(input, separator = '_') {
        let pattern = /[a-z][0-9A-Z]+/g;
        return input.replaceAll(pattern, function(match) {
          return match[0]+separator+match[1];
        }).toLowerCase();
    },
    ucwords(input) {
      let string = input.replace(/ [\w]/g, word => word.toLocaleUpperCase()).trim();
      return string.charAt(0).toUpperCase() + string.substr(1);
    },
    upload(file, callback) {
      this.curl("POST", "documents/upload", {file:file})
      .then((res) => {
        callback(res);
      })
      .catch((err) => {
        alert(err);
      })
    }
  }
})