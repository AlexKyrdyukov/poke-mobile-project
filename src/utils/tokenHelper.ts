import storageItem from 'src/utils/AsyncStorageHelper';

const getTokens = async () => {
  const sessionEmail = await storageItem.sessionEmail.get();
  if (!sessionEmail) {
    return ['null'];
  }
  const isString = (email: string | null): email is string => {
    return (email as string)?.length !== undefined;
  };
  const userEmail = isString(sessionEmail) ? sessionEmail : '';
  const tokensData = await storageItem.tokens.get(userEmail);
  const tokens = isString(tokensData) ? tokensData : '';
  const [accessToken, refreshToken] = tokens.split(', ');
  return [accessToken, refreshToken];
};

const setTokens = async (response: string) => {
  const sessionEmail = await storageItem.sessionEmail.get();
  if (!sessionEmail) {
    return ['null'];
  }
  await storageItem.tokens.set(response, sessionEmail);
};

export default {
  getTokens,
  setTokens,
};
