import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginPage from '../../src/pages/LoginPage';
import { BrowserRouter } from 'react-router-dom';
import {
  getAuth,
  Auth,
  signInWithCredential,
  GoogleAuthProvider
} from '@firebase/auth'
import {
  assertFails,
  assertSucceeds,
  initializeTestEnvironment,
  RulesTestEnvironment,
} from "@firebase/rules-unit-testing"
import fs from 'fs'
import { initTest } from '../utils/firebase-rules';

describe("LoginPageテスト", () => {
  test('正しい文字列が表示されている', () => {
    const { container } = renderPage()
    expect(container.innerHTML).toContain("ログインページ");
    expect(container.innerHTML).toContain("アカウントがない方は作成");
    expect(container.innerHTML).toContain("Googleでログイン");
  });

  describe("Googleログインのテスト", () => {
    let app
    let testEnv
    let firebaseAdmin
    let auth: Auth
    let idToken: string

    beforeEach(async () => {

      testEnv = await initTest()

      const module = await Test.createTestingModule({
        imports: [
          FirebaseAdminModule.forRootAsync({
            imports: [ConfigModule.forRoot()],
            useFactory: (config: ConfigService) => {
              return {
                credential: admin.credential.cert(
                  config.get('GOOGLE_APPLICATION_CREDENTIALS'),
                ),
              }
            },
            inject: [ConfigService],
          }),
        ],
      }).compile()
      app = module.createNestApplication()
      firebaseAdmin = module.get<FirebaseAdminSDK>(FIREBASE_ADMIN_INJECT)
      // FireaseAppが必要
      const firebaseApp = initializeApp({
        apiKey: process.env.FIREBASE_API_KEY,
        projectId: process.env.FIREBASE_PROJECT_ID,
      })
      auth = getAuth(firebaseApp)
      // 明示的にエミュレータに接続しないとエラーになる
      connectAuthEmulator(
        auth,
        `http://${process.env.FIREBASE_AUTH_EMULATOR_HOST}`,
      )
      // テスト前に全ユーザー削除する処理
      const { users } = await firebaseAdmin.auth().listUsers()
      const userIds = users.map((u) => {
        return u.uid
      })
      await firebaseAdmin.auth().deleteUsers(userIds)
    })



  })
})

const renderPage = () => {
  const renderPage = render(
    <BrowserRouter >
      <LoginPage />
    </BrowserRouter>
    );
  // screen.debug();
  return renderPage
}