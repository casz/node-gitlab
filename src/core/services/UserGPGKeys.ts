import {
  BaseRequestOptions,
  BaseService,
  PaginatedRequestOptions,
  RequestHelper,
} from '../infrastructure';
import { UserId } from '.';

const url = userId => (userId ? `users/${encodeURIComponent(userId)}/gpg_keys` : 'users/gpg_keys');

class UserGPGKeys extends BaseService {
  all({ userId, ...options }: { userId?: UserId } & PaginatedRequestOptions = {}) {
    return RequestHelper.get(this, url(userId), options);
  }

  add(title, key, { userId, ...options }: { userId?: UserId } & BaseRequestOptions = {}) {
    return RequestHelper.post(this, url(userId), {
      title,
      key,
      ...options,
    });
  }

  show(keyId, { userId, ...options }: { userId?: UserId } & BaseRequestOptions = {}) {
    const kId = encodeURIComponent(keyId);

    return RequestHelper.get(this, `${url(userId)}/${kId}`, options);
  }

  remove(keyId, { userId, ...options }: { userId?: UserId } & BaseRequestOptions = {}) {
    const kId = encodeURIComponent(keyId);

    return RequestHelper.del(this, `${url(userId)}/${kId}`, options);
  }
}

export default UserGPGKeys;
