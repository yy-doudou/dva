import request from '../utils/request';

export function query() {
  return request('/api/user/get_list');
}