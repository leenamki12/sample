import axios from 'axios';

// axios 객체를 전역 객체로 설정
window.axios = axios;

// axios의 기본 헤더 설정
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
