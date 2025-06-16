import { mergeTests } from '@playwright/test';
import { test as authTest } from './fixturesAuth';
import { test as genericTest } from './fixturesGeneric';
import { test as factoryTest } from './fixturesFactories';
import { test as articleTest } from './fixturesArticle';
import { test as homeTest } from './fixturesHome';
import { test as profileTest } from './fixturesProfile';

export const test = mergeTests(
  authTest,
  genericTest,
  factoryTest,
  articleTest,
  homeTest,
  profileTest,
);
