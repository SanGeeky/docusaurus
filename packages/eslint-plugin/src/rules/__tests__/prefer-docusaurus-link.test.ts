/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import rule from '../prefer-docusaurus-link';
import {RuleTester} from './testUtils';

const errorsJSX = [{messageId: 'useLinkTag'}] as const;

const ruleTester = new RuleTester({
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
});

ruleTester.run('prefer-docusaurus-link', rule, {
  valid: [
    {
      code: '<Link>text</Link>',
    },
  ],

  invalid: [
    {
      code: '<a>baby</a>',
      errors: errorsJSX,
    },
  ],
});
