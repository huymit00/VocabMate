import {GoogleSignin} from '@react-native-google-signin/google-signin';

const init = () => {
  GoogleSignin.configure({
    iosClientId:
      '871766117735-22k23rfe84q0hs8unmhh0843fpslb9kq.apps.googleusercontent.com',
  });
};

type LoginResult =
  | {
      success: true;
      accessToken: string;
      idToken: string;
    }
  | {
      success: false;
      accessToken: null;
      idToken: null;
    };

const login = async (): Promise<LoginResult> => {
  try {
    await GoogleSignin.hasPlayServices({
      showPlayServicesUpdateDialog: true,
    });

    await GoogleSignin.signIn();

    const {accessToken, idToken} = await GoogleSignin.getTokens();

    return {
      success: true,
      accessToken,
      idToken,
    };
  } catch (err) {
    console.log('GOOGLE-LOGIN-ERROR', (err as unknown as any).message);

    return {success: false, idToken: null, accessToken: null};
  }
};

const logout = async () => {
  try {
    await GoogleSignin.signOut();

    return true;
  } catch (err) {
    console.log('GOOGLE-LOGOUT-ERROR', err);
  }
};

export const GoogleService = {
  init,
  login,
  logout,
};
