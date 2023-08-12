import { initializeTestEnvironment, RulesTestContext } from '@firebase/rules-unit-testing';
import fs from 'fs';

export const initTest = async () => {
  const env = await initializeTestEnvironment({
    projectId: 'odekakemaster',
    firestore: {
      rules: fs.readFileSync('firestore.rules', 'utf8'),
      host: 'localhost',
      port: 8080,
    },
  });

  return env;
};

// RulesTestContext 型の引数を受け取ることで、認証済み or 未認証のコンテキストをそれぞれ渡せるようにしている.
export const getFirestore = (context: RulesTestContext) => {
  return context.firestore();
};
